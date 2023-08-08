import {Component, OnInit} from '@angular/core';
import {YugiohService} from "../../../shared/service/yugioh.service";
import {YugiohModel} from "../../../shared/models/YugiohModel";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  offset!: number;


  constructor(private _yugiohService:YugiohService){
  }
  // @ts-ignore
  title = 'yugiohAPI';
  monsterlist : YugiohModel = {data:[]};
  ngOnInit(): void {
    this.offset = 0
    this.getListOfMonster();
  }

  getListOfMonster():void{
    this._yugiohService.getMonsterByLimit(this.offset).subscribe({
      next:(liste)=>{
        // console.log(liste.data[0].desc)
        this.monsterlist = liste;
        console.log(this.monsterlist)
      }
    })
  }

  increaseCardLimit(){
    this.offset +=4;
    this.getListOfMonster()
  }
  downCardLimit():void{
    this.offset -=4;
    this.getListOfMonster()
  }
}
