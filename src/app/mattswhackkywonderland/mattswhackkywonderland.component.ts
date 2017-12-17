import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mattswhackkywonderland',
  templateUrl: './mattswhackkywonderland.component.html',
  styleUrls: ['./mattswhackkywonderland.component.css']
})
export class MattswhackkywonderlandComponent implements OnInit {


	states = ['NY', 'MA', 'MD', 'CT', 'NJ'];


  constructor() { }

  ngOnInit() {
	  console.log('the page has been initiiliazed')
  }

  onSubmit(x){
	  console.log('hit the onsubmit function');
	  console.log(x);
  }

}
