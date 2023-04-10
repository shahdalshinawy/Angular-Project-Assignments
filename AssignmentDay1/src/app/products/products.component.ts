import { Component,OnInit } from '@angular/core';
import { IProducts } from '../Shared Classes and types/IProduct';
import { ICategory } from '../Shared Classes and types/ICategory';
import { DiscountOffers } from '../Shared Classes and types/DiscountOffers';
import { ProductServiceService} from '../services/product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit  {
  toDisplay=true;
  productID:any;
  constructor(private ProductServicesServices:ProductServiceService){}
  ngOnInit(): void {
    this.ProductServicesServices.GetAllProducts().subscribe({
      next:data=>this.productList=data,
      error:error=>this.errorMessage=error
    })
    // this.ProductServicesServices.GetProductById(productID).subscribe({
    //   next:data=>this.productID=data,
    //   error:error=>this.errorMessage=error
    // })
    }
    productList:any=[]
    errorMessage:any;
    discount=DiscountOffers.ten;
    disBool:boolean=(this.discount === DiscountOffers.NoDiscount? false : true);
    storeName:string="Nike";
    storeLogo:string="assets/shahd.jpg";
    // productList:IProducts[]=[
    //   {ID:1,Name:'p1',Quanitity:50,Price:200,img:"assets/shahd.jpg"},
    //   {ID:2,Name:'p2',Quanitity:50,Price:200,img:"assets/shahd.jpg"},
    // ]
    categoryList:ICategory[]=[
      {ID:1,Name:'shoes'},
      {ID:2,Name:'pants'},
    ]
    clientName:string="hesham";
    IsPurchased:boolean=false;

    hideTable()
    {
      this.toDisplay = false;
      this.IsPurchased=true;
    }
    productItems=[
      {ID:1,Name:'p1',Quanitity:80,Price:9800,img:"assets/shahd.jpg"},
      {ID:2,Name:'p2',Quanitity:10,Price:200,img:"assets/shahd.jpg"},
      {ID:3,Name:'p3',Quanitity:550,Price:2000,img:"assets/shahd.jpg"},
    ]
    renderedList:any=[];
    selecteditem!:IProducts;
    GetProductById(prdId:any)
    {
     // this.router.navigate(["/product",prdId.ID]);
    var product=this.ProductServicesServices.GetProductById(this.productID)
    if(product!=null)
    {
        this.selecteditem=product;
    }
    
    }
    renderValues()
    {
      this.ProductServicesServices.GetAllProducts().subscribe(
        proData=>{
          this.renderedList=proData;
        } 
      )
    }
}
