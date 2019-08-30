import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VisorComponent} from './componets/visor/visor.component';
import {VisorConsulta  } from './componets/VisorConsulta/VisorConsulta.component';
import { PacientespaiComponent } from './componets/pacientespai/pacientespai.component';
import { AgendaTriageComponent } from './componets/agenda-triage/agenda-triage.component';
import { RecepFarmaComponent  } from './componets/recep-farma/recep-farma.component';


const routes: Routes = [
{  path:'',  redirectTo:'/',  pathMatch: 'full'},
{  path:'visor', component: VisorComponent},
{  path:'VisorConsulta' , component: VisorConsulta},
{path:'pacientespai',component :PacientespaiComponent},
{path:'agenTriage',component:AgendaTriageComponent},
{path:'recepFarma',component:RecepFarmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
