import { Component, OnInit } from '@angular/core';
import { CcocktailService } from './models/ccocktail.service';
import { Cocktail } from './models/cocktail.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quete-angular-11';


  cocktails: Cocktail[] = []

  constructor(public cocktailService: CcocktailService) { }

  ngOnInit(): void {
    // this.cocktailService.getCocktails().subscribe(cocktailsFromJsonFile => {
    //     console.log(cocktailsFromJsonFile);
    //   this.cocktails = cocktailsFromJsonFile; })

  }

}
