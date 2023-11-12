import { Component, OnInit } from '@angular/core';
import { Shipment } from 'src/models/shipment.interface';
import { ShipmentService } from 'src/services/shipment.service';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {
  allShipments: Shipment[] = [];
  tableColumns: string[] = ['id', 'type', 'origin', 'destination', 'delivered', 'weight', 'office'];

  constructor(private _shipments: ShipmentService) { }

  ngOnInit() {
    this.getAllShipments();
  }

  getAllShipments(): void {
    this._shipments.getAllShipments().subscribe(
      response => {
        this.allShipments = response;
      },
      err => {
        console.error(err);
      }
    );
  }

}
