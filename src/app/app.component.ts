import { Component, VERSION } from '@angular/core';
import {DatePipe} from '@angular/common';
import { CotacaoService } from './cotacao.service';
import { Observable } from 'rxjs';

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
  results:Observable<any>
  cotacaoCompra:number
  cotacaoVenda:number
  dataHoraCotacao:Date

  constructor(private cotacaoService: CotacaoService){}

  CotacaoMoeda(): void{
    this.cotacaoService.CotacaoM(this.moeda,this.formattedDate1,this.formattedDate2, this.cotacaoCompra,this.cotacaoVenda,this.dataHoraCotacao).subscribe(resp =>{
      this.results=resp;
    })
  }

  CotacaoPut(): void{
    this.cotacaoService.CotacaoMput(this.moeda,this.formattedDate1,this.formattedDate2).subscribe(resp =>{
      this.results=resp;
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
