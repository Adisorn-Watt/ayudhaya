import { Traveller } from '../traveller/traveller'

export class Transaction {
  transactionId: string
  countryId: string
  packageId: string
  user: Traveller
  note: string
  amount: number
  startDate: string
  endDate: string
}
