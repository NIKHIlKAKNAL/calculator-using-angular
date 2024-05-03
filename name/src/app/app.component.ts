import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaknal';
  num1:number=0;
  num2:number=0;
  ans:number=0;
  operator:string='+';
  operators = ["+","-","*","/","%","**"];

calci(){
  switch(this.operator){
    case "+": 
      this.ans = this.num1 + this.num2;
      break;
    
    case "-": 
      this.ans = this.num1 - this.num2;
      break;
    
    case "*": 
      this.ans = this.num1 * this.num2;
      break;

      
    case "/": 
      this.ans = this.num1 / this.num2;
      break;
      
    case "%": 
      this.ans = this.num1 % this.num2;
      break;
  
    case "**": 
      this.ans = this.num1 ** this.num2;
      break;
  
  }
}
  

}
