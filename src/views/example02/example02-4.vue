<template>
  <div>
    <h1>shallowRef()</h1>
    <p>
      shallowRef()函数属于`浅`响应式。即,更新响应式对象的引用时为响应式,而更新对象属性值则不会响应式更新,与reactive()相反
    </p>
    <p>
      <button @click="updateCourseItemF">更新shallowRef中响应式对象的引用,响应式</button>
      <br />
      <button @click="updateCourseProF">更新shallowRef中响应式对象的属性值,非响应式</button>
      <br />
      {{ courseR?.name }}
      <br />
    </p>
  </div>
</template>
<script setup lang="ts">
import type { Course } from '@/type'
import { shallowRef } from 'vue'

const courseR = shallowRef<Course>()
// 原来空的对象
console.log(courseR)

const course: Course = { id: 10, name: 'Java' }
const updateCourseItemF = () => {
  courseR.value = course
}
const updateCourseProF = () => {
  courseR.value && (courseR.value.name = 'web')
}
</script>
