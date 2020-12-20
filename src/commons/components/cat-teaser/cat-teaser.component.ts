import {Apollo} from 'apollo-angular';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, ElementRef, QueryList, Renderer2 } from '@angular/core';
import { Kitty } from '../../models/kitty';
import { Subscription } from 'rxjs';
import { KittyService } from '../../services/kitty.service';

@Component({
  selector: 'app-cat-teaser',
  templateUrl: './cat-teaser.component.html',
  styleUrls: ['./cat-teaser.component.scss']
})
export class CatTeaserComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren('lazyKitten') cats: QueryList<ElementRef<HTMLUListElement>>;
  loading: boolean;
  kittens: Kitty[];
  config: any = {
    // Root margin determines distance from viewport in the Y axis
    rootMargin: '20px 0px',
    threshold: 0.03
  };
  observer$: any;
  urlPrefix: String = '../../assets/kitten/';
  urlSuffix: String = '.png';
  private querySubscription: Subscription;
  private catsSubscription: Subscription;
  constructor(
    private apollo: Apollo,
    private renderer: Renderer2,
    private kittyService: KittyService
  ) {}

  lazyLoadCats(): void {
    this.observer$ = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {

          if (entry.isIntersecting) {
            this.observer$.unobserve(entry.target);
            this.preloadCats(entry.target);
          }
        });
      }, this.config);
  }

  preloadCats(entry): void {
    const srcValue = entry.getAttribute('data-attr');
    console.log(srcValue + ' pic of cat');
    const image = entry.firstChild as HTMLImageElement;
    image.src = srcValue;
  }

  watchCats(): void {
    const kitten = this.cats.toArray();
    console.log('Cats in this show:', kitten.length);
    kitten.forEach(kitty => {
      this.observer$.observe(kitty.nativeElement);
    });
  }

  ngOnInit(): void {
    // this.auth.setToken();
    this.querySubscription = this.kittyService.getKitten()
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      this.kittens = data.kittens;
    });
  }
  ngAfterViewInit(): void {
    this.watchCats();
    this.catsSubscription = this.cats.changes.subscribe(_ =>
      this.watchCats()
    );
    this.lazyLoadCats();
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
    this.catsSubscription.unsubscribe();
  }
}
