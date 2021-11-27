import { ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ILoadingConfig, LoadingConfig } from './loading.config';

@Component({
  selector: 'tools-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit
{
  @Input() show: boolean = false;
  @Input() config: ILoadingConfig = new LoadingConfig();
  @Input() template!: TemplateRef<unknown>;
  private defaultConfig: ILoadingConfig = {
    backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
    backdropBorderRadius: '0px',
    fullScreenBackdrop: false,
    primaryColour: '#ffffff',
    secondaryColour: '#ccc',
  };
  constructor() { }

  ngOnInit(): void
  {
    this.setupConfig();
  }

  private setupConfig(): void
  {
    for (const option in this.defaultConfig)
    {
      if (typeof this.config[option] === 'boolean')
      {
        if (this.config[option] != null)
        {
          continue;
        }

        this.config[option] = this.defaultConfig[option];
      } else
      {
        if (this.config[option] != null)
        {
          continue;
        }

        this.config[option] = this.defaultConfig[option];
      }
    }
  }
}
