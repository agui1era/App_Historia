import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SpeechKit} from "@ionic-native/speechkit";
import { TextPage } from '../pages/texto/texto';
import { InfoPage} from '../pages/info/info';
import { VozPage } from '../pages/voz/voz';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule} from "@angular/common/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BotAsistantProvider } from '../providers/bot-asistant/bot-asistant';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import {TypingModule} from "ng-typing";
import { Vibration } from '@ionic-native/vibration/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech';


@NgModule({
  declarations: [
    MyApp,
    TextPage,
    InfoPage,
    VozPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TypingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TextPage,
    InfoPage,
    VozPage,
    TabsPage
  ],
  providers: [
    Vibration,
    TextToSpeech,
    SpeechKit,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BotAsistantProvider,
    SpeechRecognition,

  ]
})
export class AppModule {}
