// import {flatMap} from "rxjs/operators";
// import {TodoClient} from "../generated/TodoClient";
// //See https://github.com/adcostanza/protobuf-http-utils/tree/master/example
// //for the server implementation
//
// const todoClient = new TodoClient();
//
// const token = "WNwqY5OngUNv3sioM68z46kA";
// //auth protected route call with token, added as Authorization header
// const createAndListTodos$ = todoClient.createTodo$({"description": "Go grocery shopping"}, token)
//     .pipe(
//         flatMap(createTodoResponse => {
//             //non auth protected route with no Authorization header
//             return todoClient.listTodos$({});
//         })
//     );
//
// for (let i = 0; i < 5; i++) {
//     createAndListTodos$.subscribe((response) => {
//             console.log(response);
//         },
//         (err) => {
//             console.log(err);
//         });
// }
//
// //the final execution prints out something like this:
// //{ todos:
// //    [ { id: 'f0e2353f-a471-47fe-a3fe-b638909814b9',
// //        description: 'Go grocery shopping' },
// //      { id: '5cf98c26-9755-48d3-b924-3556a5cb0ac6',
// //        description: 'Go grocery shopping' },
// //      { id: '8a217393-2d34-43be-8a07-510d1d8186ec',
// //        description: 'Go grocery shopping' },
// //      { id: 'e95a4248-57dc-488e-acf6-3f35d12781cb',
// //        description: 'Go grocery shopping' },
// //      { id: '823fcddd-3596-4c1e-9036-2d419d0c7064',
// //        description: 'Go grocery shopping' } ] }