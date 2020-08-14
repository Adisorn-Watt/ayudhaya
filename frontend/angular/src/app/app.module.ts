import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppComponent } from './app.component';
import {
  NbThemeModule,
  NbSidebarModule,
  NbButtonModule,
  NbDatepickerModule,
  NbDialogModule,
  NbLayoutModule,
} from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbEvaIconsModule,
    NbSidebarModule,
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
