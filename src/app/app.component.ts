import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public usuarioLogado: boolean = false;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menu: MenuController,
    private router: Router
  ) {
    this.initializeApp();
    this.verificaSeEstaLogado();
    this.desabilitaMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.verificaSeEstaLogado();
    });
  }

  get token() {
    return localStorage.getItem('token');
  }

  verificaSeEstaLogado(){

    if(this.token  != null){
      this.usuarioLogado = true;
      this.router.navigateByUrl('/home');
      console.log('Token armazenado');

    } else {
      this.usuarioLogado = false;
      console.log('Usuário não está logado');
      this.router.navigateByUrl('/login');
    }
  }

  habilitaMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menuAposLogin');
  }

  desabilitaMenu() {
    this.menu.enable(false, 'menu');
  }




}
