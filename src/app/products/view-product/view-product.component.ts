import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  constructor(private ar: ActivatedRoute, private ps: ProductService) { }
  pid: any
  pdata: any
  ngOnInit() {
    this.ar.params.subscribe((data: any) => {
      this.pid = data["id"]
    })
    this.ps.viewProduct(this.pid).subscribe((item: any) => {
      // console.log(item);
      this.pdata = item

    })
  }

}
