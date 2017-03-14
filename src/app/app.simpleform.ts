/**
 * Created by peacefrog on 3/11/17.
 */
import { Component } from '@angular/core';

@Component({
	selector: 'simple-form',
	template: `
  <div class="jumbotron">
	<h2>Template Driven Form</h2>
	 <!-- Here we are declaring a local variable called “form” 
	 and setting it to an instance of ngForm. This is very important.
	  Now our local form variable becomes of type FormGroup allowing us 
	  access to the FormGroup API’s on this local variable. 
	  We use this in the ngSubmit event where we send the value of the form via form.value -->
	<form #form="ngForm" (ngSubmit)="submitForm(form.value)">
	  <div class="form-group">
		<label>First Name:</label>
		<!-- Since we are working with template driven forms, 
		we can use the ngModel directive to capture the values of our forms. 
		One thing to note if you are coming from Angular 1.x. 
		Using ngModel as shown below creates a one-way data binding, 
		so once we hit submit the data is only sent to the controller.
		 If we wanted to use two-way data binding,
		 we would have to wrap the ngModel in [()] and assign an attribute to it. 
		Also the name of the field corresponds to the name attribute so our first input will be firstName. -->
		<input type="text" class="form-control" placeholder="John" name="firstName" ngModel required>
	  </div>
	  <div class="form-group">
		<label>Last Name</label>
		<input type="text" class="form-control" placeholder="Doe" name="lastName" ngModel required>
	  </div>
	  <div class="form-group">
		<label>Gender</label>
	  </div>
	  <!-- Radio and checkboxes work much the same way -->
	  <div class="radio">
		<label>
		  <input type="radio" name="gender" value="Male" ngModel>
		  Male
		</label>
	  </div>
	  <div class="radio">
		<label>
		  <input type="radio" name="gender" value="Female" ngModel>
		  Female
		</label>
	  </div>
	  <div class="form-group">
		<label>Activities</label>
	  </div>
	  <label class="checkbox-inline">
		<input type="checkbox" value="hiking" name="hiking" ngModel> Hiking
	  </label>
	  <label class="checkbox-inline">
		<input type="checkbox" value="swimming" name="swimming" ngModel> Swimming
	  </label>
	  <label class="checkbox-inline">
		<input type="checkbox" value="running" name="running" ngModel> Running
	  </label>
	  <div class="form-group">
		<button type="submit" class="btn btn-default">Submit</button>
	  </div>
	</form> 
  </div>
  `
})
export class SimpleFormComponent {
	// Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
	submitForm(form: any): void {
		console.log('Form Data: ');
		console.log(form);
	}
}
