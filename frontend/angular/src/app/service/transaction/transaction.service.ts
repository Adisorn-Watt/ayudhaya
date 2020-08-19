import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Transaction } from 'src/app/domain/transaction/transaction'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  addTransaction(transaction: Transaction): Observable<any> {
    return this.http.post<any>('http://159.65.135.237:8080/api/v1/summary', transaction).pipe(catchError(this.formatErrors))
  }

  private formatErrors(error: any) {
    return throwError(error.error)
  }
}
