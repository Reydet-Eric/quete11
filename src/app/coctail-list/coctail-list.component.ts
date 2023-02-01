import { Component,OnInit } from '@angular/core';
import { CcocktailService } from '../models/ccocktail.service';
import { Cocktail } from '../models/cocktail.model';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-coctail-list',
  templateUrl: './coctail-list.component.html',
  styleUrls: ['./coctail-list.component.css']
})
export class CoctailListComponent implements OnInit{

  private jsonURL = "../assets/cocktails.json"
  cocktails: Cocktail [] = [];

constructor (public cocktailService: CcocktailService, private http: HttpClient) {
  this.getJSON().subscribe( data => {
    console.log(data);
this.cocktails=data
  })
}

public getJSON(): Observable<any> {
  return this.http.get(this.jsonURL)
}

ngOnInit(): void {
    // this.cocktailService.getCocktails().subscribe("../assets/cocktails.json" => {
    //   this.cocktails = "../assets/cocktails.json"
    // });
    // console.log(this.cocktails);


}

}
