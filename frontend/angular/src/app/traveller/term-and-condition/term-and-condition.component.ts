import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NbDialogRef } from '@nebular/theme'

@Component({
  selector: 'app-term-and-condition',
  templateUrl: './term-and-condition.component.html',
  styleUrls: ['./term-and-condition.component.scss'],
})
export class TermAndConditionComponent implements OnInit {
  public readAll = false

  constructor(private router: Router, protected dialogRef: NbDialogRef<string>) {}

  ngOnInit(): void {}

  onScroll(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.readAll = true
    }
  }

  accept() {
    if (this.readAll) {
      this.dialogRef.close()
      this.router.navigateByUrl('/transaction')
    }
  }
}
