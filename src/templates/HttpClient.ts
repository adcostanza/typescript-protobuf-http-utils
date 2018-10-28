import {Observable} from 'rxjs'
import { {{packageName}} } from "{{packageLocation}}";
import {{serviceName}} = {{packageName}}.{{serviceName}}

import Axios from "axios";

type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;

export class {{clientName}} {
    call<T extends keyof {{serviceName}},
            R = ReturnType<{{serviceName}}[T]>>
        (name: T, body: FirstArgument<{{serviceName}}[T]>, token?: string): Observable<R> {
            let options = {};
            if(token !== undefined) {
                options = { headers: { Authorization: token } };
            }
            return Observable.create((observer) => {
                Axios.post('http://localhost:4567/' + name, body, options)
                    .then((resp) => {
                            if (resp.status == 200) {
                                observer.next(resp.data);
                                observer.complete();
                            } else {
                                observer.next(resp.status);
                                observer.complete();
                            }
                        }
                    ).catch((err) => {
                    if(err.response) {
                        observer.error(err.response.status + " " + JSON.stringify(err.response.data));
                    }

                })
            })
        }

{{#each routes}}
public {{./name}}$ = (body: {{../packageName}}.{{./requestName}}, token?: string): Observable<{{../packageName}}.{{./responseName}}> => this.call("{{./name}}", body, token);
{{/each}}

}