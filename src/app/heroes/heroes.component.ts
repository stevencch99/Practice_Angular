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

  // Fix Property has no initializer and is not definitely assigned issue
  // Option 1. Make the `selectedHero` property optional by add `?` 
  // Option 2. add an `!` instead of a `?`
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void { }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
