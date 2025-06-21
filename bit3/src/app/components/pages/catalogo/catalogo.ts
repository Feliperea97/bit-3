import { Component, inject, OnInit} from '@angular/core';
import { Navigation } from '../../shared/navigation/navigation';
import { productosapi } from "../../../services/productosapi"

@Component({
  selector: 'app-catalogo',
  imports: [Navigation],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class Catalogo implements OnInit {
private productosApi = inject(productosapi)
catalogo!: any[];

ngOnInit(): void {
    this.productosApi.getGamesList().subscribe((res:any) =>{
      this.catalogo = res;
      console.log(this.catalogo);
    });
    
}
}
