import { Component } from '@angular/core';
import { CepService } from './cep.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cep',
  standalone: true,
  imports: [
    FormsModule,    
    ReactiveFormsModule
  ],
  templateUrl: './cep.component.html',
  styleUrl: './cep.component.css'
})
export class CepComponent {
  private teste: any;

  texto;

  //cep
  //logradouro
  //localidade
  //uf
  //bairro
  //complemento
  formCep = new FormGroup({
    cep: new FormControl<string>(''),    
    logradouro: new FormControl<string>(''),
    localidade: new FormControl<string>(''),
    uf: new FormControl<string>(''),
    bairro: new FormControl<string>(''),
    numero: new FormControl<number>(0),
    complemento: new FormControl<string>('')
  });

  constructor(
    private cepService: CepService
  ){
    this.texto = 'meu texto';
  }

  public buscaCep(){
    this.cepService.consultaCep().then(data => {
      let retorno: any = data;
      console.log(data);
      alert(retorno.logradouro);
      alert(retorno.cidade);
    });
  }

}
