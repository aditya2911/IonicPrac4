import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router:Router,private menuController: MenuController) {}



  openTabMenu() {
    this.menuController.enable(true, 'tab-menu');
    this.menuController.open('tab-menu');
  }

  navigateToTab(tabName: string) {
    this.router.navigate(['tabs', tabName]);
    this.menuController.close();
  }
}
