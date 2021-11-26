import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AccountService } from '../../../account/shared/services';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit
{
  constructor(private accountService: AccountService) { }

  ngOnInit(): void
  {
  }
}
