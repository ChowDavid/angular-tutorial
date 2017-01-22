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
var MyComponent = (function () {
    function MyComponent() {
        this.name = "David Chow";
        this.imageUrl = 'http://lorempixel.com/400/200';
        this.isActive = false;
        this.buttonClass = "isActive";
    }
    MyComponent.prototype.changeMessage = function () {
        this.clickMessage = "Hello World button click";
    };
    MyComponent.prototype.setUpperCase = function (e) {
        this.name = e.toUpperCase();
    };
    MyComponent = __decorate([
        core_1.Component({
            selector: 'my-component',
            template: "\n    <h1> Hello World {{name}} </h1>\n    <img [src] = \"imageUrl\" />\n    <img src = {{imageUrl}} />\n    <img bind-src = \"imageUrl\" />\n    <br/>\n    <button [class.isActive] = \"isActive\">Button</button>\n    <button class = {{buttonClass}}>Button2</button>\n    <button [style.background-color] = \"isActive?'red':'green'\">Button2</button>\n    <br/>\n    <h1>{{clickMessage}}</h1>\n    <button (click) = \"changeMessage()\">Button</button>\n    <br/>\n    <input [(ngModel)]=\"name\" (ngModelChange)=\"setUpperCase($event)\" />\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyComponent);
    return MyComponent;
}());
exports.MyComponent = MyComponent;
//# sourceMappingURL=app.myComponent.js.map