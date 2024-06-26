<template>
  <div>
    <h1>v-for</h1>
    路由链接是模拟的。
    <br />
    JS中for in(ES5)适合遍历对象的属性及属性值，for of(ES6)适合遍历数组中元素
    <ul>
      <li v-for="(c, index) of coursesR" :key="index">
        <router-link :to="`/courses/${c.id}`">{{ c.name }}</router-link>
      </li>
    </ul>
    :key="index" 一个唯一的标识符来跟踪每个节点的变化 :key="c.id" 也可以
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>createTime</th>
          <th>operation</th>
        </tr>
      </thead>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ formatDateC(c.createTime ?? '') }}</td>
        <td>
          <button type="button" @click="removeItemF(index)">remove item</button>
        </td>
      </tr>
    </table>

    <button type="button" @click="addItem">add item</button>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { listCourses } from '@/datasource/Datasource'
// 引入函数
const coursesR = ref(listCourses())
const formatDateC = computed(() => (date: String) => date.replace('T', ''))
const removeItemF = (index: number) => {
  coursesR.value.splice(index, 1)
}
// 绑定 所以之前列表也会跟着改变
const addItem = () => {
  coursesR.value.push({
    id: coursesR.value.length + 1,
    name: 'vue 3.0',
    createTime: new Date().toISOString().substring(0, 16)
  })
}
console.log(new Date())
</script>
