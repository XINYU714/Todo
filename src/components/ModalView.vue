<template>
  <div class="w-full fixed top-0 right-0 bottom-0 left-0 z-50" :class="!isShow && 'hidden'">
    <div class="bg-b-1/50 absolute top-0 left-0 right-0 bottom-0"></div>
    <div class="modal-container h-full text-center px-20px lg:px-60px leading-[100vh]">
      <div class="modal-content inline-block align-middle relative rounded text-b-1 mx-auto leading-none">
        <div> {{ msg }}</div>
        <!-- @close="closeModal" -->
        <!-- @click="$emit('close')" -->
        <button class="close-btn absolute right-0 top-0 w-[40px] h-[40px] cursor-pointer" >
          X
        </button>
      </div>
    </div>


  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
  },
  isShow: {
    type: Boolean,
  }
})
</script>

<style lang="scss" scoped>

</style>