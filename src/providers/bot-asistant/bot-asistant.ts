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
    let url = "https://gateway-syd.watsonplatform.net/assistant/api/v1/workspaces/b91c9dc1-6b28-4361-9733-76ee2d2705d6/message?version=2018-09-20";
    let access = "Basic YXBpa2V5OjVXbjlELWVUdlJpZ0xiZVRrZVdEbUdhMUJmTjhVbExrWXhYbUNFWS04Y2E2";
    let headers = {"Authorization":access,"Content-Type":"application/json"};

    let body = {"input": {"text": texto}};
	console.log(JSON.stringify(body));

    return this._http.post(url,body,{headers});

  }

}
