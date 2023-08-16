import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'register',
    component: RegisterpageComponent,
  },
  {
    path: 'login',
    component: LoginpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
