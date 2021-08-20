# hCaptcha
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