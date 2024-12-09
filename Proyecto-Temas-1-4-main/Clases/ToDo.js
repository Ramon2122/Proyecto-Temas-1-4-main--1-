import { todos } from "./todos.js";
class Todos extends User{
    constructor(id, title, completed) {
        super(this.userid);
        this.id = id;
        this.title = title;
        this.completed = completed;
    }
}
