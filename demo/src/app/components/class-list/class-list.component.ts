import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  Input
} from '@angular/core';
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

  constructor(private service: FitnessService, private router: Router) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    console.log('Fetching classes');
    this.service.getClasses().subscribe({
      next: (data: FitnessClass[]) => {
        console.log(data);
        this.classes = data;
      },
      error: (error) => {
        console.log(error);
        this.errorMessage = 'Error fetching classes: ' + error;
      }
    });
  }

  onDelete(id: string = ''): void {
    if (id === '') {
      this.errorMessage = 'Id was not given!';
      return;
    }
    this.service.deleteClass(id).subscribe({
      next: (data) => {
        console.log(data);
        this.loadClasses();
      },
      error: (error) => {
        this.errorMessage = 'Error deleting class: ' + error;
      }
    });
  }

  onEdit(id: string = ''): void {
    if (id === '') {
      this.errorMessage = 'Id was not given!';
      return;
    }
    this.router.navigate([`/edit-class/${id}`]);
  }
}
