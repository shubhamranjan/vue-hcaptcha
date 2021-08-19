import { HCaptchaInstance } from '@shubhamranjan/hcaptcha'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $executehcaptcha: () => Promise<void | undefined>
    $processhcaptcha: () => Promise<string | undefined>
    $hcaptchaLoaded: () => Promise<boolean>
    $hcaptchaInstance: HCaptchaInstance
  }
}