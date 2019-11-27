import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss']
})
export class HeroPageComponent implements OnInit {

  heroName: String;
  heroPower: String;
  heroDescription: String;
  heroAvatar: String;

  constructor(private activatedRoute: ActivatedRoute) {
    this.heroName = this.activatedRoute.snapshot.paramMap.get('name');
    this.heroPower = this.activatedRoute.snapshot.paramMap.get('power');
    this.heroDescription = this.activatedRoute.snapshot.paramMap.get('description');
    this.heroAvatar = this.activatedRoute.snapshot.paramMap.get('avatar');
  }

  ngOnInit() {
  }

}
