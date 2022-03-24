"use strict";

const users = {
  id: ["jiwon", "jinyang", "hyenyang"],
  pw: ["jiwon50", "jinyang50", "hyenyang50"],
};

const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if (users.id.includes(id)) {
            const id_index = users.id.indexOf(id);
            if (users.pw[id_index] === pw) {
              return res.json({
                  success : true,
              });
            }
        }

        return res.json({
            success : false,
            msg : "Failed to login.",
        });
    },
};

module.exports = {
    output,
    process,
};