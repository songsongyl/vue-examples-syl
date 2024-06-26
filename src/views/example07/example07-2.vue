<template>
  <div>
    <p>
      需求:必须同意条款才能选择操作以及提交;必须选择2项才能提交。即,等于2项时未选checkboxes变为不可用状态,已选仍为可用状态；不同意,全部为不可用状态。
    </p>
    <p>
      每一个checkbox的可用状态,由当前是否选中/已选数量/是否同意决定,因此必须动态获取checkbox元素对象本身。
      <br />
      HTML元素通过ref属性绑定数组,将HTML元素存入。
    </p>
    <form>
      <label>
        <input type="checkbox" v-model="agreeR" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) in courses" :key="index">
        <label>
          <input
            type="checkbox"
            ref="checkboxsR"
            v-model="coursesR"
            :value="{ id: c.id }"
            :disabled="checkboxDisabledC(index)" />
          {{ c.name }}
        </label>
      </template>
      <br />
      <button type="button" :disabled="buttonDisabledC">submit</button>
    </form>
    <p>{{ coursesR }}</p>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Course } from '@/type'
import { listCourses } from '@/datasource/Datasource'

const agreeR = ref(false)
const courses = listCourses()
// 模拟曾经选中的数据
const selectedCourses: Course[] = [{ id: 7 }]
// 将所有动态创建的checkbox元素装入响应式数组
const checkboxsR = ref<HTMLInputElement[]>([])
// 模拟总数
const amount = 2
// 将拉取的曾选中数据转为响应式
const coursesR = ref<Course[]>(selectedCourses)

// 每一次改变，均需针对每一个checkbox状态判断
// 每一个checkbox disabled值，由agree/被选数量/当前选择状态，决定
const checkboxDisabledC = computed(
  () => (index: number) =>
    !agreeR.value || (coursesR.value.length >= amount && !checkboxsR.value[index].checked)
)
// 这里逻辑有点没搞懂
// 明白了 选中之后还要可以取消 不能将他禁用
// if (!agreeR.value) return true; // 如果用户没有同意条款，禁用所有复选框
//   const currentCourse = courses.find((c, i) => i === index);
//   return coursesR.value.length >= amount && !coursesR.value.some(c => c.id === currentCourse.id);
// 如果已选课程数量达到要求，且当前课程未被选中，则禁用该复选框
const buttonDisabledC = computed(() => !agreeR.value || coursesR.value.length < amount)
</script>
