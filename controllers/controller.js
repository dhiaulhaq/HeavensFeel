const {User} = require('../models/user')

class Controller{
    static async renderRegister(req, res){
        const {errors} = req.query;
        if (errors) {
            errors = errors.split(',')
        }

        try {
            res.render('register', {errors});
        } catch (error) {
            res.send(error.message)
            console.log(error);
        }
    }

    static async handleRegister(req, res){
        const {name, email, phone, password, address} = req.body;
        try {
            // res.send({name, email, phone, password, address});
            res.redirect('/login');
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                const messages = error.errors.map((el) => {
                    return el.message
                });
                
                res.redirect(`/register?errors=${messages}`);
            }else{
                res.send(error.message);
            }

            console.log(error);
        }
    }

    static async renderLogin(req, res){
        const {errors} = req.query;
        try {
            res.render('login', {errors});
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

    static async handleLogin(req, res){
        const {} = req.body;
        try {
            res.redirect('/');
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                let messages = error.errors.map(el => el.message);
                return res.redirect(`/register?errors=${messages}`);
            } else {
                res.send(error.message)
            }

            console.log(error);
        }
    }
}

module.exports = Controller