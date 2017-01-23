import { Component, Input, ElementRef } from '@angular/core';

/*
 * Parent call Child. Parent provide the lastName and surname and child read it and output as template below
 * for event it has
 * click, keypress, dblclick... which follow HTML DOM Events
*/
@Component({
    selector: 'my-child-component',
    template: `
    
    <p> OtherName {{otherName}} </p>
    <p> Parent's Name {{childName}} </p>
    <h2>Mouse Event</h2>
    <button (click)="show()">click</button>
    <button (dblclick)="show()">dblclick</button>
    <button (mousedown)="show()">mousedown</button>
    <button (mouseenter)="show()">mouseenter</button>
    <button (mouseleave)="show()">mouseleave</button>
    <button (mousemove)="show()">mousemove</button>
    <button (mouseover)="show()">mouseover</button>
    <button (mouseout)="show()">mouseout</button>
    <button (mouseup)="show()">mouseup</button>
    
    <h2>Keyboard event</h2>
    <button (keydown)="show()">keydown</button>
    <button (keypress)="show()">keypress</button>
    <button (keyup)="show()">keyup</button>
    <div>{{message}}</div>

    <h2>The ng-content form parent here</h2>
    <ng-content></ng-content>
    `
})
export class AppChildComponent {
    @Input('inputElement') otherName: string;
    @Input() childName: string;
    message: Date;

    show() {
        this.message = new Date();
    }
}