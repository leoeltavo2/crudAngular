import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitulacionComponent } from './titulacion/titulacion.component';
import { ConstanciasComponent } from './constancias/constancias.component';



@NgModule({
  declarations: [TitulacionComponent, ConstanciasComponent],
  imports: [
    CommonModule
  ],
  exports: [TitulacionComponent, ConstanciasComponent]
})
export class EscolaresModule { }
