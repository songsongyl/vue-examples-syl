<template>
  <div>
    <!-- <div class="modal" @click="$emit('emitClose', courseR.name)"> -->
    <div class="modal" @click="close">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <h3>Modal title</h3>
        </div>
        <div class="modal-content">
          <p>
            父元素传入的数据可以在子元素渲染显示，但不能在子元素直接改变，即不能直接双向绑定传入的数据(单向数据流)。
            <br />
            通过vue3.2提供defineEmits()函数，暴露事件。
            <br />
            从props传入的对象可以直接渲染：
            <b>
              {{ course.name }}
            </b>
          </p>
          <p>
            双向绑定时，需要取出props中数据，填充至新创建的响应式对象(类似getter出来再setter进去)
            <input v-model="courseR.name" />
          </p>
          <p>
            可通过vue的事件修饰符阻止事件的传播等。
            <br />
            <a href="https://v3.cn.vuejs.org/guide/events.html#事件修饰符" target="_blank">
              事件修饰符
            </a>
          </p>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="submit">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Course } from '@/type'
import { ref } from 'vue'
const props = defineProps<{ course: Course }>()
// 双向绑定名称，用于传回给父元素
const courseR = ref<Course>({ name: props.course?.name })
// 声明对外暴露事件，属性均为函数
const emit = defineEmits<{
  (e: 'emitSubmit', data: string): void
  (e: 'emitClose'): void
}>()
// 声明执行函数，绑定组件中的操作事件
// 声明2个事件，及传递的参数
const submit = () => emit('emitSubmit', courseR.value.name ?? '')
const close = () => emit('emitClose')
</script>
<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
}
/* 模态框容器中的对话框，实际显示操作的部分。显式声明宽度，基于margin自动居中 */
.modal .modal-dialog {
  width: 450px;
  margin: auto;
  background: white;
  top: 30px;
  position: relative;
  /* 相对也可以 */
  border-radius: 5px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* 加条下线，作为分割线 */
.modal .modal-header {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}

/*改变文字大小*/
.modal .modal-dialog .modal-content {
  padding: 15px 15px 30px 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal .modal-dialog .modal-footer {
  text-align: right;
  padding: 15px;
}
</style>
