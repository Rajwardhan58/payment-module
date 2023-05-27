import { Component } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  constructor(private connect : ConnectService){

  }

  public setData(data:{first:string,last:string}){
    
    this.connect.setPayment(data).subscribe((result)=>{console.warn(result)})
    
    
  }
}
