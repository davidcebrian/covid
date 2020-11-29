import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-service.service'

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  infoPaises: any[];

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.generalService.getInfoPaises().subscribe( response => {
      this.infoPaises = response;
    })
  }

}
