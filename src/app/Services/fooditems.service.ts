import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fooditems } from '../Model/fooditems.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FooditemsService {
  private baseURL = "http://localhost:9090/api/fooditems";
  constructor(private httpClient: HttpClient) { }
  CreateFooditem(fooditem: Fooditems): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}/addFoodItem`, fooditem);

  }
}
