<template>
  <div>
    <h1>Vue Examples</h1>
    <h3><router-link to="/">Home</router-link></h3>
    <h3>Composition API</h3>
    <ul>
      <li>
        <router-link to="/example02-1">
          interface & ref() & computed() & watch() & watchEffect()
        </router-link>
      </li>
      <li>
        <router-link to="/example02-2">Reactive-02</router-link>
      </li>
      <li>
        <router-link to="/example02-3">reactive()</router-link>
      </li>
      <li>
        <router-link to="/example02-4">shallowRef()</router-link>
      </li>
    </ul>
    <h3>Route With Params</h3>
    <ul>
      <li>
        <router-link to="/example03-1/students/45/homeworks/23">
          useRoute(): students/45/homeworks/23
          <!-- 传参 -->
        </router-link>
      </li>
      <li>
        <router-link to="/example03-1/students/18/homeworks/18">
          useRoute(): students/18/homeworks/18
        </router-link>
      </li>
    </ul>
    <h3>Composition-API</h3>
    <ul>
      <li>
        <router-link to="/example04-1/students/18/homeworks/13">defineProps()</router-link>
      </li>
    </ul>
    <h3>Directives</h3>
    <ul>
      <li>
        <router-link to="/example05-1">template & if & v-bind</router-link>
      </li>
      <li>
        <router-link to="/example05-2">v-bind</router-link>
      </li>
      <li><router-link to="/example05-3">v-for</router-link></li>
    </ul>
    <h3>Component</h3>
    <ul>
      <li><router-link to="/example06-1">Async Component</router-link></li>
      <li><router-link to="/example06-2">keep-alive</router-link></li>
    </ul>
    <!-- <h3>Form Input Bindings</h3>
    <ul>
      <li><router-link to="/example07-1">v-model</router-link></li>
      <li><router-link to="/example07-2">Examples</router-link></li>
    </ul> -->
  </div>
</template>
