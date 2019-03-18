import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoticiasListComponent } from './components/noticias-list/noticias-list.component';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';
import {NoticiasComponent} from './components/noticias/noticias.component';


const routes: Routes = [
  { path: 'noticias-list', component: NoticiasListComponent},
  { path: 'noticias-edit/:id', component:  NoticiasUpsertComponent},
  { path: 'noticias-insert', component:  NoticiasUpsertComponent},
  { path: 'noticias-view', component:  NoticiasComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'noticias-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
