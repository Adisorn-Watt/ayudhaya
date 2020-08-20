import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'
import { NbEvaIconsModule } from '@nebular/eva-icons'
import { AppComponent } from './app.component'
import { NbThemeModule, NbDatepickerModule, NbDialogModule, NbLayoutModule, NbToastrModule } from '@nebular/theme'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot({ destroyByClick: true, duration: 3000, preventDuplicates: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
