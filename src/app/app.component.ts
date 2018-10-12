import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  msg = 'Waiting for server...';

  constructor(private service: DemoService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log(this.msg);
    this.service.getUserMsg().subscribe(data => (this.msg = data['msg']));
  }
}
