import {Observable} from 'rxjs'
import { protos } from "./protos";
import TodoService = protos.TodoService

import Axios from "axios";

type FirstArgument<T> = T extends (arg1: infer U, ...args: any[]) => any ? U : any;

export class TodoClient {
    call<T extends keyof TodoService,
            R = ReturnType<TodoService[T]>>
        (name: T, body: FirstArgument<TodoService[T]>, token?: string): Observable<R> {
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

public createTodo$ = (body: protos.createTodoRequest, token?: string): Observable<protos.Todo> => this.call("createTodo", body, token);
public deleteTodo$ = (body: protos.deleteTodoRequest, token?: string): Observable<protos.deleteTodoResponse> => this.call("deleteTodo", body, token);
public listTodos$ = (body: protos.listTodosRequest, token?: string): Observable<protos.listTodosResponse> => this.call("listTodos", body, token);

}