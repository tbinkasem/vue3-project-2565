<template>
  <input
    type="text"
    :title="formDisabled"
    class="border-2 rounded-md h-10 px-2"
    :disabled="formDisabled"
  >
</template>
<script>
export default {
  inject: {
    formDisabled: {
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
