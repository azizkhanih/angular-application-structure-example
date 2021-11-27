export interface ILoadingConfig
{
  backdropBorderRadius?: string;
  backdropBackgroundColour?: string;
  fullScreenBackdrop?: boolean;
  primaryColour?: string;
  secondaryColour?: string;
  [key: string]: string | boolean | undefined;
}

export class LoadingConfig implements ILoadingConfig
{
  backdropBorderRadius?: string;
  backdropBackgroundColour?: string;
  fullScreenBackdrop?: boolean;
  primaryColour?: string;
  secondaryColour?: string;
  [key: string]: string | boolean | undefined;

  constructor(config: ILoadingConfig = {})
  {
    this.backdropBorderRadius = config.backdropBorderRadius;
    this.backdropBackgroundColour = config.backdropBackgroundColour;
    this.fullScreenBackdrop = config.fullScreenBackdrop;
    this.primaryColour = config.primaryColour;
    this.secondaryColour = config.secondaryColour;
  }
}
