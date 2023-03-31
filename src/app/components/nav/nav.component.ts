import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  private nonAuthNavItems: NavItems[] = [
    {
      label: 'Sign in',
      route: '/login',
    },
    {
      label: 'Signup',
      route: '/signup',
    },
  ];

  private authNavItems: NavItems[] = [
    {
      label: 'Tareas',
      route: '/tareas',
    },
    {
      label: 'Logout',
      route: '/logout',
    },
  ];

  public navItems: NavItems[];

  constructor(public auth: AuthService) {
    this.navItems = auth.loggedIn() ? this.authNavItems : this.nonAuthNavItems;
  }
}

type NavItems = {
  label: string;
  route: string;
};
