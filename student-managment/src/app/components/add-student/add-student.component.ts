import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from '../../students.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css',
})
export class AddStudentComponent implements OnInit {
  removeMessage() {
    throw new Error('Method not implemented.');
  }
  constructor(private student: StudentsService) {}
  addStudent = new FormGroup({
    name: new FormControl(' '),
    email: new FormControl(' '),
  });
  message: boolean = false;
  ngOnInit(): void {}
  SaveData() {
    // console.log(this.addStudent.value);
    this.student.saveStudentData(this.addStudent.value).subscribe((result) => {
      // console.log(result );
      this.message = true;
      this.addStudent.reset({});
    });
  }
}
