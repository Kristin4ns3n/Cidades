import { Component, inject } from '@angular/core';
import { IonContent, IonHeader, IonTabBar, IonTitle, IonToolbar } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  /*
  standalone: true,
  imports: [ 
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent, 
  ], */
})
  
export class HomePage {

  constructor() { }
  
  ngOnInit() {
    console.log('ngoninit homepage');
    
  }
}
  
  
  
