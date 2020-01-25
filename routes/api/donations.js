const express = require("express");
const mysql = require("mysql");
const router = express.Router();

module.exports = function(app) {
    router.post("/api/donations", function(req, res) {
        db.donations.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
        .then(function() {
            res.redirect("/confirmation");
        })
        .catch(function(err) {
            console.log(err);
            res.status(401).json(err);
        });
    });
}






