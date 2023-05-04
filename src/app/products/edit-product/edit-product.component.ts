import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  pid: any
  pdata: any
  constructor(private ar: ActivatedRoute, private ps: ProductService,private router:Router) { }

  ngOnInit() {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })
    this.ps.viewProduct(this.pid).subscribe((data: any) => {
    this.pdata = data
      })
    }
  updateProduct(form:any){
    this.ps.editProduct(this.pid,this.pdata).subscribe((item:any)=>{
      alert('product data updated')
      this.router.navigateByUrl("products")
    })
  }  
}
