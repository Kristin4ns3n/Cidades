import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  profile = {
    name: "Kirsten Ernestine",
    email: 'kika_teachs@protonmail.com',
  };

  pages = [
    { title: 'Home', url: './home', icon: 'home', active: true },
    //{ title: 'Profile', url: './profile', icon: 'person', active: true },
    {
      title: 'Estados', url: './orders', icon: 'bag-handle', active: true,
      children: [
         /* Acre */
         {
          title: 'Acre',
          url: '/menu/main',
          /* children: [
            {
              title: 'Rio Branco',
              url: '/menu/main/acre',
            }
          ] */
        },
        /* Alagoas */
        {
          title: 'Alagoas',
          url: '/menu/main',
        },
        /* Amapá */
        {
          title: 'Amapá',
          url: '/menu/main',
       
        },
        /* Amazonas */
        {
          title: 'Amazonas',
          url: '/menu/main',       
       },  
   
      ] //End of Children
     },
  ]

  constructor() {}
}
