import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { LoadingService } from '../../services/loadingService';
import { AllHerosPageService } from '../services/all-heros-page.service';

@Component({
  selector: 'app-all-heros-page',
  templateUrl: './all-heros-page.component.html',
  styleUrls: ['./all-heros-page.component.scss']
})
export class AllHerosPageComponent implements OnInit, AfterViewInit {
  @ViewChild('searchInput', { static: false }) searchInutElementRef: ElementRef;
  searchText: String;
  heros = [];
  constructor(private allHerosPageService: AllHerosPageService, private loadingService: LoadingService) { }

  onChangeSortField(event) {
    event == false ? this.filterBy("power") : this.filterBy("name");
  }

  ngAfterViewInit() {
    this.searchInutElementRef.nativeElement.focus();
  }

  ngOnInit() {
    this.loadingService.startLoading();
    this.allHerosPageService.getHeros().subscribe(response => {
      setTimeout(() => {
        this.heros = response["heros"];
        this.filterBy('power');
        this.loadingService.stopLoaing();
      }, 500)
    }, err => {
      console.error(err);
      this.loadingService.stopLoaing();
    });
  }

  filterBy(prop: string) {
    return this.heros.sort((a, b) => a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1);
  }

}
