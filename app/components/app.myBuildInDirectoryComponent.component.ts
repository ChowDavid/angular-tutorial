import {Component,Inject} from '@angular/core'
import {TodoService} from '../services/todo.service'

@Component({
    selector:'todos',
    template:`
        <h1>Test Buildin Directives</h1>
         <h2>Test for *ngIf</h2>
        <div *ngIf="todos">
        {{todos}}
        </div>
         <div *ngIf="!todos">
        No Found
        </div>
        <h2>Test for [ngSwitch]</h2>
       <div [ngSwitch]="value">

     <div *ngSwitchCase="'David'">1. Template - <b>{{value}}</b> </div>
     <div *ngSwitchCase="'John'">2. Template - <b>{{value}}</b> </div>
     <div *ngSwitchCase="'Peter'">3. Template - <b>{{value}}</b> </div>
     <div *ngSwitchDefault>Default Template</div>

  </div>
  <h2>Test for ngFor</h2>
  <div *ngIf="errorMsg" class="alert alert-danger">{{errorMsg}}</div>
  <input type="text" class="form-control" [(ngModel)]="todoInput" (keyup.enter)="addTodo()"/>
  <ul class="list-group">
    <li *ngFor="let todo of myLists; let i=index" class="list-group-item" >
       <a href="#" (dblclick)="removeTodo(i)"> {{i}} - {{todo}} </a>
    </li>
  </ul>
  <button class="btn btn-default" (click)="resetTodos()">Reset</button>

     `,
     providers :[TodoService]

})
export class MyBuildinDirectivesComponent {
    todos="Yes I am here";
    value:string="David";
    todoInput:string;
    errorMsg:string;
    myLists:any[];

    constructor(private todoService:TodoService){
        this.myLists=todoService.getTodos();
    }

    addTodo(){
        if (!this.todoInput || this.todoInput.length <3){
            this.errorMsg="Name must be at least 3 character";
        } else {
            this.todoService.addTodo(this.todoInput);
            this.errorMsg="";
            this.todoInput="";
        }
    }

    removeTodo(index:number){
        this.myLists.splice(index,1);
    }

    resetTodos(){
        this.myLists.length=0;
    }

 }