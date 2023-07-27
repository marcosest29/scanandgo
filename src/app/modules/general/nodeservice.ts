import { animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
    
interface Articulo {
  codbarra: String,
  nomecommerce: String,
  descripcion: String
}

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) { }

  getAuditorias() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.auditorias);
  }
  getAuditoriasTabla() {
    return this.http.get<any>('assets/files/datos.json')
        .toPromise()
        .then(res => <any[]>res.auditoriastabla);
  }
  getShoppers() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.shoppers);
  }

  getLocales() {
    return this.http.get<any>('assets/files/datos.json')
      .toPromise()
      .then(res => <any[]>res.locales);
  }

  async getTipoAuditorias() {
    const res = await this.http.get<any>('assets/files/datos.json')
        .toPromise();
    return <any[]>res.tipoauditorias;
  }
}
