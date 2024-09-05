import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { StudentsService } from '../../students.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css',
})
export class EditStudentComponent implements OnInit {
  editStudent: FormGroup<any> | undefined;
  removeMessage() {
    throw new Error('Method not implemented.');
  }
  constructor(
    private student: StudentsService,
    private router: ActivatedRoute
  ) {}
  editstudent = new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
  });
  message: boolean = false;
  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.student
      .getStudentById(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        // console.log(result);
        this.editStudent = new FormGroup({
          name: new FormControl(result['name']),
          email: new FormControl(result['email']),
        });
      });
  }
  UpdateData() {
    console.log(this.editstudent.value);
    this.student
      .updateStudentData(
        this.router.snapshot.params['id'],
        this.editstudent.value
      )
      .subscribe((result) => {
        // console.log(result);
        this.message = true;
      });
  }
}
