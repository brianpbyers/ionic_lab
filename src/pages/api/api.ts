import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api',
  templateUrl: 'api.html',
})
export class ApiPage {
  char:string;
  result:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApiPage');
  }

  makeCall(searchChar){
    if(!searchChar){
      alert("Please select a route!");
    }
    this.http.get(`https://swapi.co/api/people/?search=${searchChar}`)
    .subscribe((res)=>{
      console.log(res);
      if(!res.count){
        alert("Something went wrong, please try another character");
      }else{
        this.result = res;
        this.char="";
      }
    });
  }

}
