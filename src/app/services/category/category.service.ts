import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class Category{

  constructor( 
    public id:number,
    public name:String,
    public description:String,
    public active:boolean
    ){}
 
 }

@Injectable({
  providedIn: 'root'
})
export class CategoryService{

  constructor(private http:HttpClient) { }

getAllCategory(){
  return this.http.get<Category[]>("http://localhost:8081/category/");
}



}
