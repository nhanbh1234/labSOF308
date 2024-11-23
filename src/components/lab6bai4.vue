<template>
    <div class="container mt-5">
      <!-- Form Thêm/Chỉnh sửa học sinh -->
      <form @submit.prevent="submitForm" class="col-sm-6 mx-auto mb-4">
        <h3 class="text-center">{{ isEditing ? "Chỉnh sửa học sinh" : "Thêm học sinh" }}</h3>
        <div class="mb-3">
          <label for="name"><strong>Họ và Tên:</strong></label>
          <input
            id="name"
            type="text"
            class="form-control"
            v-model="student.name"
            placeholder="Nhập họ và tên"
            required
          />
        </div>
        <div class="mb-3">
          <label for="score"><strong>Điểm:</strong></label>
          <input
            id="score"
            type="number"
            class="form-control"
            v-model="student.score"
            placeholder="Nhập điểm (0-10)"
            min="0"
            max="10"
            required
          />
        </div>
        <div class="mb-3">
          <label for="dob"><strong>Ngày sinh:</strong></label>
          <input
            id="dob"
            type="date"
            class="form-control"
            v-model="student.dob"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </button>
      </form>
  
      <!-- Danh sách học sinh -->
      <h3 class="text-center">Danh sách học sinh</h3>
      <table class="table table-hover mt-3">
        <thead>
          <tr>
            <th>Họ và Tên</th>
            <th>Điểm</th>
            <th>Ngày sinh</th>
            <th colspan="2" class="text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(stu, index) in students" :key="index">
            <td>{{ stu.name }}</td>
            <td>{{ stu.score }}</td>
            <td>{{ stu.dob }}</td>
            <td class="text-center">
              <button class="btn btn-warning btn-sm" @click="editStudent(index)">
                Sửa
              </button>
            </td>
            <td class="text-center">
              <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

<script>
export default {
  name: "Lab6Bai4",
};
</script>
  
  <script setup>
  import { ref } from "vue";
  
  // Danh sách học sinh
  const students = ref([
    { name: "Nguyễn Chí Hùng", score: 8, dob: "2006-01-01" },
    { name: "Phạm Thị Lan", score: 9, dob: "2006-05-15" },
  ]);
  
  // Trạng thái reactive
  const student = ref({ name: "", score: null, dob: "" }); // Dữ liệu học sinh nhập vào
  const isEditing = ref(false); // Trạng thái sửa
  const editingIndex = ref(null); // Chỉ mục học sinh đang chỉnh sửa
  
  // Hàm xử lý submit
  function submitForm() {
    if (isEditing.value) {
      // Cập nhật thông tin học sinh
      students.value[editingIndex.value] = { ...student.value };
      isEditing.value = false;
      editingIndex.value = null;
    } else {
      // Thêm học sinh mới
      students.value.push({ ...student.value });
    }
    resetForm(); // Reset form sau khi thêm/sửa
  }
  
  // Hàm chỉnh sửa học sinh
  function editStudent(index) {
    student.value = { ...students.value[index] }; // Sao chép dữ liệu học sinh
    isEditing.value = true;
    editingIndex.value = index;
  }
  
  // Hàm xóa học sinh
  function deleteStudent(index) {
    students.value.splice(index, 1); // Xóa học sinh tại chỉ mục index
  }
  
  // Hàm reset form
  function resetForm() {
    student.value = { name: "", score: null, dob: "" };
  }
  </script>
  
  <style scoped>
  .container {
    font-family: Arial, sans-serif;
    max-width: 800px;
  }
  h3 {
    font-weight: bold;
  }
  .table th,
  .table td {
    vertical-align: middle;
  }
  </style>
  