import { Component, OnInit } from '@angular/core';
import {StudentService} from "../User/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private st: StudentService, private  at: Router) { }

  ngOnInit(): void {
  }


  showData(formulaire){
    console.log(formulaire);
    this.st.addProduct(formulaire).subscribe(()=>{
      alert("good !");
      this.at.navigate(['/home']);

    });
  }


}
