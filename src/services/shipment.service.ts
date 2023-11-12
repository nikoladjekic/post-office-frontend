import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Shipment } from 'src/models/shipment.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentService {
  private dbUrl: string = `${environment.API_URL}/shipment`;

  constructor(private http: HttpClient) { }

  getAllShipments() {
    return this.http.get<Shipment[]>(`${this.dbUrl}/list`);
  }
}
