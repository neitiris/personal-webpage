import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {ApproutingModule} from './approuter.module';
import {
AuthService,
ApiService,
UserService
} from '../services/';
import { LandingPageComponent } from './pages';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
  ],
  imports: [
    ApproutingModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [
    HttpClientModule,
    ApiService,
    UserService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
