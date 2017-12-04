import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { EmailComposer } from '@ionic-native/email-composer';

/**
* Generated class for the ContactUsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/

@IonicPage()

@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
  providers: [
    EmailComposer
  ]
})
export class ContactUsPage {
  name: any;
  phone: any;
  email: any;
  subject: any;
  emailSend: any;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private emailComposer: EmailComposer
  ) {
    this.emailSend = {
      to: 'usjtconsulting@gmail.com',
      subject: 'Contato pelo Aplicativo',
      isHtml: true
    };
    
    //this.emailSend.addAlias('gmail', 'com.google.android.gm');
    
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }
  
  public send() {
    
    // Send a text message using default options
    this.emailSend.body = "Nome: " + this.name + "\n Telefone: " + this.phone + "\n Email: " + this.email + "\n Mensagem: " + this.subject;
    this.emailComposer.open(this.emailSend);
    this.doAlert();
    
  }
  
  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mensagem enviada!',
      subTitle: 'Assim que possível entraremos em contato para resolver sua dúvida ou sugestão',
      buttons: ['Ok']
    });
    
    alert.present();
  }
  
}
