<template>
<router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App'
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.icon {
  width: 2em; height: 2em;
  overflow: hidden;
}
</style>
