import { load as loadHCaptcha, HCaptchaInstance } from '@shubhamranjan/hcaptcha'
import { App, Ref, ref, inject, InjectionKey } from 'vue'
import { IhCaptchaOptions } from './interface/IhCaptchaOptions'
import { IhCaptchaComposition } from './interface/IhCaptchaComposition'

const VuehCaptchaInjectKey: InjectionKey<IhCaptchaComposition> = Symbol('VuehCaptchaInjectKey')

interface IGlobalConfig {
  loadedWaiters: Array<({resolve: (resolve: boolean) => void, reject: (reject: Error) => void})>
  error: Error | null
}
const globalConfig: IGlobalConfig = {
  loadedWaiters: [],
  error: null
}

export const VuehCaptcha = {
  install (app: App, options: IhCaptchaOptions) : void {
    const isLoaded = ref(false)
    const instance: Ref<HCaptchaInstance | undefined> = ref(undefined)

    app.config.globalProperties.$hcaptchaLoaded = hcaptchaLoaded(isLoaded)

    initializehCaptcha(options).then((wrapper) => {
      isLoaded.value = true
      instance.value = wrapper

      app.config.globalProperties.$executehcaptcha = executehcaptcha(instance)
      app.config.globalProperties.$processhcaptcha = processhcaptcha(instance)
      app.config.globalProperties.$hcaptchaInstance = instance

      globalConfig.loadedWaiters.forEach((v) => v.resolve(true))
    }).catch((error) => {
      globalConfig.error = error
      globalConfig.loadedWaiters.forEach((v) => v.reject(error))
    })

    app.provide(VuehCaptchaInjectKey, {
      instance,
      isLoaded,
      executehcaptcha: executehcaptcha(instance),
      hcaptchaLoaded: hcaptchaLoaded(isLoaded),
      processhcaptcha: processhcaptcha(instance)
    })
  }
}

export function usehCaptcha (): IhCaptchaComposition | undefined {
  return inject(VuehCaptchaInjectKey)
}

async function initializehCaptcha (options: IhCaptchaOptions): Promise<HCaptchaInstance> {
  return await loadHCaptcha(options.siteKey, options.loaderOptions)
}

function hcaptchaLoaded (isLoaded: Ref<boolean>) {
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  return () => new Promise<boolean>((resolve, reject) => {
    if (globalConfig.error !== null) {
      return reject(globalConfig.error)
    }
    if (isLoaded.value) {
      return resolve(true)
    }
    globalConfig.loadedWaiters.push({ resolve, reject })
  })
}

function executehcaptcha (instance: Ref<HCaptchaInstance | undefined>) {
  return async (): Promise<void | undefined> => {
    return await instance.value?.execute()
  }
}

function processhcaptcha (instance: Ref<HCaptchaInstance | undefined>) {
  return async (): Promise<string | undefined> => {
    return await instance.value?.getResponse()
  }
}

