require('dotenv').config();
const express = require('express');
const { json } = require('express/lib/response');
const mongoose = require('mongoose');
const User = mongoose.model("User");
const Revenue = mongoose.model("Revenue");
const router = express.Router();





router.get('/data', (req, res) => {
    User.find()
        .then(user => {
            var result = [];
            result.push(user);
            Revenue.find()
                .then(rev => {
                    var pastRevenueReceveivedByMonth = [];
                    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ];

                    rev.forEach((item) => {
                        let months;
                        let d1 = item.datereceived;
                        let d2 = new Date();
                        months = (d2.getFullYear() - d1.getFullYear()) * 12;
                        months -= d1.getMonth();
                        months += d2.getMonth();
                        if (months <= 12) {
                            pastRevenueReceveivedByMonth.push({ "month": monthNames[d1.getMonth()], "totalAmount": item.amount })
                        }
                    });

                    result.push(pastRevenueReceveivedByMonth);
                    res.json(result);
                }).catch(err => {
                    console.log(err);
                })
        }).catch(err => {
            console.log(err);
        })
})









module.exports = router;