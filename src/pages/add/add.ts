import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Inputing } from '../inputs';
import List from '../Array';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  Name:string;
  Description:string;
  Price:number;
  url =  '../../assets/whats.jfif';

  you=List;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  
  insertImage(event: any){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();
 
      reader.onload = (event:any) => {
        this.url = event.target.result;
      }
 
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files);
    }
  }
  
AddMethod(){
  let y = new Inputing(this.Name, this.Description,this.Price,this.url)
  if (this.Name == undefined && this.Description == undefined && this.Price == undefined){
    let toast = this.toastCtrl.create({
      message: 'Please add course and image of your choice!',
      duration: 3000,
      position: 'down'
    });
    toast.present();
  }
else{
  const toast = this.toastCtrl.create({
    message: 'Course has been added on the list.',
    duration: 3000,
    position: 'down'
  });
  toast.present();
  List.push(y);
  this.navCtrl.push(HomePage);
  console.log(y);
}
}

}
