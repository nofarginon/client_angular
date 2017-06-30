import { Component, OnInit } from '@angular/core';
import { seriesDb } from "../service/seriesDb";
import {NgForm} from '@angular/forms';
import { Series } from "../models/series";

@Component({
  selector: 'app-byrating',
  templateUrl: './byrating.component.html',
  styleUrls: ['./byrating.component.css']
})
export class ByratingComponent implements OnInit {
  series:Series[]=[];

  constructor(private seriesdb:seriesDb) { }

  ngOnInit() {
  }

  searchActor(form:NgForm) {
    var low = form.value.low;
    var high = form.value.high;
    this.series = this.seriesdb.getSeriesByRating(low,high);
    this.seriesdb.itemAdded
    .subscribe(
      (ser:Series[])=> {
        this.series = ser;
        console.log(this.series);
      });
  }

}
