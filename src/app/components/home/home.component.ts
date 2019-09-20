import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productsList:Product[]=null;
  constructor(private producrservice:ProductService) { }

  ngOnInit() {
    this.producrservice.getAllProducts().subscribe(
      data=>this.productsList=data
    )
  }

}
