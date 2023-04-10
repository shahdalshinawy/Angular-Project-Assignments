import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductServiceService } from '../services/product-service.service';
import { IProducts } from '../Shared Classes and types/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  prdId:any;
  
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductServiceService) {}
ngOnInit():void{
  this.prdId=this.activatedRoute.snapshot.paramMap.get("id");
 this.selecteditem=this.productService.GetProductById(this.prdId);
}
selecteditem!:IProducts;
    GetProductById(prdId:any)
    {
     // this.router.navigate(["/product",prdId.ID]);
    var product=this.productService.GetProductById(this.prdId)
    if(product!=null)
    {
        this.selecteditem=product;
    }
    
    }

}
