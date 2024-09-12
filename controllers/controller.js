const { Cemetery, Grave, Reservation, ReservationDetail, User } = require('../models/index')
const getRupiah = require('../helpers/getRupiah');
const { where } = require('sequelize');

class Controller {
    static async renderHome(req, res) {
        try {
            let home = await Grave.findAll({
                include: Cemetery
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
}

module.exports = Controller