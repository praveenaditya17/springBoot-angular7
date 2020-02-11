import { Component } from '@angular/core';
import {Router,RouterModule} from '@angular/router';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
 import {JavaCallService,Ticket} from './java-call.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpringBootProject';

  signupForm:FormGroup;
  tid:number;
  name:string="";
  
  ticket:Ticket[];

  constructor(private frmBuilder:FormBuilder,private javacall:JavaCallService,private router:Router){
    this.signupForm=frmBuilder.group({
      tid:['',Validators.required],
      name:['',Validators.required]
    });

   
  }
  postData(signupForm:any){
   
    this.tid=signupForm.get('tid').value;
    this.name=signupForm.get('name').value;
  //  console.log(this.tid);
    this.javacall.callJava(this.tid,this.name);

  }

  getTicket(){

    this.router.navigateByUrl("/showTicket");
    // this.javacall.getAllTicket().subscribe(
    //   (response) =>{this.ticket = response;
    //     console.log(response[1]);
    //   }
    //  );
    
  }

}

