import { Component, OnInit, Input } from '@angular/core'
import { PackageService } from 'src/app/service/package/package.service'
import { Package } from 'src/app/domain/package/package'

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss'],
})
export class PackageComponent implements OnInit {
  @Input() packages: Package[]

  constructor() {}

  ngOnInit(): void {}
}
