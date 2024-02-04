import { AfterViewInit, Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{

  ngAfterViewInit(){
    if (typeof $ !== 'undefined') {
      $('#imageCarousel').carousel({
        interval: 3000,
        pause: 'hover'
      });
    }
  }

}
