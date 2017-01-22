import {Component} from '@angular/core'


@Component({
    selector :'my-component',
    template:`
    <h1> Hello World {{name}} </h1>
    <img [src] = "imageUrl" />
    <img src = {{imageUrl}} />
    <img bind-src = "imageUrl" />
    <br/>
    <button [class.isActive] = "isActive">Button</button>
    <button class = {{buttonClass}}>Button2</button>
    <button [style.background-color] = "isActive?'red':'green'">Button2</button>
    <br/>
    <h1>{{clickMessage}}</h1>
    <button (click) = "changeMessage()">Button</button>
    <br/>
    <input [(ngModel)]="name" (ngModelChange)="setUpperCase($event)" />
    `
})
export class MyComponent{
    name:string;
    imageUrl:string;
    isActive:boolean;
    buttonClass:string;
    clickMessage:any;
    constructor(){
        this.name="David Chow";
        this.imageUrl='http://lorempixel.com/400/200';
        this.isActive=false;
        this.buttonClass="isActive";
    }

    changeMessage(){
        this.clickMessage="Hello World button click";
    }

    setUpperCase(e:string){
        this.name=e.toUpperCase();
    }
}