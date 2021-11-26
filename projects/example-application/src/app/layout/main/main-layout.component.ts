import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-main',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainLayoutComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
  }

}
