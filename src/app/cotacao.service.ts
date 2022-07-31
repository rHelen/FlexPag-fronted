import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CotacaoService {

  constructor(private http: HttpClient) { }

  CotacaoM(moeda,formattedDate1,formattedDate2: string): Observable<any>{
    const uri = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo';


    const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaPeriodo(moeda=${moeda},dataInicial=${formattedDate1},dataFinalCotacao=${formattedDate2})?@moeda=${moeda}&@dataInicial=${formattedDate1}&@dataFinalCotacao=${formattedDate2}&$top=1000&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao.`;

    return this.http.get<any>(url);
  }

}