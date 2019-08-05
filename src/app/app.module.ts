import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisorComponent } from './componets/visor/visor.component';
import { NavegacionComponent } from './componets/navegacion/navegacion.component';
import { VisorService } from './services/visor.service';
import {NgxPaginationModule} from 'ngx-pagination';

import { from } from 'rxjs';
import { VisorConsulta } from './componets/VisorConsulta/VisorConsulta.component';
import { PacientespaiComponent } from './componets/pacientespai/pacientespai.component';
import { FormpacienpaiComponent } from './componets/pacientespai/formpacienpai/formpacienpai.component';
import { AgendaTriageComponent } from './componets/agenda-triage/agenda-triage.component';


@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    NavegacionComponent,
    VisorConsulta,
    PacientespaiComponent,
    FormpacienpaiComponent,
    AgendaTriageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
    
      ],
  providers: [
    VisorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
