import { Component } from '@angular/core';
import { DataService } from './data.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
fdata: any;
  emplye: any;
  searchText;
  hits;
  dis;any;
  set: any;
  subscription: Subscription;
  title = 'inter';
  term: any = { title: '' };
  constructor(private s: DataService) {}
  selectedName:any;
ngOnInit() {

  this.subscription = timer(0, 1000).pipe(
    switchMap(() => this.s.get())
  ).subscribe(resp => {
    console.log(resp)
    this.fdata = resp['hits'];
  });
}
click(set){
  this.dis=set
  this.selectedName = set.title;
  this.s.post(set).subscribe(resp=>console.log(resp))
 
}

}