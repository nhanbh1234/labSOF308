<template>
    <div class="container mt-4 col-md-6">
      <h1 class="text-center">Thông tin cá nhân</h1>
      <!-- Form nhập thông tin -->
      <form>
        <div class="mb-3">
          <label for="name" class="form-label"><strong>Họ và Tên:</strong></label>
          <input
            v-model="userInfo.name"
            id="name"
            type="text"
            class="form-control"
            placeholder="Nhập họ và tên"
          />
        </div>
        <div class="mb-3">
          <label for="age" class="form-label"><strong>Tuổi:</strong></label>
          <input
            v-model="userInfo.age"
            id="age"
            type="number"
            class="form-control"
            placeholder="Nhập tuổi"
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label"><strong>Email:</strong></label>
          <input
            v-model="userInfo.email"
            id="email"
            type="email"
            class="form-control"
            placeholder="Nhập email"
          />
        </div>
      </form>
  
      <!-- Hiển thị thông tin -->
      <div class="info-display mt-4 p-3 bg-dark text-white rounded">
        <h2>Thông tin đã nhập:</h2>
        <p><strong>Họ và Tên:</strong> {{ userInfo.name }}</p>
        <p><strong>Tuổi:</strong> {{ userInfo.age }}</p>
        <p><strong>Email:</strong> {{ userInfo.email }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  name: "Lab5Bai3",
};
</script>
  
  <script setup>
  import { reactive } from "vue";
  
  // Tạo đối tượng reactive lưu trữ thông tin người dùng
  const userInfo = reactive({
    name: "",
    age: "",
    email: "",
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
  }
  .info-display {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  