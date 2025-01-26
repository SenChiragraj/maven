import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { max } from 'rxjs';
import { FitnessClass } from 'src/app/models/fitness-class';
import { FitnessService } from 'src/app/services/fitness.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {

  addForm:FormGroup;
  errorMessage: string= '';

  constructor(fb : FormBuilder, private service : FitnessService, private router : Router) {
    this.addForm = fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      instructor: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      duration: ['', [Validators.required, Validators.min(15), Validators.max(180)]],
      capacity: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      availableSlots: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
    });
  }

  onAddClass() {
    let fitnessClass = this.addForm.value;
    try {
      this.service.addClass(fitnessClass).subscribe({
        next:(data) => {
        console.log(data);
        this.router.navigate(['/']);
      },
       error: (error) => {
          console.log(error);
          this.errorMessage = 'Form Error in adding try again!';
        }

    });
    }
    catch (error : any) {
      console.log("Error");
      this.errorMessage = 'Server Error in adding try again!';
    }
  }

}

