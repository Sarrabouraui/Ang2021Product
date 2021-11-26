import { Component, OnInit } from '@angular/core';
import {StudentService} from "../User/student.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student;

  constructor(private service: StudentService) { }

  ngOnInit(): void {
    this.service.getStudents().subscribe(
      (data)=>{this.student=data;
      console.log(this.student);
      }

    );

  }
  afficherMessage(msg){
    alert(msg);
  }
  color="red";
  color1="green";
  age=1000;

}
