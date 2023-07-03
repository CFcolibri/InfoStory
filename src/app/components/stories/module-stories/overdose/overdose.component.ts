import { Component, OnInit } from '@angular/core';
import { DataOverdoseService } from '../../../../_services/data-overdose.service';

@Component({
  selector: 'app-overdose',
  templateUrl: './overdose.component.html',
  styleUrls: ['./overdose.component.css']
})
export class OverdoseComponent implements OnInit {

  result: any;


  constructor(
    private DataOverdoseService : DataOverdoseService) {
    }

    ngOnInit() {
      this.DataOverdoseService
        .OverDoseData()
        .then((res: any) => {
          this.result = res;
          console.log(this.result);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }

}
