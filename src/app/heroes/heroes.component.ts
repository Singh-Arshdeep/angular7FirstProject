import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  hero:Hero= {
    id:1, 
    name: 'Windstorm'
  };
  heroes = HEROES;
  ngOnInit() {
    
  }

}
