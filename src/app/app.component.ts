import { Component,OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'POC1Angular';  

  public error = document.getElementById('error') as HTMLInputElement;
  public Domain = document.getElementById('Domain') as HTMLInputElement;
  public userid =document.getElementById('userid') as HTMLInputElement;
 
 
constructor() { }

ngOnInit(): void {
}

myFunc() {

  var unip = ((document.getElementById("in") as HTMLInputElement).value);
  if (unip == null || unip == "") {
      
    this.error.value = "Field cannot be empty";
    this.Domain.value = "";
    this.userid.value = "Field cannot be empty";
  
  }
  
}
}
