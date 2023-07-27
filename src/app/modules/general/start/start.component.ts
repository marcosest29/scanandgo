import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private router: Router) { }

  gotoAuditoria() {
    this.router.navigate(['auditoria'], {});
  }

  gotoTipoAuditoria() {
    this.router.navigate(['tipoauditoria'], {});
  }
}
