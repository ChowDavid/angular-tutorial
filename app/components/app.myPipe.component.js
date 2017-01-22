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
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var MyPipeComponent = (function () {
    function MyPipeComponent() {
        this.name = "David Chow";
        this.date = new Date(1970, 2, 2);
        this.number = 78.12345678;
        this.promise = new Promise(function (resolve, reject) {
            setInterval(function () {
                resolve('Hey, I am a promise' + new Date());
            }, 2000);
        });
        this.message = new Observable_1.Observable(function (observer) {
            setInterval(function () { return observer.next(new Date().toString()); }, 1000);
        });
    }
    MyPipeComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1> My Pipe Test</h1>\n    <h6>{{name|uppercase}}</h6>\n    <h6>{{name|lowercase}}</h6>\n    <h6>{{date|date:'medium'}}</h6>\n    <h6>{{date|date:'short'}}</h6>\n    <h6>{{date|date:'fullDate'}}</h6>\n    <h6>{{date|date:'longDate'}}</h6>\n    <h6>{{date|date:'mediumDate'}}</h6>\n    <h6>{{date|date:'shortDate'}}</h6>\n    <h6>{{date|date:'mediumTime'}}</h6>\n    <h6>{{date|date:'shortTime'}}</h6>\n    <h6>{{number|currency:'USD':true:'4.2-4'}}</h6>\n    <h6>{{number|currency:'USD':false:'4.2-4'}}</h6>\n    <h6>{{number|currency:'USD'}}</h6>\n    <h6>Promise {{promise | async}}</h6>\n    <h6>Observable {{message | async}}</h6>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], MyPipeComponent);
    return MyPipeComponent;
}());
exports.MyPipeComponent = MyPipeComponent;
//# sourceMappingURL=app.myPipe.component.js.map