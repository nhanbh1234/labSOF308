<template>
    <div class="p-5 text-center">
      <!-- Input để người dùng nhập dữ liệu -->
      <input 
        v-model="userInput" 
        placeholder="Nhập dữ liệu vào đây" 
        class="form-control mb-3"
      />
      <!-- Hiển thị giá trị người dùng nhập -->
      <p>Giá trị bạn nhập: <strong>{{ userInput }}</strong></p>
    </div>
  </template>

<script>
export default {
  name: "Lab5Bai2",
};
</script>
  
  <script setup>
  import { ref } from 'vue';
  
  // Tạo biến userInput với giá trị mặc định
  const userInput = ref('');
  </script>
  
  <style scoped>
  .text-center {
    text-align: center;
  }
  .p-5 {
    padding: 2rem;
  }
  .form-control {
    max-width: 400px;
    margin: 0 auto;
  }
  </style>
  