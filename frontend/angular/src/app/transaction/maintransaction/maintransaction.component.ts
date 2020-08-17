import { Component, OnInit } from '@angular/core'
import { CentralStoreService } from 'src/app/service/central-store/central-store.service'

@Component({
  selector: 'app-maintransaction',
  templateUrl: './maintransaction.component.html',
  styleUrls: ['./maintransaction.component.scss'],
})
export class MaintransactionComponent implements OnInit {
  public user: any

  constructor(private centralStore: CentralStoreService) {}

  ngOnInit(): void {
    this.user = this.centralStore.getUser()
  }
}
