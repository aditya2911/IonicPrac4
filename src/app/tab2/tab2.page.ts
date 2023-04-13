import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
interface AccordionItem {
  title: string;
  expanded: boolean;
}

interface ListItem{
  name:String,
  designation:String,
  email:String,
  phone:String,
  domain:String,
  image:String,

}
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule]
})
export class Tab2Page {

  constructor() {}
  items :ListItem[] = [{
    name:"Harshil Kanakia",
    designation:"Head Of Department",
    email:"Harshi@gmail.com",
    phone:"12893019824901",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png"
  },
  {
    name:"Nikhita Mangaonkar",
    designation:"Head Of Department",
    email:"nikhita@gmail.com",
    phone:"12893019824901",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg"
  }

  ];

  toggleItem(item: AccordionItem) {
    item.expanded = !item.expanded;
  }

}
