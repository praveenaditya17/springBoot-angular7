import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Ticket{
  constructor(
    public ticketId:number,
    public passangerName:string
  ){}
  }
@Injectable({
  providedIn: 'root'
})
export class JavaCallService {
  private usersUrl: string;
  constructor(private http: HttpClient) {
  //  this.usersUrl = 'http://localhost:8080/tickts/create?ticketId=201&passangerName=raj';
   }

    
  callJava(tid:number,name:any){  
    this.usersUrl='http://localhost:8080/tickts/create?ticketId='+tid+'&passangerName='+name; 
    this.http.post(this.usersUrl,{responseType: 'text'}).subscribe(
      (result)=>{
       console.log(result);
      }
    )    
  }
  getAllTicket(){

    return this.http.get<Ticket[]>('http://localhost:8080/tickts/get');
   // console.log("aa gaya--------");
 
  }
}
