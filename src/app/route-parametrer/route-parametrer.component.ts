import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-route-parametrer',
  templateUrl: './route-parametrer.component.html',
  styleUrls: ['./route-parametrer.component.css']
})
export class RouteParametrerComponent implements OnInit {
  test;
  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
   //this.test = this.activatedroute.snapshot.params["name"];
    this.test = this.activatedroute.snapshot.params.name;
   /* this.test = this.activatedroute.params.subscribe(
      (r)=>{
        console.log(r.name);
        this.test= r.name;
      }
    );*/
   //console.log(this.test);

  }



}
