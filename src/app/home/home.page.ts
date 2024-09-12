import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}


  Chave: string='SUPAMEGAUKELELE';
  nome: string = '';
  email: string = '';
  NotaSecreta: string = '';
  EncryptedNome: string = '';
  EncryptedEmail: string = '';
  EncryptedNotaSecreta: string = '';
  mensagemDecrypted: string = '';

  encryptMessage() {
    if (this.nome && this.NotaSecreta && this.email && this.Chave) {
      const encryptNome = CryptoJS.AES.encrypt(this.nome,  this.Chave).toString();
      const encryptEmail = CryptoJS.AES.encrypt(this.email,  this.Chave).toString();
      const encryptNotaSecreta = CryptoJS.AES.encrypt(this.NotaSecreta,  this.Chave).toString();
      this.EncryptedNome = encryptNome;
      this.EncryptedEmail = encryptEmail;
      this.EncryptedNotaSecreta = encryptNotaSecreta;
    }
  }
  decryptMessage() {
    if (this.EncryptedNome && this.EncryptedEmail && this.EncryptedNotaSecreta && this.Chave) {
      const bytesNome = CryptoJS.AES.decrypt(this.EncryptedNome, this.Chave);
      const bytesEmail = CryptoJS.AES.decrypt(this.EncryptedEmail, this.Chave);
      const bytesNotaSecreta = CryptoJS.AES.decrypt(this.EncryptedNotaSecreta, this.Chave);
      const decrypted = bytesNome.toString(CryptoJS.enc.Utf8);
      this.mensagemDecrypted = decrypted;
}
  }
  abrirTela(){
    this.router.navigateByUrl
    (`/receber/${this.nome}/${this.email}/${this.NotaSecreta}`);

  }
}
