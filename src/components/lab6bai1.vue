<template>
    <div class="container mt-4">
      <h1 class="text-center">Xếp loại học sinh</h1>
      <div class="form-group">
        <label for="score"><strong>Nhập điểm trung bình:</strong></label>
        <input
          v-model.number="averageScore"
          id="score"
          type="number"
          class="form-control"
          placeholder="Nhập điểm trung bình"
          min="0"
          max="10"
        />
      </div>
      <div v-if="classification" class="alert mt-3 alert-info">
        <h3>Kết quả:</h3>
        <p><strong>Xếp loại:</strong> {{ classification }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  name: "Lab6Bai1",
};
</script>
  
  <script setup>
  import { ref, computed } from "vue";
  
  // Biến lưu trữ điểm trung bình
  const averageScore = ref(0);
  
  // Tính toán xếp loại dựa trên điểm trung bình
  const classification = computed(() => {
    if (averageScore.value < 5.0) {
      return "Yếu";
    } else if (averageScore.value < 6.5) {
      return "Trung bình";
    } else if (averageScore.value < 8.0) {
      return "Khá";
    } else if (averageScore.value < 9.0) {
      return "Giỏi";
    } else {
      return "Xuất sắc";
    }
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
  }
  .alert {
    font-size: 1.2rem;
  }
  </style>
  