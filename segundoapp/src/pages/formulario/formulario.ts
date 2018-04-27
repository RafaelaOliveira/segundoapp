import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {

  formDadosPessoais: FormGroup

  constructor(public fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.formDadosPessoais = fb.group({
      nome: [null,[Validators.required]],
      endereco: [null,[Validators.required]],
      cidade: [null,[Validators.required]],
      telefone: [null,[Validators.required, Validators.minLength(8)]],
      cpf: [null,[Validators.required, Validators.minLength(11)]]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

  enviarDados(){
    console.log(this.formDadosPessoais.value)
  }

  voltarHome(){
    this.navCtrl.push(HomePage)
  }
}
