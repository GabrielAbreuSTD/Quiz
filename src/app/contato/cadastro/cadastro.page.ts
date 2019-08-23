import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Contato } from '../entidade/contato';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {



  constructor(private banco: AngularFireDatabase, private rota: Router) { }

  contato: Contato = new Contato();


  salvar() {
    this.banco.list('contato').push(this.contato);

    this.contato = new Contato();
    this.rota.navigate [("salvar")];
    alert("Salvo com sucesso");
  }

  ngOnInit() {
  }


}
