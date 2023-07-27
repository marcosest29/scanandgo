import { Component,OnInit } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { MyMsgService } from './modules/general/msgservice';
import { isPlatformBrowser } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pantalla = 'home';
  titulo = 'Scan and Go';
  items: MenuItem[] | undefined;
  modalAntiguedad:boolean=false;
  modalFrecuencia:boolean=false;
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private mymsgservice: MyMsgService,
    private router: Router) {
  }
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }

    this.items = [
      {
          label: 'Antiguedad',
          command: () => {
            this.abrirAntiguedad();
        }
      },
      {
        label: 'Frecuencia',
        command: () => {
          this.abrirFrecuencia();
        }
      }
  ];

    this.mymsgservice.source.subscribe(msg => {
      if (msg.startsWith("pantalla")) {
        setTimeout(()=>{
          this.pantalla = msg.split("-")[1];
          if (this.pantalla === "auditoria") {
            setTimeout(()=>{
              this.titulo = "Auditoria Scan and Go";
            },1);
          }
          if (this.pantalla === "tipoauditoria") {
            setTimeout(()=>{
              this.titulo = "Tipo Auditoria Scan and Go";
            },1);
          }
        },1);
      }
    });
  }

  cerrarAntiguedad(){
    this.modalAntiguedad=false;
  }
  abrirAntiguedad(){
    this.modalAntiguedad=true;
  }

  cerrarFrecuencia(){
    this.modalFrecuencia=false;
  }
  abrirFrecuencia(){
    this.modalFrecuencia=true;
  }
}
