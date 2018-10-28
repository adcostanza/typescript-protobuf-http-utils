"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operators_1 = require("rxjs/operators");
var AuthClient_1 = require("../generated/AuthClient");
var authClient = new AuthClient_1.AuthClient();
//should make some code that reads the auth.proto file just like in Java and writes out the
//rpc routes like below:
authClient.login$({ "username": "admin", "password": "passw0rd" })
    .subscribe(function (response) {
    console.log(response);
}, function (err) {
    console.log(err);
});
var listUsersWithAuth$ = authClient.login$({ "username": "admin", "password": "passw0rd" })
    .pipe(operators_1.flatMap(function (loginResponse) {
    return authClient.listUsersWithAuth$({}, loginResponse.accessToken);
}));
listUsersWithAuth$.subscribe(function (response) {
    console.log(response);
}, function (err) {
    console.log(err);
});
