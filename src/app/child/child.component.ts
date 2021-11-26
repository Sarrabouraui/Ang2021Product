import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FirstService} from "../first.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() Stud;
  @Output() notif = new EventEmitter();

  constructor(private service: FirstService, private activatedroute: ActivatedRoute) {
  }

  ngOnInit(): void {
   console.log(this.Stud);
  }
  message() {
    this.notif.emit("Notification");
  }



}
