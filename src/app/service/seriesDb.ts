import { EventEmitter,Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Series } from '../models/series';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class seriesDb {
  itemAdded = new EventEmitter<Series[]>();

  private serverurl: String = 'https://new-serieses.herokuapp.com';
  private series: Series[];

  constructor(private http: Http) { }

   private seriesesData() {
      return this.http.get(this.serverurl + '/getAllNewSerieses');
    }

   private seriesByGenre(genre:string) {
      return this.http.post(this.serverurl + '/getSeriesByGenre',{genre});
    }


   private seriesByRating(low:number,high :number) {
      return this.http.get(this.serverurl + '/getSeriesByRating/' + low + '/' + low);
    }

  getAllNewSerieses(){
      this.seriesesData()
            .subscribe(
        (response:Response)=>{
          this.series = response.json();
          this.itemAdded.next(this.series);
          console.log(this.series);
        });
      return this.series;
  }

  getSeriesByRating(low:number,high :number){
      this.seriesByRating(low,high)
            .subscribe(
        (response:Response)=>{
          this.series = response.json();
          this.itemAdded.next(this.series);
          console.log(this.series);
        });
      return this.series;
  }

  getSeriesByGenre(genre:string){
      this.seriesByGenre(genre)
            .subscribe(
        (response:Response)=>{
          this.series = response.json();
          this.itemAdded.next(this.series);
          console.log(this.series);
        });
      return this.series;
  }
}
