<template>
    <div class="p-5 text-center">
      <!-- Hiển thị thông điệp -->
      <p class="mb-4">{{ message }}</p>
      <!-- Nút bấm để thay đổi thông điệp -->
      <button class="btn btn-dark" @click="updateMessage">Thay đổi thông điệp</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "Lab5Bai1",
  };
  </script>
  <script setup>
  
  import { ref } from 'vue';
  
  // Tạo biến message với giá trị mặc định
  const message = ref('Thông điệp ban đầu');
  
  // Hàm cập nhật thông điệp khi bấm nút
  const updateMessage = () => {
    message.value = 'Thông điệp đã được thay đổi!';
  };
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  .p-5 {
    padding: 2rem;
  }
  </style>
  