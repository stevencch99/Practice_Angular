import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;

  selectedHero: Hero;
  who: string;
  onSelect(hero: Hero): void {
    // ? TODO 這邊的 this 指的是誰
    this.selectedHero = hero;
    console.log("TCL: HeroesComponent -> this", this);
    console.log(typeof(this));
  }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
    constructor() { }

  ngOnInit() {
  }

}
