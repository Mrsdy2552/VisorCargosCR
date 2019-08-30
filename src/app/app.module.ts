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
import {MatDialogModule} from '@angular/material/dialog';

 
import { VisorConsulta } from './componets/VisorConsulta/VisorConsulta.component';
import { PacientespaiComponent } from './componets/pacientespai/pacientespai.component';
import { FormpacienpaiComponent } from './componets/pacientespai/formpacienpai/formpacienpai.component';
import { AgendaTriageComponent } from './componets/agenda-triage/agenda-triage.component';
import { RecepFarmaComponent } from './componets/recep-farma/recep-farma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatNativeDateModule} from '@angular/material/core';
  
import { PacientesHospDomiComponent } from './componets/VisorConsulta/pacientes-hosp-domi/pacientes-hosp-domi.component';
import { ExportarService } from './services/exportar.service';
import {MatTableModule} from '@angular/material/table';
import { ComentarioComponent } from './componets/VisorConsulta/comentario/comentario.component';

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    NavegacionComponent,
    VisorConsulta,
    PacientespaiComponent,
    FormpacienpaiComponent,
    AgendaTriageComponent,
    RecepFarmaComponent, 
    PacientesHospDomiComponent, ComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatTableModule,
    MatDialogModule
    
      ],
  providers: [
    VisorService,
    ExportarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
