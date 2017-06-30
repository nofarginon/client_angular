import { Component, OnInit } from '@angular/core';
import { seriesDb } from "../service/seriesDb";
import {NgForm} from '@angular/forms';
import { Series } from "../models/series";

@Component({
  selector: 'app-bygener',
  templateUrl: './bygener.component.html',
  styleUrls: ['./bygener.component.css']
})
export class BygenerComponent implements OnInit {
  series:Series[]=[];

  constructor(private seriesdb:seriesDb) { }

  ngOnInit() {
  }

  searchGenre(form:NgForm) {
    var genre = form.value.genre;
    this.series = this.seriesdb.getSeriesByGenre(genre);
    this.seriesdb.itemAdded
    .subscribe(
      (ser:Series[])=> {
        this.series = ser;
        console.log(this.series);
      });
  }
}
