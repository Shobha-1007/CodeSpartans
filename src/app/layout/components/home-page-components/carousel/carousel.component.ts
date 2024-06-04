import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  images = [
    {src: 'https://picsum.photos/id/238/500/200', alt: 'First Slide'},
    {src: 'https://picsum.photos/id/236/200/300', alt: 'Second Slide'},
    {src: 'https://picsum.photos/id/239z/200/300', alt: 'Third Slide'}
  ];
  currentIndex = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  setSlide(index: number) {
    this.currentIndex = index;
  }
}
