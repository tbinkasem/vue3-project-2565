<template>
  <form>
    <slot />
  </form>
</template>
<script>
import { computed } from 'vue'
export default {
  provide() {
    return {
      disabled: computed(() => {
        if (typeof this.disabled === 'undefined') {
          return this.parentDisabled
        }
        return this.disabled
      }),
    }
  },
  inject: {
    parentDisabled: {
      from: 'disabled',
      default: false,
    },
  },
  props: {
    disabled: {
      type: Boolean,
    },
  },
}
</script>
