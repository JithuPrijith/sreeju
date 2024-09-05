import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../students.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list-student.component.html',
  styleUrl: './list-student.component.css',
})
export class ListStudentComponent implements OnInit {
  constructor(private student: StudentsService) {}
  studentData: any = [];
  ngOnInit(): void {
    this.student.getAllStudent().subscribe((allData) => {
      console.log(allData);
      this.studentData = allData;
    });
  }
  deleteStudent(student_id: any) {
    this.student.deleteStudent(student_id).subscribe((result) => {
      // console.log(result);
      this.ngOnInit();
    });
  }
}
