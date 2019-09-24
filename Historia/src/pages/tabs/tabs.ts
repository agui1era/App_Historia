import { Component } from '@angular/core';

import { TextPage } from '../texto/texto';
import { InfoPage } from '../info/info';
import { VozPage } from '../voz/voz';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = VozPage;
  tab2Root = TextPage;
  tab3Root = InfoPage;

  constructor() {

  }
}
