import { Ref } from 'vue';
import { HCaptchaInstance } from '../../../hcaptcha/src'
export interface IhCaptchaComposition {
    isLoaded: Ref<boolean>
    instance: Ref<HCaptchaInstance | undefined>
    executehcaptcha: (action: string) => Promise<string>
    hcaptchaLoaded: () => Promise<boolean>
  }
  