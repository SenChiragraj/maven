import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FitnessClass } from 'src/app/models/fitness-class';
import { FitnessService } from 'src/app/services/fitness.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {
  classes: FitnessClass[] = [];
  errorMessage: string = '';

  constructor(private service: FitnessService, private router : Router) {}

  ngOnInit(): void {
      console.log('Fetching classes');
    this.service.getClasses().subscribe({
      next: (data: FitnessClass[]) => {
        console.log(data);
        this.classes = data;
      },
      error: () => {
        this.errorMessage = 'Error fetching classes';
      }
    });
  }

  onDelete(id : string = '') {
    if(id === '') {
      this.errorMessage = 'Id was not given!';
      return;
    }
    this.service.deleteClass(id).subscribe({
      next : (data) => {
        this.router.navigate(['']);
      },
      error : () => {
        this.errorMessage = 'Form Error in deleting try again!';
      }
    });
  }

  onEdit(id : string = '') {
    if(id === '') {
      this.errorMessage = 'Id was not given!';
      return;
    }
    this.router.navigate([`/edit-class/${id}`]);
  }

}

