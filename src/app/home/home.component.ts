import { Component, Input, OnInit} from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  @Input() Images: carouselImage[] = []

  selectedIndex = 0;
  ngOnInit() :void{ }

}
