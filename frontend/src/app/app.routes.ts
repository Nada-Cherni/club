import { Routes } from '@angular/router';
import { ListClubs } from './clubs/list-clubs/list-clubs';
import { CreateClub } from './clubs/create-club/create-club';
import { ListFormation } from './formations/list-formation/list-formation';
import { AjouterFormation } from './formations/ajouter-formation/ajouter-formation';



export const routes: Routes = [
  {path: 'clubs', component: ListClubs},
  {path: 'create-club', component: CreateClub},
  {path: 'formations', component: ListFormation},
  {path:'ajouter-formation',component: AjouterFormation},
];

