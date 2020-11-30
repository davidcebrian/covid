import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../services/general-service.service'
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-spain',
  templateUrl: './spain.component.html',
  styleUrls: ['./spain.component.css']
})
export class SpainComponent implements OnInit {

  infoGeneral: any;
  infoSpain: any;

  constructor(private generalService: GeneralService) { 
    this.infoGeneral = "";
  }

  ngOnInit(): void {
    this.generalService.getInfoGeneral().subscribe( res =>{
      this.infoGeneral = res;
    })

    this.generalService.getInfoSpain().subscribe( res => {
      this.infoSpain = res;
    })
  }

}
