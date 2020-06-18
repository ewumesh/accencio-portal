import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAuthenticationComponent } from './auth/user-authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthGuard } from './auth/unauth';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserComponent } from './auth/user-setting/user.component';
import { UserInfoComponent } from './auth/userinfo/userinfo.component';
import { ASession } from 'src/request/session';
import { SpotFireInterceptor } from 'src/request/SpotFireInterceptor';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { WidgetDirective } from './theme/directives/WidgetDirective';
@NgModule({
  declarations: [
    WidgetDirective,
    AppComponent,
    UserAuthenticationComponent,
    DashboardComponent,
    Dashboard2Component,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    UserInfoComponent,

  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AuthGuard, UnauthGuard, ASession,
   ],
  bootstrap: [AppComponent, UserInfoComponent]
})
export class AppModule { }
