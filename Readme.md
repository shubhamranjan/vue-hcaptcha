# hCaptcha

# Note
~~This library was created to meet urgent needs during a time when the official library did not support vue 3. Now that it does support, this project is deprecated.~~ 

~~Please consider using the [official lib](https://www.npmjs.com/package/@hcaptcha/vue3-hcaptcha) instead~~

This library will be maintained and supported until the official library has proper support for vue3 + TS

<hr>
A hCaptcha library for vuejs 3+.

[![npm](https://img.shields.io/npm/v/@shubhamranjan/vue-hcaptcha.svg)](https://www.npmjs.com/package/@shubhamranjan/vue-hcaptcha)
[![npm type definitions](https://img.shields.io/npm/types/@shubhamranjan/vue-hcaptcha.svg)](https://www.npmjs.com/package/@shubhamranjan/vue-hcaptcha)


## Installation

You can install this library via npm with:

```
npm i @shubhamranjan/vue-hcaptcha --save
```

or via yarn:

```
yarn add @shubhamranjan/vue-hcaptcha
```

Basic Usage
```xml
<template>
  <div id="app">
    <hcaptcha
      sitekey="10000000-ffff-ffff-ffff-000000000001"
      @verify="doSomething"
    />
  </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";
import { hcaptcha } from "@shubhamranjan/vue-hcaptcha";

export default defineComponent({
  name: "ServeDev",
  components: {
    hcaptcha,
  },
  methods: {
    doSomething(response: string, responseKey: string): void {
      console.log(response, responseKey);
    },
  },
});
</script>
```

### Component Details

#### Props

|Name|Values/Type|Required|Default|Description|
|---|---|---|---|---|
|`sitekey`|String|**Yes**|`-`|Your sitekey. Please visit [hCaptcha](https://www.hcaptcha.com) and sign up to get a sitekey.|
|`size`|String (normal, compact, invisible)|No|`normal`|This specifies the "size" of the checkbox. hCaptcha allows you to decide how big the component will appear on render. Defaults to normal.|
|`theme`|String (light, dark)|No|`light`|hCaptcha supports both a light and dark theme. If no theme is set, the API will default to light.|
|`tabindex`|Integer|No|`0`|Set the tabindex of the widget and popup. When appropriate, this can make navigation of your site more intuitive.|
|`language`|String (ISO 639-2 code)|No|`auto`|hCaptcha auto-detects language via the user's browser. This overrides that to set a default UI language.|
|`reCaptchaCompat`|Boolean|No|`true`|Disable drop-in replacement for reCAPTCHA with `false` to prevent hCaptcha from injecting into window.grecaptcha.|
|`challengeContainer`|String|No|`-`|A custom element ID to render the hCaptcha challenge.|
|`rqdata`|String|No|-|See Enterprise docs.|
|`sentry`|Boolean|No|-|See Enterprise docs.|
|`apiEndpoint`|String|No|-|See Enterprise docs.|
|`endpoint`|String|No|-|See Enterprise docs.|
|`reportapi`|String|No|-|See Enterprise docs.|
|`assethost`|String|No|-|See Enterprise docs.|
|`imghost`|String|No|-|See Enterprise docs.|


#### Emitted Events

|Event|Params|Description|
|---|---|---|
|`error`|`err`|When an error occurs. Component will reset immediately after an error.|
|`verify`|`token, eKey`|When challenge is completed. The `token` and an `eKey` are passed along.|
|`expired`|-|When the current token expires.|
|`challengeExpired`|-|When the unfinished challenge expires.|
|`opened`|-|When the challenge is opened.|
|`closed`|-|When the challenge is closed.|
|`reset`|-|When the challenge is reset.|
|`rendered`|-|When the challenge is rendered.|
|`executed`|-|When the challenge is executed.|

### FAQ

#### How can I get a sitekey?

Sign up at [hCaptcha](https://www.hcaptcha.com) to get your sitekey. Check [documentation](https://docs.hcaptcha.com/api#getapikey) for more information.

#### What is hCaptcha?

[hCaptcha](https://www.hcaptcha.com) is a drop-in replacement for reCAPTCHA that earns websites money and helps companies get their data labeled.

#### Are features like bot scores and No-CAPTCHA/passive mode also available?

Yes, in the enterprise version: see [hCaptcha Enterprise (BotStop)](https://www.botstop.com) for details.

### Demo

To run the demo:
1. clone this repo `git clone https://github.com/shubhamranjan/vue-hcaptcha.git`
2. run ```yarn serve``` 
   * it will start the demo app on localhost:8080
   * open your console to see the demo app emitting events
