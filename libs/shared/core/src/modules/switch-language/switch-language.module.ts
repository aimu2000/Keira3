import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';
import { SwitchLanguageComponent } from './switch-language.component';
import { SwitchLanguageService } from './switch-language.service';

@NgModule({
  imports: [BrowserModule, FormsModule, TranslateModule, SwitchLanguageComponent],
  providers: [SwitchLanguageService],
  exports: [SwitchLanguageComponent],
})
export class SwitchLanguageModule {}
