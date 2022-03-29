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

    static getUserInfo(id) {
        const users = this.#users;
        const id_index = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
           newUser[info] = users[info][id_index];
           return newUser
        }, {});

        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return { success : true };
    }
}

module.exports = UserStorage;