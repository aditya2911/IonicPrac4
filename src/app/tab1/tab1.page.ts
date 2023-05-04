import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { IonicModule, MenuController } from '@ionic/angular';
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
  [x: string]: any;
  constructor(private router:Router,private menuController: MenuController) {}



  openTabMenu() {
    this.menuController.enable(true, 'tab-menu');
    this.menuController.open('tab-menu');
  }

  navigateToTab(tabName: string) {
    this.router.navigate(['tabs', tabName]);
    this.menuController.close();
  }

openSpitSite():void{
  WebView['open']({url:"https://mca.spit.ac.in/"});
}

}