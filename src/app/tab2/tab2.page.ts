import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
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
  items :ListItem[] = [
    {
      name:"Dr. Dhananjay Kalbande",
      designation:"Head Of Department",
      email:"drkalbande@spit.ac.in",
      phone:"+91 (22) – 26707440 ",
      domain:"MCA",
      image:"https://cse.spit.ac.in/assets/faculty/dr-dhananjay-kalbande.jpg"
    },
    {
    name:"Prof. Harshil Kanakia",
    designation:"Asst. Professor",
    email:"harshil.kanakia@gmail.com",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/HK.png"
  },
  {
    name:"Prof. Nikhita Mangaonkar",
    designation:"Asst. Professor",
    email:"nikhita.mangaonkar@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/NM.jpg"
  },
  {
    name:"Prof. Dr. Pooja Raundale",
    designation:"Professor",
    email:"pooja@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/PR-e1670491866552.jpg"
  },
  {
    name:"Prof. S G Vaidya",
    designation:"Asst. Professor",
    email:"sampat.vaidya@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/SG-150x150.png"
  }
  ,
  {
    name:"Prof. Pallavi Thakur",
    designation:"Asst. Professor",
    email:"pallavi.thakur@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/PT-150x150.png"
  }
  ,
  {
    name:"Prof. Dr. Aarti Karande",
    designation:"Asst. Professor",
    email:"aarti.karande@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/aarti.png"
  }
  ,
  {
    name:"Prof. Sonali Wankhede",
    designation:"Asst. Professor",
    email:"sonali.wankhede@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/SW-150x150.png"
  }
  ,
  {
    name:"Prof. Sparsh Vyas",
    designation:"Asst. Professor",
    email:"sparsh.vyas@spit.ac.in",
    phone:"+91 (22) – 26707440",
    domain:"MCA",
    image:"https://mca.spit.ac.in/wp-content/uploads/2022/12/SV-150x150.png"
  }
  ];



}
