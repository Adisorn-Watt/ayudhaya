import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-term-and-condition',
  templateUrl: './term-and-condition.component.html',
  styleUrls: ['./term-and-condition.component.scss'],
})
export class TermAndConditionComponent implements OnInit {
  public readAll = false

  constructor() {}

  ngOnInit(): void {}

  onScroll(event: any): void {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      this.readAll = true
    }
  }
}
