import { Component, OnInit } from '@angular/core';
import { Category, CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  categoryList:Category[]=null;
  constructor(private catservice:CategoryService) { }

  ngOnInit() {
    this.catservice.getAllCategory().subscribe(data=>this.categoryList=data);
    
  }

}
