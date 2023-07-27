import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styleUrls: ['./auditoria.component.css']
})
export class AuditoriaComponent implements OnInit {

  local:any;
  locales:any[];
  auditoria:any;
  auditorias:any[]
  factura:any;
  finicio:any;
  ffin:any;
  shopper:any;
  shoppers:any[];
  auditoriasTabla:any[];
  selectedauditorias:any;
  constructor(
      private nodeService: NodeService,
      private mymsgservice: MyMsgService,
      private router: Router,
      private messageService: MessageService) {
    this.loadListas();
  }
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-auditoria');
  }

  doSearch(){
    this.nodeService.getAuditoriasTabla().then(loc => {
      this.auditoriasTabla = loc;
    });
  }
  gotoEdit(){

  }
  loadListas(){
    this.nodeService.getLocales().then(loc => {
      this.locales = loc;
    });
    this.nodeService.getAuditorias().then(loc => {
      this.auditorias = loc;
    });
    this.nodeService.getShoppers().then(loc => {
      this.shoppers = loc;
    });
  }
}
