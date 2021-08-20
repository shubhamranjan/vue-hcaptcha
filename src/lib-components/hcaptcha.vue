<template>
  <div ref="hcaptchaContainer"></div>
</template>


<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { loadApiEndpointIfNotAlready } from "./hcaptcha-script";

export default /*#__PURE__*/ defineComponent({
  name: "hcaptcha",
  props: {
    sitekey: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: undefined,
    },
    size: {
      type: String,
      default: undefined,
    },
    tabindex: {
      type: String,
      default: undefined,
    },
    language: {
      type: String,
      default: undefined,
    },
    reCaptchaCompat: {
      type: Boolean,
      default: true,
    },
    challengeContainer: {
      type: String,
      default: undefined,
    },
    rqdata: {
      type: String,
      default: undefined,
    },
    sentry: {
      type: Boolean,
      default: true,
    },
    apiEndpoint: {
      type: String,
      default: "https://hcaptcha.com/1/api.js",
    },
    endpoint: {
      type: String,
      default: undefined,
    },
    reportapi: {
      type: String,
      default: undefined,
    },
    assethost: {
      type: String,
      default: undefined,
    },
    imghost: {
      type: String,
      default: undefined,
    },
  },
  emits: [
    "error",
    "rendered",
    "executed",
    "reset",
    "verify",
    "expired",
    "challengeExpired",
    "opened",
    "closed",
  ],
  setup(props, { emit }) {
    let widgetId: string | null = null;
    let hcaptcha: any | null = null;
    let hcaptchaContainer: any | null = ref(null);

    onMounted(async () => {
      await loadApiEndpointIfNotAlready(props);
      onApiLoaded();
    });

    onUnmounted(() => {
      if (widgetId && hcaptcha) {
        hcaptcha.reset(widgetId);
        hcaptcha.remove(widgetId);
      }
    });

    function onApiLoaded() {
      hcaptcha = window.hcaptcha;
      const opt: { [key: string]: any } = {
        sitekey: props.sitekey,
        theme: props.theme,
        size: props.size,
        tabindex: props.tabindex,
        callback: onVerify,
        "expired-callback": onExpired,
        "chalexpired-callback": onChallengeExpired,
        "error-callback": onError,
        "open-callback": onOpen,
        "close-callback": onClose,
      };
      if (props.challengeContainer) {
        opt["challenge-container"] = props.challengeContainer;
      }
      widgetId = hcaptcha.render(hcaptchaContainer.value, opt);
      if (props.rqdata) {
        hcaptcha.setData(widgetId, { rqdata: props.rqdata });
      }
      onRendered();
    }

    function execute() {
      hcaptcha.execute(widgetId);
      onExecuted();
    }

    function reset() {
      if (widgetId) {
        hcaptcha.reset(widgetId);
        onReset();
      } else {
        emit(
          "error",
          "Element is not rendered yet and thus cannot reset it. Wait for `rendered` event to safely call reset."
        );
      }
    }

    function onRendered() {
      emit("rendered");
    }

    function onExecuted() {
      emit("executed");
    }

    function onReset() {
      emit("reset");
    }

    function onError(e: any) {
      emit("error", e);
      reset();
    }

    function onVerify() {
      const token = hcaptcha.getResponse(widgetId);
      const eKey = hcaptcha.getRespKey(widgetId);
      emit("verify", token, eKey);
    }

    function onExpired() {
      emit("expired");
    }

    function onChallengeExpired() {
      emit("challengeExpired");
    }

    function onOpen() {
      emit("opened");
    }

    function onClose() {
      emit("closed");
    }

    return {
      widgetId,
      hcaptcha,
      hcaptchaContainer,
      onApiLoaded,
      execute,
      reset,
      onRendered,
      onExecuted,
      onReset,
      onError,
      onVerify,
      onExpired,
      onChallengeExpired,
      onOpen,
      onClose,
    };
  },
});
</script>


