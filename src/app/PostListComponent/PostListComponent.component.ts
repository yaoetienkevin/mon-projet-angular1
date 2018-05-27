import { Component, Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-PostListComponent',
  templateUrl: './PostListComponent.component.html',
  styleUrls: ['./PostListComponent.component.css']
})
export class PostListComponentComponent implements OnInit {

 @Input() title: string ;
 @Input() content: string ;
 @Input() loveIts: number;
 @Input() created_at;

  constructor() {

    this.created_at = new Date();
    this.loveIts = 0 ;
   }

  onLoveit(e) {
    if (e === 'loveIts') {
      this.loveIts = this.loveIts + 1 ;
      //this.comparaison();
    } else if (e === 'dontloveIts') {
      this.loveIts = this.loveIts - 1 ;
     // this.comparaison();
    }

  }


  getColor() {
    if (this.loveIts > 0 ) {
      console.log(this.loveIts + ' est supérieur à 0' );
      return 'green';
    } else if (this.loveIts < 0) {
      console.log(this.loveIts + ' est inférieur à 0');
      return 'red';
    } else if (this.loveIts === 0) {
      console.log(this.loveIts + ' est égale à 0');
      return '';
    }
  }


  ngOnInit() {
  }

}
