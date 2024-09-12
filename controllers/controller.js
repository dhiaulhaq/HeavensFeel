const { Cemetery, Grave, Reservation, ReservationDetail, User } = require('../models/index')

class Controller {
    static async renderHome(req, res) {
        try {
            let home = await Grave.findAll()
            res.send(home)
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }
    static async renderCemetery(req, res) {
        try {
            let cemetery = await Cemetery.findAll()
            res.send(cemetery)
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }
    static async renderGrave(req, res) {
        try {
            let graves = await Grave.findAll()
            res.send(graves)
        } catch (error) {
            res.send(error.message);
            console.log(error);
        }
    }


}

module.exports = Controller