<script setup lang="ts">
import { ref } from 'vue'
import namelogin from './NameLogin.vue'
import emaillogin from './EmailLogin.vue'
const toggle = ref(false)
</script>
<template>
  <div>
    <h1>Components Dynamic</h1>
    <p>通过component标签:is属性,动态绑定组件</p>

    <h1>keep-alive</h1>
    <p>
      keep-alive标签,支持在组件从DOM移除后缓存组件实例,再次加载时直接使用原实例。即和保存存在原数据。
    </p>
    <button type="button" @click="toggle = !toggle">切换</button>
    <br />
    <keep-alive>
      <component :is="toggle ? namelogin : emaillogin" />
    </keep-alive>
    <br />

    <!-- <keep-alive>
      <namelogin v-if="change" />
      <emaillogin v-if="!change" />
    </keep-alive> -->
    <p>
      需要整合router-view实现基于路由地址的keepalive
      <br />
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" :key="$route.path" />
        </KeepAlive>
      </RouterView>
    </p>
    使用 RouterView 来渲染当前路由对应的组件。
    使用KeepAlive来缓存这个组件,使其在路由切换时保持其状态。 使用动态组件component
    来实际渲染从RouterView 插槽v-slot中获取的组件，并使用路由路径作为缓存的键。 以上不写也可以
  </div>
</template>
