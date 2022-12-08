import { DatePipe } from '@angular/common';
import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Welcome to Angular 15 Learning Series...';
  data: number = 100;
  public value1: number = 11;
  public array1: Array<number> = [11, 22, 33, 44, 55];
  public dt: Date = new Date();
  public status: boolean = true;
  public returnString(): string {
    return 'String return from an function';
  }
  public showAlert(): void {
    console.log('you clicked the button...');
    alert('click event fired...');
  }
  constructor() {
    console.log(`new - data is ${this.data}`);
  }
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);
  }
  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }
}
