import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SpeechKit} from "@ionic-native/speechkit";
import {BotAsistantProvider} from "../../providers/bot-asistant/bot-asistant";
import {SpeechRecognition} from '@ionic-native/speech-recognition';
import {LoadingController} from "ionic-angular";
import {Vibration} from '@ionic-native/vibration/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Platform} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'voz.html'
})
export class VozPage {

  static nuevaConsulta = false;
  static salidaAsistente = "";
  static salidaAsistenteAuxiliar = "";

  get nuevaConsulta() {
    return VozPage.nuevaConsulta;
  }

  get salidaAsistente() {
    return VozPage.salidaAsistente;
  }

  get salidaAsistenteAuxiliar() {
    return VozPage.salidaAsistenteAuxiliar;
  }

  entradaTexto = "";
  entradaVoz = "";
  salidaBot = "";
  voces = "spa-MEX,Angelica";
  nuevo = false;

  constructor(private platform: Platform, private tts: TextToSpeech,private vibration: Vibration, public loadingCtrl: LoadingController, private asr: SpeechRecognition, private ws: BotAsistantProvider, public skit: SpeechKit, public navCtrl: NavController) {
    this.tts = tts;
    this.asr.requestPermission()
      .then(
        () => console.log('Granted'),
        () => console.log('Denied')
      )




    this.skit.tts('Text to be read out loud', 'ENG-GBR', 'Serena').then(
      (msg) => { console.log(msg); },
      (err) => { console.log(err); }
    );

  }

  hablar(voz) {


    VozPage.nuevaConsulta = false;

    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    loading.present();
    this.asr.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.entradaVoz = matches[0];
          this.ws.hablarBot(matches[0]).subscribe((d: any) => {
            this.salidaBot = d.output.text.join("\n");
			console.log ( d.output.text.join("\n"));
			
			try
			{
			let confidence = d.intents[0].confidence
			console.log(confidence);
			
                       
            this.tts.speak({
              text: d.output.text.join("\n"),
              locale: 'es-CL',
              rate: 1
            }).then(
              msg => {
                console.log(msg)
                VozPage.nuevaConsulta = true;
                VozPage.salidaAsistente = d.output.text.join("\n");


                loading.dismiss();
              }, e => {
                alert(e);
                console.log(e);
                loading.dismiss();
              }).catch(e => console.log(e));
			  
		   }
           catch(e) {

           {
			   
			    this.tts.speak({
              text:"Tengo una respuesta pero no la seguridad que sea correcta , un especialista la revisará \n",
              locale: 'es-CL',
              rate: 1
            }).then(
              msg => {
                console.log(msg)
                VozPage.nuevaConsulta = true;
                VozPage.salidaAsistente = "Tengo una respuesta pero no la seguridad que sea correcta , un especialista la revisará \n";


                loading.dismiss();
              }, e => {
                alert(e);
                console.log(e);
                loading.dismiss();
              }).catch(e => console.log(e));
			  
            };

		   };		   
			  
			  

            /*this.skit.tts(d.output.text.join("\n"), voz.split(",")[0], voz.split(",")[1]).then(
              msg => {
                console.log(msg)
                VozPage.nuevaConsulta = true;
                VozPage.salidaAsistente = d.output.text.join("\n");


                loading.dismiss();
              }, e => {
                alert(e);
                console.log(e);
                loading.dismiss();
              }).catch(e => console.log(e));
            */

          }, e => loading.dismiss());
        }, e => loading.dismiss());

  }

  decirAlgo(entradaTexto) {
    this.ws.hablarBot(entradaTexto).subscribe((d: any) => {
      this.entradaTexto = d.output.text.join("\n");
      alert(this.entradaTexto);
    });
  }

}
