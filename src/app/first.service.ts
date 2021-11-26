import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor(private router: Router) { }

  navigateTo(){
    this.router.navigate(['form']);
  }




}
