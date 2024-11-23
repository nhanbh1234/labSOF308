<template>
    <div class="container mt-5">
      <h3 class="text-center">Nhập tháng để biết mùa tương ứng</h3>
      <div class="form-group mt-3">
        <label for="monthInput"><strong>Nhập tháng:</strong></label>
        <input
          id="monthInput"
          type="number"
          v-model.number="month"
          class="form-control"
          placeholder="Nhập tháng (1-12)"
        />
      </div>
      <div class="result mt-4">
        <p v-if="month < 1 || month > 12" class="text-danger">
          Vui lòng nhập tháng từ 1 đến 12!
        </p>
        <p v-else-if="month >= 1 && month <= 3" class="text-success">
          Mùa Xuân 🌸
        </p>
        <p v-else-if="month >= 4 && month <= 6" class="text-success">
          Mùa Hè 🌞
        </p>
        <p v-else-if="month >= 7 && month <= 9" class="text-success">
          Mùa Thu 🍂
        </p>
        <p v-else-if="month >= 10 && month <= 12" class="text-success">
          Mùa Đông ❄️
        </p>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "Lab6Bai2",
  };
  </script>
  <script setup>
  import { ref } from "vue";
  
  // Biến reactive để lưu tháng nhập vào
  const month = ref(1);
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
    margin: auto;
    font-family: Arial, sans-serif;
  }
  .text-danger {
    font-size: 1.2rem;
  }
  .text-success {
    font-size: 1.2rem;
  }
  </style>
  