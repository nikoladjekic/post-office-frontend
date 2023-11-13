import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Shipment } from 'src/models/shipment.interface';
import { ShipmentService } from 'src/services/shipment.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.scss']
})
export class ShipmentsComponent implements OnInit {
  allShipments: MatTableDataSource<Shipment>;
  tableColumns: string[] = ['id', 'type', 'origin', 'destination', 'delivered', 'weight', 'office'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private _shipments: ShipmentService) { }

  ngOnInit() {
    this.getAllShipments();
  }

  getAllShipments(): void {
    this._shipments.getAllShipments().subscribe(
      response => {
        this.allShipments = new MatTableDataSource(response);
        this.allShipments.paginator = this.paginator;
        this.allShipments.sort = this.sort;
      },
      err => {
        console.error(err);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.allShipments.filter = filterValue.trim().toLowerCase();
  }

}
