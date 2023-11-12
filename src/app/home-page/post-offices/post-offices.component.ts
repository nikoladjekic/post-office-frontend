import { Component, OnInit } from '@angular/core';
import { PostOffice } from 'src/models/post-office.interface';
import { PostOfficeService } from 'src/services/post-office.service';

@Component({
  selector: 'app-post-offices',
  templateUrl: './post-offices.component.html',
  styleUrls: ['./post-offices.component.scss']
})
export class PostOfficesComponent implements OnInit {
  offices: PostOffice[] = [];
  tableColumns: string[] = ['id', 'zip', 'name'];

  constructor(private _offices: PostOfficeService) { }

  ngOnInit() {
    this.getAllOffices();
  }

  getAllOffices(): void {
    this._offices.getOffices().subscribe(
      response => {
        this.offices = response;
      },
      err => {
        console.error(err);
      }
    );
  }

}
