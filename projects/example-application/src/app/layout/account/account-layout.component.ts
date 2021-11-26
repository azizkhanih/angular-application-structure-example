import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-account',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountLayoutComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
  }
}
