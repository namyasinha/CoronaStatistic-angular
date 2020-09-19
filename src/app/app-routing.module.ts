import {Routes,RouterModule} from '@angular/router'
import { NgModule } from '@angular/core';

import {StateWiseStatisticComponent} from './state-wise-statistic/state-wise-statistic.component'


const routes:Routes=[
  {path:'coronaStatistic',component:StateWiseStatisticComponent}
  
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }