import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Product{
  public id:number;
  public name:String;
  public brand:String;
  public description:String;
  public unitPrice:number;
  public quantity:number;
  public categoryId:number;
  public supplierId:number;
  public purchases:number;
  public views:number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
   
  }

  getAllProducts()
  {
    return this.http.get<Product[]>('http://localhost:8081/product/');
  }
}
