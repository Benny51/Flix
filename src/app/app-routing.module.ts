import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlixConnectionComponent } from './connection/flix-connection/flix-connection.component';
import { FlixHomeComponent } from './flix-home/flix-home.component';
import { FlixInscriptionComponent } from './inscription/flix-inscription/flix-inscription.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'flix'
  },
  {
    path:'flix',
    component:FlixHomeComponent
  },
  {
    path:"inscription",
    component:FlixInscriptionComponent
  },
  {
    path:"connection",
    component:FlixConnectionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
