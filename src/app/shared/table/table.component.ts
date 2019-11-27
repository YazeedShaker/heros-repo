import { Component, OnInit, Input } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('hero') hero: any;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`rating is changed from ${$event.oldValue} to ${$event.newValue}`);
  }

  goToHeroPage(hero) {
    this.router.navigate(['/hero', hero]);
  }

}
