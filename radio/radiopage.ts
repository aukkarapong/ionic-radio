import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/** 
 * Generated class for the RadiopagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-radiopage',
  templateUrl: 'radiopage.html',
})
export class RadiopagePage {

  sex: string 
  msg: any

  constructor(public navCtrl: NavController) {}

  handleClickSaveButton() {
    console.log("your sex is:  ", this.sex);
  }


}
