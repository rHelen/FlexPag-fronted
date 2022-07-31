import { Component, VERSION } from '@angular/core';
import {DatePipe} from '@angular/common';
import {HttpClientModule, HttpHeaders} from '@angular/common/http'
import { CotacaoService } from './cotacao.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title='HistoricoCotacao';

  dataI:Date
  dataF:Date
  formattedDate1:string
  formattedDate2:string
  moeda:string
  // token:string


  constructor(private cotacaoService: CotacaoService){}

  // token = {
  //   headers: new HttpHeaders().set('Authorization', this.token)
  // }

  CotacaoMoeda(): void{
    this.cotacaoService.CotacaoM(this.moeda,this.formattedDate1,this.formattedDate2).subscribe(resp =>{
      console.log(resp);
    })
  }

  formatarData1(event:any){
    const datepipe: DatePipe = new DatePipe('en-US')
    this.formattedDate1 = datepipe.transform(this.dataI, 'MM-dd-YYYY')
   }

   formatarData2(event:any){
    const datepipe: DatePipe = new DatePipe('en-US')
    this.formattedDate2 = datepipe.transform(this.dataF, 'MM-dd-YYYY')
   }

}
