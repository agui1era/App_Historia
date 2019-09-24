import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the BotAsistantProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BotAsistantProvider {

  constructor(public _http: HttpClient) {
    console.log('Hello BotAsistantProvider Provider');
  }



  hablarBot(texto){
    let url = <"URL_WATSON_ASSINTANT">;
    let access = "Basic <TOKEN>";
    let headers = {"Authorization":access};

    let body = {"input": {"text": texto}};

    return this._http.post(url,body,{headers});

  }

}
