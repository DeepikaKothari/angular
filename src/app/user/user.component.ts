import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	name:string;
	age:number;
	address:Address;
	hobbies:string[];


    constructor() { 
    console.log('constructor ran');

  }

  ngOnInit() {

  	console.log('ngoninit ran');
  	this.name='Deepika Kothari';
  	this.age=25;
  	this.address=
  	{
  		street:'12/22 colony ch',
  		city:'noida',
  		state:'GBN'

  	}
  	this.hobbies=['painting','cooking','reading novels']
  }

  OnClick(){
  	this.hobbies.push('singing');
  }

   addHobby(hobby)
   {
   	this.hobbies.unshift(hobby);
   	return false;
   }
    
   deleteHobby
}

    interface Address
    {
      street:string,
      city:string,
      state:string
	}