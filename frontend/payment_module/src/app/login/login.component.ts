import { Component } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
      constructor(private connect : ConnectService){

      }

      public setLoginData(data:any)
      {
          this.connect.setDataLog(data).subscribe((result)=>{console.warn(result)})
      }
}
