import { Component, OnInit } from '@angular/core';
import { CategoryService, Category } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categoryList:Category[]=null;
  constructor(private catservice:CategoryService) { }

  ngOnInit() {
    this.catservice.getAllCategory().subscribe(data=>this.categoryList=data);
  
  }

}
