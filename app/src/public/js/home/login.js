"use strict";

const id = document.querySelector("#id"),
    pw = document.querySelector("#pw"),
    btnLogin = document.querySelector("button");

btnLogin.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    console.log(req);
}
