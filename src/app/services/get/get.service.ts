import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private api:ApiService) { }
  async getallusers(type:number){
    let req = {'type':type}
    let res = await firstValueFrom(this.api.get('/user',req)).catch((err)=>{
      console.log(err);
      
    })
    
    // console.log(res);
   return res;
    
  }
}
