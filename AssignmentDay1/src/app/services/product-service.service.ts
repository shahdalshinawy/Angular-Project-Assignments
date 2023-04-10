import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { IProducts } from '../Shared Classes and types/IProduct';
import { IUsers } from '../Shared Classes and types/IUsers';

import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

_url:string="/assets/data/products.json";
_postUrl="https://jsonplaceholder.typicode.com/posts";
prod:any;
  constructor(private router:Router,private http:HttpClient) { }
productItems:any=this.GetAllProducts();
   GetProductById(prdId:any)
    {
      //this.router.navigate(["/product",prdId.ID]);
      // return this.productItems.forEach((((element: { ID: number; Name: any; Quanitity: any; Price: any; img: any; })=> {
      //   if(element.ID == prdId){
      //     return {ID:element.ID , Name:element.Name , Quanitity : element.Quanitity , Price : element.Price , img:element.img}
      //   }
      //   return null;
         
      //  })))
      for(let product of this.productItems)
      {
        if(product.ID==prdId)
        {
          return product;
        }
      }
      return null;
    }
    
  GetAllProducts():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"Server error");
    }));
  }
  
}

