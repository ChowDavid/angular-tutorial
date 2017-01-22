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
var forms_1 = require('@angular/forms');
var AppFormComponent = (function () {
    function AppFormComponent(builder) {
        this.builder = builder;
    }
    AppFormComponent.prototype.ngOnInit = function () {
        this.myForm = this.builder.group({
            username: this.username,
            email: this.email
        });
        this.username = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(3)
        ]);
        this.email = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(3)
        ]);
        this.myForm.valueChanges.subscribe(function (data) {
            console.log('Form changes', data);
        });
        this.username.valueChanges.subscribe(function (data) {
            console.log('Username changes', data);
        });
        this.email.valueChanges.subscribe(function (data) {
            console.log('Email changes', data);
        });
    };
    AppFormComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.form.template.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], AppFormComponent);
    return AppFormComponent;
}());
exports.AppFormComponent = AppFormComponent;
//# sourceMappingURL=app.form.component.js.map