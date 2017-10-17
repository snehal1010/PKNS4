import { Component } from '@angular/core';
import { IonicPage, AlertController,NavController, NavParams,LoadingController, Loading,Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(public menuCtrl: MenuController,public navCtrl: NavController,public platform: Platform,  private auth: AuthServiceProvider,public navParams: NavParams,private alertCtrl: AlertController,private loadingCtrl: LoadingController) {
   //  this.menuCtrl.enable(false, 'menu1');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   signin() {
    this.showLoading()
	this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
	    if (this.platform.width()<1000)       
         this.navCtrl.setRoot(HomePage);
        else{
		  this.navCtrl.setRoot(ListPage);
		//  this.menuCtrl.open();
		}	
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
        this.menuCtrl.enable(true, 'menu1');

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }


  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }
}
