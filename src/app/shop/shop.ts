import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.html',
  styleUrl: './shop.css'
})
export class Shop {
  // lsProduct: any;
  

  lsProduct = [
    {id:1, name: "Loose Fitted T-Shirts With...", size: "XS/S/M/L/XL/XXL", price:"15.00", image:"assets/clother_image/1.png", Gender:0, Category:"T-Shirts", link:"/product1"},
    {id:2, name: "Oversized Laced T-Shirt", size: "M/L/XL/XXL", price:"21.59", image:"assets/clother_image/2.png",Gender:0, Category:"T-Shirts"},
    {id:3, name: "Double Sleeves T-Shirts...", size: "M/L/XL/XXL", price:"17.59", image:"assets/clother_image/3.png",Gender:1, Category:"Sleeve"},
    {id:4, name: "Loose Fitted Denim Shirts", size: "M/L/XL/XXL", price:"19.59", image:"assets/clother_image/4.png",Gender:1, Category:1},
    {id:5, name: "Regular T-Shirts With Printed", size: "M/L/XL/XXL", price:"13.59", image:"assets/clother_image/5.png",Gender:1, Category:1},
    {id:6, name: "Regular Acid Wash T-Shirts", size: "S/M/L/XL", price:"13.59", image:"assets/clother_image/6.png",Gender:1, Category:1},
    {id:7, name: "Regular T-Shirt With Printed", size: "L/XL", price:"14.95", image:"assets/clother_image/7.png",Gender:1, Category:1},
    {id:8, name: "Regular Cargo Shorts", size: "S/M/L/XL", price:"19.95", image:"assets/clother_image/8.png",Gender:1, Category:1},
    {id:9, name: "Sport Life T-Shirt With...", size: "S/L/XL", price:"20.59", image:"assets/clother_image/9.png",Gender:1, Category:1},
    {id:10, name: "Knitted Vest", size: "S/M/L/XL", price:"20.95", image:"assets/clother_image/10.png",Gender:1, Category:1},
    {id:11, name: "Straight Fitted Trouser", size: "29/30/31/32", price:"17.95", image:"assets/clother_image/11.png",Gender:1, Category:1},
    {id:12, name: "Cropped Knitted Polo Shirts", size: "XS/S/M", price:"20.95", image:"assets/clother_image/12.png",Gender:1, Category:1},
    {id:13, name: "Sport Life Short With...", size: "XS/S/M/L/XL/XXL", price:"32.95", image:"assets/clother_image/13.png",Gender:1, Category:1},
    {id:14, name: "Wide Leg Cargo Trouser", size: "S/M/L/XL", price:"20.59", image:"assets/clother_image/14.png",Gender:1, Category:1},
    {id:15, name: "Knitted Vest", size: "S/M/L/XL", price:"20.95", image:"assets/clother_image/15.png",Gender:1, Category:1},
  ]


}
