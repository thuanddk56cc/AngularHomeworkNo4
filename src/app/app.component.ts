import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HomeworkNo4';
  a: number;
  b: number;
  cactoantu = [{id: 1, name:"+"}, {id: 2, name:"-"}, {id: 3, name:"*"}, {id: 4, name:"/"}];
  toantu = 1;
  result: number;
  error: string;

  calc() {
    this.error = "";
    if (this.toantu == 1) {
      this.result = this.a + this.b;
    } else if (this.toantu == 2) {
      this.result = this.a - this.b;
    } else if (this.toantu == 3) {
      this.result = this.a * this.b;
    } else if (this.toantu == 4) {
      if (this.b != 0) {
        this.result = this.a / this.b;
      } else {
        this.error = "Không thể chia cho 0";
      }
    }
  }
}
