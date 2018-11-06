import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import List from '../Array';
import { HomePage } from '../home/home';
import { Inputing } from '../inputs';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage implements OnInit {
Name:string;
Description:string;
Price:number;

  url: string = "../../assets/whats.jfif";

  you = List;
  course;
  index;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
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
  ngOnInit(){
    this.index= this.navParams.get('index');
    this.course = this.navParams.get('course');
  }
  ionViewDidEnter() {
    
  }
  Next(i) {
    let y = new Inputing(this.Name, this.Description,this.Price,this.url)
    if (this.Name == undefined && this.Description == undefined && this.Price == undefined){
      let toast = this.toastCtrl.create({
        message: 'Please enter information to update old data!',
        duration: 3000,
        position: 'down'
      });
      toast.present();
    }
  else{
    const toast = this.toastCtrl.create({
      message: 'Your information has been updated.',
      duration: 2000,
      position: 'down'
    });
    toast.present();
    this.navCtrl.push(HomePage);
    let the = new Inputing(this.Name, this.Description, this.Price, this.url)
    List.splice(i,1,the)
  }
}
}
