<script setup>
import { ref, reactive, computed } from 'vue';
import ModalView from '../components/ModalView.vue';

let id = 0;
const newTask = ref(''); // 寫標題
const newNote = ref(''); // 寫標題
const isDone = ref(false);
const todoList = ref([
   { id: id++, task: 'No1', note: '12', status: false },
   { id: id++, task: 'No2', note: '2', status: false },
])
const isShow = ref(false);
//
const test = reactive({
    name: 'Test',
    list: [
      'Vue1',
      'Vue2',
      'Vue3'
    ]
});
const publishedBooksMessage = computed(() => {
  return test.list.length > 3 ? 'Yes' : 'No'
})
const filteredTodos = computed(() => {
  return isDone.value
    ? todoList.value.filter((item) => !item.status)
    : todoList.value
});
// 新增任務
function addTodo() {
  if(newTask.value) {
    todoList.value.push({ id: id++, task: newTask.value, note: newNote.value, status: false });
    newTask.value = '';
    newNote.value = '';
    isShow.value = false;
    return;
  }
  isShow.value = true;
}
// 刪除任務
function deleteTodo(ele) {
  todoList.value = todoList.value.filter((item) => item !== ele)
}
// 更新任務
// function updateTood() {

// }
//開關 Modal
function closeModal() {
  isShow.value = false;
}
</script>

<template>
  <main class="container">
    <section class="py-120px">
      <div class="flex flex-col items-center">
      <div class="flex gap-3">
        <input type="text" placeholder="任務" v-model="newTask" class="input">
        <input type="text" placeholder="備註" v-model="newNote" class="input">
        <button class="py-2 px-4 bg-b-1 text-white rounded-sm" @click="addTodo">提交</button>
      </div>
      <ul class="my-40px w-full">
        <li v-for="todo in filteredTodos" :key="todo.id" class="flex gap-2 py-2">
          <input  class="flex-auto w-1/3" :v-model="todo.note" :value="todo.task" >
          <input readonly class="flex-auto w-1/3" :v-model="todo.note" :value="todo.note" >
          <div class="flex gap-2 items-center">
            <!-- <button @click.prevent="updateTodo(todo)" class="py-2 px-4 bg-red-700 text-white rounded-sm">編輯</button> -->
            <button @click.prevent="deleteTodo(todo)" class="py-2 px-4 bg-b-1 text-white rounded-sm">刪除</button>
          </div>
        </li>
      </ul>
      </div>
    </section>
    <section class="py-60px">
        <h1>{{ publishedBooksMessage }}</h1>
    </section>
    <ModalView :msg="'任務要填寫喔'" />
  </main>
</template>
