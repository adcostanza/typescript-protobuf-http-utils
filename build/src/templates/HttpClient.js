"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
{
    packageName;
}
from;
"{{packageLocation}}";
{
    {
        packageName;
    }
}
{
    {
        serviceName;
    }
}
var axios_1 = require("axios");
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
{
    clientName;
}
{
    call < T;
    keyof;
    {
        {
            serviceName;
        }
    }
    R = ReturnType < {};
    {
        serviceName;
    }
}
[T] >>
    (name);
T, body;
FirstArgument < {};
{
    serviceName;
}
[T] > ;
rxjs_1.Observable < R > {
    return: rxjs_1.Observable.create(function (observer) {
        console.log(body);
        axios_1.default.post('http://localhost:4567/' + name, body)
            .then(function (resp) {
            if (resp.status == 200) {
                observer.next(resp.data);
                observer.complete();
            }
            else {
                observer.next(resp.status);
                observer.complete();
            }
        }).catch(function (err) {
            if (err.response) {
                observer.error(err.response.status + " " + JSON.stringify(err.response.data));
            }
        });
    })
};
callWithAuth < T;
keyof;
{
    {
        serviceName;
    }
}
R = ReturnType < {};
{
    serviceName;
}
[T] >>
    (name);
T, body;
FirstArgument < {};
{
    serviceName;
}
[T] > , token;
string;
rxjs_1.Observable < R > {
    return: rxjs_1.Observable.create(function (observer) {
        console.log(body);
        axios_1.default.post('http://localhost:4567/' + name, body, { headers: { Authorization: token } })
            .then(function (resp) {
            if (resp.status == 200) {
                observer.next(resp.data);
                observer.complete();
            }
            else {
                observer.next(resp.status);
                observer.complete();
            }
        }).catch(function (err) {
            if (err.response) {
                observer.error(err.response.status + " " + JSON.stringify(err.response.data));
            }
        });
    })
};
{
    {
        each;
        routes;
    }
}
public;
{
    {
        /name}}$ = (body: {{../packageName;
    }
}
{
    {
        /requestName}}): Observable<{{../packageName;
    }
}
{
    {
        /responseName}}> => this.call("{{./name;
    }
}
", body);;
public;
{
    {
        /name}}WithAuth$ = (body: {{../packageName;
    }
}
{
    {
        /requestName}}, token: string): Observable<{{../packageName;
    }
}
{
    {
        /responseName}}> => this.callWithAuth("{{./name;
    }
}
", body, token);;
{
    {
        /each}};
    }
}
