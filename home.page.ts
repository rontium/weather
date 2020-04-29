import { async } from '@angular/core/testing';
import { Component } from '@angular/core';
import { SaatiedotService } from './../saatiedot.service';
import { AlertController } from '@ionic/angular';
import { promise } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  valittukaupunki : any;

  constructor(public saatiedot : SaatiedotService, private dialogiCtrl: AlertController) {}

  avaa = async () : Promise<any> => {

    const valintaikkuna = await this.dialogiCtrl.create({

                                                    header : "valitse kaupunki",
                                                    
                                                    inputs : [{

                                                                name : "kaupunki",
                                                                type : "text",
                                                                placeholder : "kirjoita kaupungin nimi..."

                                                              }],
                                                    buttons : [
                                                                {
                                                                  text : "OK",
                                                                  handler : (data : any) => {
                                                                                            this.valittukaupunki = data.kaupunki
                                                                                            this.saatiedot.valinta(this.valittukaupunki)
                                                                                            }
                                                                },
                                                                {
                                                                  text : "Peruuta",
                                                                  role : "cancel",
                                                                }
                                                               ]           

                                                   });

      await valintaikkuna.present();                                             

  }
  

}
