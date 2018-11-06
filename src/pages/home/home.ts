import { Component } from '@angular/core';
import { NavController , ActionSheetController} from 'ionic-angular';
import List from '../Array';
import { AddPage } from '../add/add';
import {EditPage} from '../edit/edit';
import { Inputing } from '../inputs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Name:string;
  Description:string;
  Price:number;
  url:string;

  
you=List;
  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController) {
  }
Next(){
  this.navCtrl.push(AddPage);
}
Nexts(i){
  console.log(this.you[i]);
  const actionSheet = this.actionSheetCtrl.create({
    title: 'Delete Or Update course that you have added',
    buttons: [
      {
        text: 'Delete Course',
        role: 'delete',
        handler: () => {
          let a = new Inputing(this.Name, this.Description, this.Price,this.url)
          List.splice(i,1);
          console.log('Delete clicked');
        }
      },{
        text: 'Edit Course',
        role: 'edit',
        handler: () => {

          this.navCtrl.push(EditPage, {
            course: this.you[i],
            index: i
          })
          console.log('Edit clicked');
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {                                                                                    
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheet.present();
}
}
