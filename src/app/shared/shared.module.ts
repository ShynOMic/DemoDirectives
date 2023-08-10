import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ConvertTimePipe } from './pipes/convert-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { TrainerCardComponent } from './components/trainer-card/trainer-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    TrainerCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ConvertTimePipe,
    HighlightDirective,
    TrainerCardComponent,
    FormsModule
  ]
})
export class SharedModule { }
