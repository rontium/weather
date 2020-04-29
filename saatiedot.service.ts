import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaatiedotService {

url = "https://so3server.herokuapp.com/saatilanne/helsinki"

saa : any;
kaupunki : any;
lampo : any;
kuvaus: any;
kuva : any;
kuvakoodi : any;

saatiedot : any;

  constructor(private http : HttpClient) { 

    this.http.get(this.url).subscribe((data : any) => {

      this.saatiedot = data
      this.kaupunki = data.name
      this.lampo = data.main.temp
      this.kuvaus = data.weather[0].description

      this.kuvakoodi = data.weather[0].icon

      this.kuva = "http://openweathermap.org/img/wn/" + this.kuvakoodi + "@2x.png";
       
    }); 

}

  valinta = (valittukaupunki) : any => {

    this.http.get("https://so3server.herokuapp.com/saatilanne/" + valittukaupunki).subscribe((data : any) => {

      if (data.name){

        this.saatiedot = data
        this.kaupunki = data.name
        this.lampo = data.main.temp
        this.kuvaus = data.weather[0].description

        this.kuvakoodi = data.weather[0].icon

        this.kuva = "http://openweathermap.org/img/wn/" + this.kuvakoodi + "@2x.png";

      }
      
    }); 

  }
}