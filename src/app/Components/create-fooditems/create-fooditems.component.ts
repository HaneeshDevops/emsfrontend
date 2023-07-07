import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fooditems } from 'src/app/Model/fooditems.model';

import { FooditemsService } from 'src/app/Services/fooditems.service';

@Component({
  selector: 'app-create-fooditems',
  templateUrl: './create-fooditems.component.html',
  styleUrls: ['./create-fooditems.component.css']
})
export class CreateFooditemsComponent implements OnInit{
  fooditem: Fooditems = new Fooditems();
  constructor(private fooditemService: FooditemsService,private router:Router) { }
  ngOnInit(): void {}
    saveFooditem() {
      this.fooditemService.CreateFooditem(this.fooditem).subscribe(data =>{ 
        console.log(data);
        this.goToFooditemList();
        
    },
       error => console.log(error));
  
    }
    goToFooditemList(){
      this.router.navigate(['/fooditem']);
    }
  
    onSubmit(){
      console.log(this.fooditem);
      this.saveFooditem();
  
    }
  

}
