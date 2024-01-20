import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dropdownOpened = false;

  searchContry(search: any){
    console.log(search);
  }

  dropdownToggle(){
    this.dropdownOpened = !this.dropdownOpened;
  }
}
