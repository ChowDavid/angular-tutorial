import {Injectable} from "@angular/core"

@Injectable() 
export class TodoService{
    todos=['Wash Dishes','Go To Dinner'];

    getTodos(){
        return this.todos;
    }

    addTodo(event:string){
        this.todos.push(event);
    }

   
}
