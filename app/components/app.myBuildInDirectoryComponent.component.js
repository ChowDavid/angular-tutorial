"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var todo_service_1 = require('../services/todo.service');
var MyBuildinDirectivesComponent = (function () {
    function MyBuildinDirectivesComponent(todoService) {
        this.todoService = todoService;
        this.todos = "Yes I am here";
        this.value = "David";
        this.myLists = todoService.getTodos();
    }
    MyBuildinDirectivesComponent.prototype.addTodo = function () {
        if (!this.todoInput || this.todoInput.length < 3) {
            this.errorMsg = "Name must be at least 3 character";
        }
        else {
            this.todoService.addTodo(this.todoInput);
            this.errorMsg = "";
            this.todoInput = "";
        }
    };
    MyBuildinDirectivesComponent.prototype.removeTodo = function (index) {
        this.myLists.splice(index, 1);
    };
    MyBuildinDirectivesComponent.prototype.resetTodos = function () {
        this.myLists.length = 0;
    };
    MyBuildinDirectivesComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            template: "\n        <h1>Test Buildin Directives</h1>\n         <h2>Test for *ngIf</h2>\n        <div *ngIf=\"todos\">\n        {{todos}}\n        </div>\n         <div *ngIf=\"!todos\">\n        No Found\n        </div>\n        <h2>Test for [ngSwitch]</h2>\n       <div [ngSwitch]=\"value\">\n\n     <div *ngSwitchCase=\"'David'\">1. Template - <b>{{value}}</b> </div>\n     <div *ngSwitchCase=\"'John'\">2. Template - <b>{{value}}</b> </div>\n     <div *ngSwitchCase=\"'Peter'\">3. Template - <b>{{value}}</b> </div>\n     <div *ngSwitchDefault>Default Template</div>\n\n  </div>\n  <h2>Test for ngFor</h2>\n  <div *ngIf=\"errorMsg\" class=\"alert alert-danger\">{{errorMsg}}</div>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"todoInput\" (keyup.enter)=\"addTodo()\"/>\n  <ul class=\"list-group\">\n    <li *ngFor=\"let todo of myLists; let i=index\" class=\"list-group-item\" >\n       <a href=\"#\" (dblclick)=\"removeTodo(i)\"> {{i}} - {{todo}} </a>\n    </li>\n  </ul>\n  <button class=\"btn btn-default\" (click)=\"resetTodos()\">Reset</button>\n\n     ",
            providers: [todo_service_1.TodoService]
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], MyBuildinDirectivesComponent);
    return MyBuildinDirectivesComponent;
}());
exports.MyBuildinDirectivesComponent = MyBuildinDirectivesComponent;
//# sourceMappingURL=app.myBuildInDirectoryComponent.component.js.map