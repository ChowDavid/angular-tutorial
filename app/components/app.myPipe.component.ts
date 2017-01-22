import {Component,Pipe,PipeTransform}          from "@angular/core";
import {Observable}          from "rxjs/Observable";
import {Subscriber}          from "rxjs/Subscriber";

@Component({
    selector: 'my-app',
    template: `
    <h1> My Pipe Test</h1>
    <h6>{{name|uppercase}}</h6>
    <h6>{{name|lowercase}}</h6>
    <h6>{{date|date:'medium'}}</h6>
    <h6>{{date|date:'short'}}</h6>
    <h6>{{date|date:'fullDate'}}</h6>
    <h6>{{date|date:'longDate'}}</h6>
    <h6>{{date|date:'mediumDate'}}</h6>
    <h6>{{date|date:'shortDate'}}</h6>
    <h6>{{date|date:'mediumTime'}}</h6>
    <h6>{{date|date:'shortTime'}}</h6>
    <h6>{{number|currency:'USD':true:'4.2-4'}}</h6>
    <h6>{{number|currency:'USD':false:'4.2-4'}}</h6>
    <h6>{{number|currency:'USD'}}</h6>
    <h6>Promise {{promise | async}}</h6>
    <h6>Observable {{message | async}}</h6>
    `

})
export class MyPipeComponent {
    name:string="David Chow";
    date:Date=new Date(1970,2,2);
    number:number=78.12345678;
    promise:any;
    message:any;

    constructor(){
        this.promise = new Promise(function(resolve,reject){
            setInterval(function(){
                resolve('Hey, I am a promise' + new Date());
            },2000);
        });
        this.message=new Observable<String>((observer: Subscriber<string>)=>{
            setInterval(()=>observer.next(new Date().toString()),1000);
        });
       
    }


    
}