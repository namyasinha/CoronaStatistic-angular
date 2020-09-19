import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import {Cases} from './../Cases';
import {State} from './../Cases';
import {Router} from '@angular/router'


@Component({
  selector: 'app-state-wise-statistic',
  templateUrl: './state-wise-statistic.component.html',
  styleUrls: ['./state-wise-statistic.component.css']
})
export class StateWiseStatisticComponent implements OnInit {
  Statistic:Cases[];


  constructor(private _service:NgserviceService,private router:Router) { }

  ngOnInit() {
    this._service.fetchCoronaStatistic().subscribe(
      data=>{
        console.log("response received")
        this.Statistic=data.state;
        console.log(this.Statistic)
      },
      error=>console.log("error occured")
    )
  }

  }


