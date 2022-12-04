import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { SuccessedComponent } from './pages/successed/successed.component';
import { FailedComponent } from './pages/failed/failed.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { TextListComponent } from './components/text-list/text-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SuccessedComponent,
    FailedComponent,
    MainListComponent,
    TextListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
