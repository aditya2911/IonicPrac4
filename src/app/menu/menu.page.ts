import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
export interface PageInterface{
  title:string,
  pageName:string,
  tabComponent?:any,
  index:number,
  icon:string,
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {

  rootPage = 'TabsPage';
  
  pages:PageInterface[] = [
    {title:'Tab 1 ',pageName:"TabsPage",tabComponent:'Tab1Page',index:0,icon:'home',},
    {title:'Tab 2 ',pageName:"TabsPage",tabComponent:'Tab2Page',index:1,icon:'contacts',},
  ]

  constructor(public navCtrl : NavController,private router:Router) { }


  openPage( page:PageInterface){
    let params = {};

    if(page.index){
      params = {queryParams:{ tabIndex:page.index}}
    }

    this.router.navigate([page.pageName],params);

  }

  isActive(page:PageInterface){
    let urlTree = this.router.parseUrl(this.router.url);

    let segments = urlTree.root.children['primary'].segments;

    if(segments.length> 0 && segments[0].path == page.pageName){
      if(page.index !== undefined && segments.length > 1 && segments[1].path === page.tabComponent){
        return 'primary'
      }
      else if(page.index === undefined || segments.length===1)
    {
      return "primary";
    }
    }
    return;
  }
  ngOnInit() {
  }

}
