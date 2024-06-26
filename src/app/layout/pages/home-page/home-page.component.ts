import { Component } from '@angular/core';
import { BannerComponent } from '../../components/home-page-components/banner/banner.component';
import { CarouselComponent } from '../../components/home-page-components/carousel/carousel.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [BannerComponent, CarouselComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
