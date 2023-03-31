import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { TareasComponent } from './tareas/tareas.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent   },
  { path: 'tareas', component: TareasComponent, canActivate:[AuthGuard]   },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    TareasComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,{
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
