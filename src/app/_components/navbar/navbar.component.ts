import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  darkMode = false;

  ngOnInit(): void {
    this.gettingThemeFromLocalStorage();
  }

  darkModeToggle(){
    this.darkMode = !this.darkMode;
    this.setTheme();
  }

  private gettingThemeFromLocalStorage(){

    if(localStorage.getItem('data-theme')) {
      localStorage.getItem('data-theme') === 'dark-theme' ? this.darkMode = true : this.darkMode = false;
      this.setTheme();
    }
  }

  private setTheme(){
    if(this.darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark-theme');
      localStorage.setItem('data-theme', 'dark-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'light-theme');
      localStorage.setItem('data-theme', 'light-theme');
    }
  }
}
