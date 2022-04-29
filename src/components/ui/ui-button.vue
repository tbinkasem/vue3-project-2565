<template>
  <button
    type="button"
    class="disabled:bg-gray-200  h-10 w-30 bg-blue-600 text-white rounded-md flex gap-2 justify-center items-center"
    :title="text"
    :disabled="formDisabled"
  >
    <slot name="icon">
      <span v-if="icon" class="icon">{{ icon }}</span>
    </slot>
    <slot>
      <b>Somsak</b>
    </slot>
  </button>
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
    text: {
      type: String,
      default: 'Button Text',
      // required: false,
    },
    icon: {
      type: String,
    },
  },
  data() {
    return {
      // text: 'TEST',
    }
  },
}
</script>
