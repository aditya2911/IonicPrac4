import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
const { WebView } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent],
})
export class Tab1Page {

openSpitSite():void{
  WebView['open']({url:"https://mca.spit.ac.in/"});
}

  constructor() {}
}
