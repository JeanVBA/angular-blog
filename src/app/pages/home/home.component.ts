import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from 'src/app/Data/dataFake';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input()
  id: string | null = '0';
  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDescription: string = '';
  ngOnInit(): void {}
  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];
    this.cardTitle = result.title;
    this.cardDescription = result.description;
    this.photoCover = result.photo;
  }
}
