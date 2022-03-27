"use strict";

class UserStorage {
    static #users = {
        id : ["jiwon", "jinyang", "hyenyang"],
        pw : ["jiwon50", "jinyang50", "hyenyang50"],
        name : ["지원", "지냥", "혜냥"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
};

module.exports = UserStorage;