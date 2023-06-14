import { NgModule,HostListener } from '@angular/core';
import { RouterModule, Routes,Router  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';

const routes: Routes = [
  {path: 'Play', component: HomeComponent},
  {path:'Game' , component : LandingComponentComponent},
  {path:'',component : LandingComponentComponent},
  {path:'*',redirectTo : '/Game',pathMatch:'full'},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(private router: Router){}
  
  redirection(){
    this.router.navigate(['/Play']);
   }
   @HostListener('window:beforeunload') goToPage() {
    this.router.navigate(['/Game']);
  }

}
