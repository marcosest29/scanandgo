import { Component, OnInit } from '@angular/core';
import {NodeService} from "../nodeservice";
import {MyMsgService} from "../msgservice";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-tipoauditoria',
  templateUrl: './tipoauditoria.component.html',
  styleUrls: ['./tipoauditoria.component.css']
})
export class TipoauditoriaComponent implements OnInit {

  auditoria:any;
  auditorias:any[]
  finicio:any;
  ffin:any;
  auditoriasTabla:any[];
  constructor(
      private nodeService: NodeService,
      private mymsgservice: MyMsgService,
      private router: Router,
      private messageService: MessageService) {
    this.loadListas();
  }
  ngOnInit(): void {
    this.mymsgservice.publishMessage('pantalla-tipoauditoria');
  }

  doSearch(){
    this.nodeService.getTipoAuditorias().then(loc => {
      this.auditoriasTabla = loc;
    });
  }
  gotoEdit(){

  }
  loadListas(){
    this.nodeService.getAuditorias().then(loc => {
      this.auditorias = loc;
    });
  }
}
