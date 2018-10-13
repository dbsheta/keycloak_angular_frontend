import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  msg = 'Waiting for server...';
  token = '';

  constructor(private service: DemoService, private auth: KeycloakService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    console.log(this.msg);
    this.service.getUserMsg().subscribe(data => (this.msg = data['msg']));
    this.getToken();
    this.auth.isUserInRole('ROLE_ADMIN');
  }

  getToken() {
    this.auth.getToken().then(data => (this.token = data));
  }
}
