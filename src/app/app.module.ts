import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle'
//import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'
import { RepeatTypeComponent } from './formly-types/repeat-type.formly.component'


export function validateRequired(err, field: FormlyFieldConfig) {
	return `This field is required`
}

export function validateMinLength(err, field:FormlyFieldConfig) {
  return `Should have at least ${field.templateOptions.minLength} characters`
}

export function validateMaxLength(err, field:FormlyFieldConfig) {
  return `Should have less than ${field.templateOptions.maxLength} characters`
}

export function validateMin(err, field:FormlyFieldConfig) {
  return `This value should be more than` + field.templateOptions.min
}

export function validateMax(err, field:FormlyFieldConfig) {
  return `This value should be less than` + field.templateOptions.max
}

//Custom Validations
export function IpValidator(control: FormControl): ValidationErrors {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { 'ip': true };
}
export function IpValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.formControl.value}" is not a valid ip Address`;
}


@NgModule({
  declarations: [AppComponent, RepeatTypeComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,

    MatNativeDateModule,
    FormlyMatDatepickerModule,
    FormlyMatToggleModule,


    //FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyModule.forRoot({
      validationMessages: [
				{ name: 'required', message: validateRequired },
				{ name: 'minlength', message: validateMinLength },
				{ name: 'maxlength', message: validateMaxLength },
				{ name: 'min', message: validateMin },
				{ name: 'max', message: validateMax },
        //Custom validation
        { name: 'ip', message: IpValidatorMessage },
			],
      validators: [
        { name: 'ip', validation: IpValidator },
      ],
      types: [
        { name: 'repeat', component: RepeatTypeComponent },
      ]
    }),
    FormlyMaterialModule,
    //FormlyBootstrapModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
