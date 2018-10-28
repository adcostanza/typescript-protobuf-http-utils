import { Observable } from 'rxjs/Observable';

/**
 * Namespace protos.
 * @exports protos
 * @namespace
 */
export namespace protos {

    /**
     * Contains all the RPC service clients.
     * @exports protos.ClientFactory
     * @interface
     */
    export interface ClientFactory {

        /**
         * Returns the TodoService service client.
         * @returns {protos.TodoService}
         */
        getTodoService(): protos.TodoService;
    }

    /**
     * Builder for an RPC service server.
     * @exports protos.ServerBuilder
     * @interface
     */
    export interface ServerBuilder {

        /**
         * Adds a TodoService service implementation.
         * @param {protos.TodoService} impl TodoService service implementation
         * @returns {protos.ServerBuilder}
         */
        addTodoService(impl: protos.TodoService): protos.ServerBuilder;
    }

    /**
     * Constructs a new TodoService service.
     * @exports protos.TodoService
     * @interface
     */
    export interface TodoService {

        /**
         * Calls createTodo.
         * @param {protos.createTodoRequest} request createTodoRequest message or plain object
         * @returns {Observable<protos.Todo>}
         */
        createTodo(request: protos.createTodoRequest): Observable<protos.Todo>;

        /**
         * Calls deleteTodo.
         * @param {protos.deleteTodoRequest} request deleteTodoRequest message or plain object
         * @returns {Observable<protos.deleteTodoResponse>}
         */
        deleteTodo(request: protos.deleteTodoRequest): Observable<protos.deleteTodoResponse>;

        /**
         * Calls listTodos.
         * @param {protos.listTodosRequest} request listTodosRequest message or plain object
         * @returns {Observable<protos.listTodosResponse>}
         */
        listTodos(request: protos.listTodosRequest): Observable<protos.listTodosResponse>;
    }

    /**
     * Constructs a new Todo.
     * @exports protos.Todo
     * @interface
     */
    export interface Todo {

        /**
         * Todo id.
         * @type {string|undefined}
         */
        id?: string;

        /**
         * Todo description.
         * @type {string|undefined}
         */
        description?: string;
    }

    /**
     * Constructs a new createTodoRequest.
     * @exports protos.createTodoRequest
     * @interface
     */
    export interface createTodoRequest {

        /**
         * createTodoRequest description.
         * @type {string|undefined}
         */
        description?: string;
    }

    /**
     * Constructs a new deleteTodoRequest.
     * @exports protos.deleteTodoRequest
     * @interface
     */
    export interface deleteTodoRequest {

        /**
         * deleteTodoRequest id.
         * @type {string|undefined}
         */
        id?: string;
    }

    /**
     * Constructs a new deleteTodoResponse.
     * @exports protos.deleteTodoResponse
     * @interface
     */
    export interface deleteTodoResponse {
    }

    /**
     * Constructs a new listTodosRequest.
     * @exports protos.listTodosRequest
     * @interface
     */
    export interface listTodosRequest {
    }

    /**
     * Constructs a new listTodosResponse.
     * @exports protos.listTodosResponse
     * @interface
     */
    export interface listTodosResponse {

        /**
         * listTodosResponse todos.
         * @type {Array.<protos.Todo>|undefined}
         */
        todos?: protos.Todo[];
    }
}
