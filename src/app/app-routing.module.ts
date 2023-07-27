import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './modules/general/start/start.component';
import {AuditoriaComponent} from "./modules/general/auditoria/auditoria.component";
import {TipoauditoriaComponent} from "./modules/general/tipoauditoria/tipoauditoria.component";

const routes: Routes = [
{ path: '', component: StartComponent, },
{ path: 'auditoria', component: AuditoriaComponent, },
{ path: 'tipoauditoria', component: TipoauditoriaComponent, }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
