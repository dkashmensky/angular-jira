import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';
import { TaskComponent } from './task/task.component';
import { LoginGuard } from './login/login.guard';
import { MainGuard } from './main/main.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'app',
    component: MainComponent,
    canActivate: [MainGuard],
    children: [
      {
        path: 'board',
        component: BoardComponent,
      },
      {
        path: 'task/:id',
        component: TaskComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
