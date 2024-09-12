const { Cemetery, Grave, Reservation, ReservationDetail, User } = require('../models/index')
const getRupiah = require('../helpers/getRupiah');
const { Op, where } = require('sequelize')

class Controller {
    static async renderRegister(req, res) {
        const { errors } = req.query;
        if (errors) {
            errors = errors.split(',')
        }

        try {
            res.render('register', { errors });
        } catch (error) {
            res.send(error.message)
            console.log(error);
        }
    }

    static async handleRegister(req, res) {
        const { name, email, phone, password, address } = req.body;
        try {
            // res.send({name, email, phone, password, address});
            res.redirect('/login');
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                const messages = error.errors.map((el) => {
                    return el.message
                });

                res.redirect(`/register?errors=${messages}`);
            } else {
                res.send(error.message);
            }

            console.log(error);
        }
    }

    static async renderLogin(req, res) {
        const { errors } = req.query;
        try {
            res.render('login', { errors });
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                let messages = error.errors.map(el => el.message);
                return res.send(messages);
            } else {
                res.send(error.message)
            }

            console.log(error);
        }
    }

    static async handleLogin(req, res) {
        const { } = req.body;
        try {
            res.redirect('/');
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                let messages = error.errors.map(el => el.message);
                return res.redirect(`/register?errors=${messages}`);
            } else {
                res.send(error.message)
            }
        }
    }

    static async renderHome(req, res) {
        const { keyword, city } = req.query
        try {
            let where = {}

            if (keyword) {
                where.name = {
                    [Op.iLike]: `%${keyword}%`
                }
            }
            if (city) {
                where.city = {
                    [Op.iLike]: `%${city}%`
                }
            }
            let home = await Grave.findAll({
                include: {
                    model: Cemetery,
                    where
                }
            })
            res.render('index', { home, getRupiah })
            // res.send(home)
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }
    static async renderCemetery(req, res) {
        try {
            let cemetery = await Cemetery.findAll()
            res.render('pemakaman', { cemetery })
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }
    static async renderGrave(req, res) {
        try {
            let graves = await Grave.findAll({
                include: Cemetery
            })
            res.render('lahan', { graves, getRupiah })
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }
    static async detailGrave(req, res) {
        const { id } = req.params
        try {
            const detail = await Grave.findOne({
                include: Cemetery,
                where: {
                    id
                }
            })
            res.render('detail', { detail, getRupiah })
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }

    static async renderReservation(req, res) {
        const { id } = req.params
        try {
            const reserve = await Grave.findOne({
                include: Cemetery,
                where: {
                    id
                }
            })
            res.render('reservasi', { reserve, getRupiah })
        } catch (error) {

        }
    }
}

module.exports = Controller