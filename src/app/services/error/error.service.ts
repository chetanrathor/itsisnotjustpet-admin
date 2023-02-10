import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }
  handelError(err:HttpErrorResponse){
    if(!err.error){
      // return throwError('Unknow Error Occured')
      return throwError(() => new Error('Unknown Error Occured'))
    }
    else{
      console.log(err);
      
      return throwError(() => new Error(err.error.message))
    }
  }
}
