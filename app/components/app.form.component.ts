import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.form.template.html'
})
export class AppFormComponent implements OnInit {
    myForm: FormGroup;
    username: FormControl;
    email: FormControl;

    constructor(private builder: FormBuilder) {}

    ngOnInit() {
         this.myForm = this.builder.group({
            username: this.username,
            email: this.email
        });
        this.username = new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]);
        this.email = new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]);
        this.myForm.valueChanges.subscribe(data => {
            console.log('Form changes', data);

        });
        this.username.valueChanges.subscribe(data => {
            console.log('Username changes', data);

        });
        this.email.valueChanges.subscribe(data => {
            console.log('Email changes', data);

        });
    }
}
