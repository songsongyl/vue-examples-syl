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
    <h3>Form Input Bindings</h3>
    <ul>
      <li><router-link to="/example07-1">v-model</router-link></li>
      <li><router-link to="/example07-2">Examples</router-link></li>
    </ul>
    <h3>Global Store</h3>
    <ul>
      <li>
        <router-link to="/example08-1">State</router-link>
      </li>
      <li>
        <router-link to="/example08-2">Actions</router-link>
      </li>
      <li>
        <router-link to="/example08-3">Getters</router-link>
      </li>
      <li>
        <router-link to="/example08-4">Define Custom Global Store</router-link>
      </li>
    </ul>
    <h3>Passing Data to Child Component</h3>
    <ul>
      <li>
        <router-link to="/example09-1">defineProps()</router-link>
      </li>
      <li>
        <router-link to="/example09-4">Passing Functions</router-link>
      </li>
      <li>
        <router-link to="/example09-5">defineModel()</router-link>
      </li>
      <li>
        <router-link to="/example09-3">defineExpose()</router-link>
      </li>
      <li>
        <router-link to="/example09-2">defineEmits()</router-link>
      </li>
    </ul>
    <h3>Network</h3>
    <ul>
      <li>
        <router-link to="/example10-1">VueUse useFetch</router-link>
      </li>
      <li>
        <router-link to="/example11-1">Mock & mriage</router-link>
      </li>
      <li>
        <router-link to="/example11-2">Login</router-link>
      </li>
      <li>
        <router-link to="/example11-3">URL passing json params</router-link>
      </li>
    </ul>
  </div>
</template>
