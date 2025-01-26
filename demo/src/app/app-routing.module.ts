import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './components/add-class/add-class.component';
import { EditClassListComponent } from './components/edit-class-list/edit-class-list.component';
import { ClassListComponent } from './components/class-list/class-list.component';

const routes: Routes = [ 
  {path: '', redirectTo: '/classes', pathMatch: 'full' },
  {path: 'classes', component: ClassListComponent },
  {path: 'add-class', component: AddClassComponent }, 
  {path: 'edit-class/:id', component: EditClassListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
