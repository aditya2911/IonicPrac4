import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { EventEmitter } from '@angular/core';

enum Colors {
  GREY ="#E0E0E0",
  GREEN = "#76FF03",
  YELLOW= "#FFCA28",
  RED="#DD2C00"
}
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
  standalone:true,
  imports:[IonicModule,CommonModule]
})
export class RatingsComponent  implements OnInit {

  

  @Input()
  rating!: number;

  @Output()
  ratingChange:EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  rate(num:number){
    this.rating = num;
    this.ratingChange.emit(this.rating);
  }

  getColor(num:number):Colors{
    if(this.isAboveRating(num)){
      return Colors.GREY;
    }

    switch(this.rating){
      case 1:
      case 2:
        return Colors.RED
      case 3:
        return Colors.YELLOW
      case 4 :
      case 5:
        return Colors.GREEN
    default:
      return Colors.GREY
    }
    
  }

  isAboveRating(index:number):boolean{
    return index>this.rating;
  }

}
