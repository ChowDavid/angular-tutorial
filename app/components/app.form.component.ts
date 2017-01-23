import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

 function emailChecker(input: FormControl){
        //let regex='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
        let result=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(input.value);
        return result?null:{emailError:true};
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.form.template.html',
    providers: [FormBuilder]
})
export class AppFormComponent implements OnInit {
    myForm: FormGroup;
    username: FormControl;
    email: FormControl;

   

    constructor(private builder: FormBuilder) {}

    ngOnInit() {
        this.username = new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]);
        this.email = new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            emailChecker
        ]);
        //formGroup must be setup after all formControl created. it is pass by values.
         this.myForm = this.builder.group({
            username: this.username,
            email: this.email
        });
    }
}
