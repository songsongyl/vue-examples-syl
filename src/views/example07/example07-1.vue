<template>
  <div>
    <h1>Form Binding</h1>
    <p>v-model 双向绑定表单输入元素,忽略初始值只认value</p>
    <form action="">
      <input type="text" v-model="userR.name" />
      <br />
      <label>
        <input type="radio" v-model="userR.sex" value="male" />
        男
      </label>
      <label>
        <input type="radio" v-model="userR.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="userR.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="userR.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button>提交</button>
    </form>
    <p>{{ userR }}</p>
    <hr />
    <input type="file" @change="fileChangeF" />
    <br />
    <p>{{ fileR.fileName }} / {{ fileR.fileSize }}</p>
    <br />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { User } from '@/type'
import { listCourses, listTitles } from '@/datasource/Datasource'
const userR = ref<User>({ courses: [] })
const titles = listTitles()
const courses = listCourses()
const fileR = ref({ fileName: '', fileSize: '' })
const fileChangeF = (event: Event) => {
  const element = event.target as HTMLInputElement
  if (!element || !element.files) {
    return
  }
  console.log(event)
  console.log(element)
  // 文件列表中的第一个
  fileR.value.fileName = element.files[0].name
  fileR.value.fileSize = `${(element.files[0].size / 1024 / 1024).toFixed(2)} MB`
}
</script>
