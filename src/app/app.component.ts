import { Component , ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FoodDeliveryApp';

  constructor(
private elementRef:ElementRef
  )
  {}
  ngOnInit(){

    
  }

  ngAfterViewInit(){
    var style = document.createElement('link');
    style.type = 'text/css';
    style.href='./assets/css/style.css';
    
    style.rel='stylesheet';
   
    this.elementRef.nativeElement.appendChild(style);
  }

 
}
