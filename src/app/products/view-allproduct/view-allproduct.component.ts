import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-allproduct',
  templateUrl: './view-allproduct.component.html',
  styleUrls: ['./view-allproduct.component.css']
})
export class ViewAllproductComponent {

filterCategory:any  
productData:any

searchString:any=''
constructor(private ps:ProductService){}

  ngOnInit(){
this.ps. viewAllProduct().subscribe((data:any)=>{
console.log(data);
this.productData=data
})
//call data or acces data from behaviour subject 
this.ps.search.subscribe((data:any)=>{
  this.searchString=data
})
}
filter(category:any){
  this.filterCategory=this.productData.filter((i:any)=>{
    if(i.categoryid==category || category==""){
      return i
    }
    
  })
}
}
