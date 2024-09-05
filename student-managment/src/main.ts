import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Route } from '@angular/router';
import { RegisterStudentComponent } from './app/components/register-student/register-student.component';
import { AddStudentComponent } from './app/components/add-student/add-student.component';
import { EditStudentComponent } from './app/components/edit-student/edit-student.component';
import { ListStudentComponent } from './app/components/list-student/list-student.component';
import { LoginStudentComponent } from './app/components/login-student/login-student.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Route[] = [
  { path: 'register', component: RegisterStudentComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }, // Ensure 'full' or 'prefix' is used for pathMatch
  {
    path: 'home',
    component: RegisterStudentComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to /home on root
  {
    path: 'add',
    component: AddStudentComponent,
  },
  {
    path: 'edit/:id',
    component: EditStudentComponent,
  },
  {
    path: 'list',
    component: ListStudentComponent,
  },
  {
    path: 'login',
    component: LoginStudentComponent,
  },

  {
    path: 'register',
    component: RegisterStudentComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(), provideRouter(routes)],
}).catch((err) => console.error(err));
