import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <h1>{{title}}</h1>
  <p> This is an Example form using Angular,Formly,Material,Bottstrap</p>

  <form [formGroup]="form" (ngSubmit)="onSubmit()">
  <formly-form [form]="form" [fields]="fields" [model]="model">
  </formly-form>
  <button type="submit" class="btn btn-default">Submit</button>
  </form>

  <pre>{{model | json}}</pre>
  </div>
  `,
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'Angular NGX-Formly'
  form= new FormGroup({});
  model = {
    email: "email@gmail.com",
    terms_1: false,
    terms: true,
    date_of_birth: new Date(),
    amount: 100,
    name: "lskdfnlksdf",
    description: "laksndlkansd↵asd↵nlkxclkzxc↵",
    gender: 3
  }

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      }
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
              type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        minLength: 3,
        maxLength: 20,
      }
    },
    {
      key: 'amount',
      type: 'input',
      templateOptions: {
              type: 'number',
        label: 'Amount',
        placeholder: 'Enter amount',
        min: 1,
        max: 15
      }
    },
    {
      key: 'date_of_birth',
      type: 'datepicker',
          templateOptions: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'terms',
          type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'terms',
      type: 'toggle',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter description',
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        placeholder: 'Placeholder',
        description: 'Fill in your gender',
        options: [
          { value: 1, label: 'Male' },
          { value: 2, label: 'Female' },
          { value: 3, label: 'I don\'t want to share that' },
        ],
      },
    },
  ];

  onSubmit() {
    console.log(this.model)
  }
}
