import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
})
export class ReceberPage implements OnInit {

  mensagemDecrypted: any;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.mensagemDecrypted = this.activatedRoute.snapshot.paramMap.get('mensagemDecrypted');
  }

}
