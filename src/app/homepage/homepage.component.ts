import { Component, OnInit } from '@angular/core';
import { seriesDb } from "../service/seriesDb";
import {NgForm} from '@angular/forms';
import { Series } from "../models/series";


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  series:Series[]=[];

  constructor(private seriesdb:seriesDb) { }

  ngOnInit() {
  this.series = this.seriesdb.getAllNewSerieses();
  this.seriesdb.itemAdded
  .subscribe(
    (ser:Series[])=> {
      this.series = ser;
      console.log(this.series);
    });
  };
}
