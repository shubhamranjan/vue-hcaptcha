/**
   * Describes the rendering parameters for the hCaptcha widget.
   * @see https://docs.hcaptcha.com/configuration#hcaptcha-container-configuration
   */
export declare interface IRenderParameters {
    sitekey: string;
    theme?: 'light' | 'dark';
    size?: 'normal' | 'compact';
  }
