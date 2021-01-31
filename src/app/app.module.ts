import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, RegisterFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule,HttpClientModule, ReactiveFormsModule,
       AngularFireModule.initializeApp(environment.firebaseConfig),
    

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
