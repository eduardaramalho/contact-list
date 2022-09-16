import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listaContatos';
  nome : string = '';
  contato : string = '';
  usuario : string = '';
  users = [
    {nome: '', contato: ''}
  ] 

  constructor (private httpClient: HttpClient){

  }

  public adicionarUsuario(){ 
    this.users.push({nome: this.nome, contato: this.contato})
                                                                                                                                                                                                                             

    console.log(this.nome, this.contato);

  }
  
  
}
