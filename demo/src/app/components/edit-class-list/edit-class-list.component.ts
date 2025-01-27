import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { FitnessClass } from 'src/app/models/fitness-class';
import { FitnessService } from 'src/app/services/fitness.service';

@Component({
  selector: 'app-edit-class-list',
  templateUrl: './edit-class-list.component.html',
  styleUrls: ['./edit-class-list.component.scss']
})
export class EditClassListComponent implements OnInit {
  editForm: any;
  id: string = '';
  errorMessage: string = '';
  previousData: FitnessClass = {
    id: '',
    name: '',
    description: '',
    instructor: '',
    date: '',
    time: '',
    duration: 0,
    capacity: 0,
    availableSlots: 0
  };

  constructor(private router : Router, private service : FitnessService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getClassById(this.id).subscribe({
      next: (data : FitnessClass) => {
        this.previousData = data;
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = '' + err;
      }
    });
  }

  onSubmit(editForm: any) {
    this.previousData.id = this.id;
    this.previousData = editForm.value;
    console.log(this.previousData);
    this.service.updateClass(this.id, this.previousData).subscribe({
      next: (data : FitnessClass) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = '' + err;
      }
    });
    this.router.navigate(['/']);
    console.log(editForm.value);
  }

}
