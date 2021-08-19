import { Ref } from 'vue';
import { HCaptchaInstance } from '@shubhamranjan/hcaptcha/dist/HCaptchaInstance'
export interface IhCaptchaComposition {
    isLoaded: Ref<boolean>
    instance: Ref<HCaptchaInstance | undefined>
    executehcaptcha: () => Promise<void>
    hcaptchaLoaded: () => Promise<boolean>
    processhcaptcha: () => Promise<string>
  }
  