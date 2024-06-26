<template>
  <div>
    <h1>v-if</h1>
    <p v-if="userRef.level && userRef.level >= 4">此内容仅level >=4 可见</p>
    <p v-if="userRef.level && userRef.level < 4">此内容仅level <4 可见</p>
    <p>vue3.0,input组件默认不会被复用了</p>
    <button type="button" v-on:click="changeInput">切换</button>
    <!-- @click -->
    <br />
    <template v-if="userNameLoginRef">
      <input placeholder="Enter your username" />
      <br />
      <input type="password" placeholder="Enter your password" />
    </template>
    <template v-else>
      <input placeholder="Enter your KEY" />
    </template>
    <hr />
    <h1>v-show</h1>
    <button type="button" v-on:click="changeClose">切换</button>
    <!-- <button v-on:click="close = !close">切换</button> -->
    <p v-show="closeRef">此内容仅close为true可见</p>
    <p>
      v-if 和v-show区别:
      v-if:是“真正的”条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。当条件为假时,v-if
      之后的元素及其子元素不会被渲染到 DOM 中。 v-show:只是简单地基于 CSS
      进行切换。无论初始条件是什么，元素始终都会被渲染并保留在 DOM 中。v-show 只是简单地通过切换 CSS
      的 display 属性来控制元素的可见性。初始渲染.v-if 有更高的切换开销
    </p>
  </div>
</template>
<script setup lang="ts">
import type { User } from '@/type'
import { ref } from 'vue'
const userRef = ref<User>({ name: 'syl', level: 5 })
const closeRef = ref(true)
const userNameLoginRef = ref(true)
const changeInput = () => {
  userNameLoginRef.value = !userNameLoginRef.value
}
const changeClose = () => {
  closeRef.value = !closeRef.value
}
</script>
