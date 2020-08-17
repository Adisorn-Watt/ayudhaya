import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Transaction } from 'src/app/domain/transaction/transaction'

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  /** POST: add a new transaction to the database */
  addTransaction(transaction: Transaction) {
    return this.http.post<Transaction>('http://localhost:8080/api/v1/summary', transaction)
  }
}
