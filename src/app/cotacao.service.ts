import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CotacaoService {

  constructor(private http: HttpClient) { }

  CotacaoM(moeda,formattedDate1,formattedDate2: string, cotacaoCompra,cotacaoVenda:number, dataHoraCotacao:Date): Observable<any>{

    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=${moeda},dataInicial=${formattedDate1},dataFinalCotacao=${formattedDate2})?@moeda=${moeda}&@dataInicial=${formattedDate1}&@dataFinalCotacao=${formattedDate2}&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

    return this.http.get<any>(url)
    .pipe(
      tap((resp:any)=> cotacaoCompra = resp.cotacaoCompra),
      map((resp:any)=> resp.cotacaoVenda),
      map((resp:any)=> resp.dataHoraCotacao)
    );
  }

  CotacaoMput(moeda,formattedDate1,formattedDate2: string): Observable<any>{

    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=${moeda},dataInicial=${formattedDate1},dataFinalCotacao=${formattedDate2})?@moeda=${moeda}&@dataInicial=${formattedDate1}&@dataFinalCotacao=${formattedDate2}&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao.`;

    return this.http.put<any>(url, moeda);
  }

}