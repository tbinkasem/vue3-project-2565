<template>
  <Transition name="about1">
    <h1 v-if="show" class="text-3xl">
      About 1
    </h1>
  </Transition>
  <Transition name="about2">
    <h1 v-if="show" class="text-2xl">
      About 2
    </h1>
  </Transition>
  <ui-button @click="show = !show">
    Toggle
  </ui-button>
  <Teleport to="#app-dialog">
    <div>
      ABOUT DIALOG 2
    </div>
  </Teleport>

  <Teleport to="#app-dialog">
    <div>
      ABOUT DIALOG
    </div>
  </Teleport>
</template>
<script>
export default {
  data() {
    return {
      show: true,
    }
  },
}
</script>
<style>
/* we will explain what these classes do next! */
.about1-enter-active,
.about1-leave-active {
  transition: opacity 5s ease;
}
.about2-enter-active,
.about2-leave-active {
  transition: opacity 3s ease;
}
.about1-enter-from,
.about1-leave-to ,
.about2-enter-from,
.about2-leave-to{
  opacity: 0;
}
</style>
