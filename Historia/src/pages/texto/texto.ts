import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BotAsistantProvider} from "../../providers/bot-asistant/bot-asistant";

@Component({
  selector: 'page-about',
  templateUrl: 'texto.html'
})
export class TextPage {

  public static salidaBot = "";
  static nuevaConsulta = false;

  get salidaBot(){
    return TextPage.salidaBot;
  }

  get nuevaConsulta(){
    return TextPage.nuevaConsulta;
  }

  constructor(private laBot: BotAsistantProvider,public navCtrl: NavController) {

  }

  hablar(texto){
    TextPage.nuevaConsulta = false;
    this.laBot.hablarBot(texto).subscribe(
      (d: any) =>{TextPage.salidaBot = d.output.text.join("\n");TextPage.nuevaConsulta = true;},e=>{TextPage.salidaBot = e;TextPage.nuevaConsulta = true;}
    );
  }


}
