import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LetraMaiusculaPipe} from './letra-maiuscula.pipe';
import { CpfPipe } from './cpf.pipe';
import { ConverteTelefonePipe } from './converte-telefone.pipe';



@NgModule({
  declarations: [LetraMaiusculaPipe, CpfPipe, ConverteTelefonePipe],
  imports: [
    CommonModule
  ],
  exports: [
    LetraMaiusculaPipe,
    CpfPipe,
    ConverteTelefonePipe
  ]
})
export class PipesModule { }
