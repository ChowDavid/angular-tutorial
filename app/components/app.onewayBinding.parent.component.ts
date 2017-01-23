import {Component, Input, ElementRef} from '@angular/core';

/*
 * The HTML tag attribute was read on the following demo
 * if somethingA=someRawString
 * if [somethingB]=someReference
*/
@Component({
    selector: 'my-parent-component',
    template: `
    <p> Hello {{parentName}} </p>
    <my-child-component
        inputElement="myLastName"
        [childName]="parentName"
    >
    Some message inside my-child-component tag
    </my-child-component>

    `
})
export class AppParentComponent{
   parentName:string;

   constructor(elementRef:ElementRef){
       console.log("Attribute name ="+elementRef.nativeElement.getAttribute('htmlAttrName'));
       this.parentName=elementRef.nativeElement.getAttribute('htmlAttrName');
   }

   

}