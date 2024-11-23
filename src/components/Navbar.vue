<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Menu</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- Lab 1 Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="lab1Dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 1
            </a>
            <ul class="dropdown-menu" aria-labelledby="lab1Dropdown">
              <li><a class="dropdown-item" href="/bai1">bài 1</a></li>
              <li><a class="dropdown-item" href="/bai2">bài 2</a></li>
              <li><a class="dropdown-item" href="/bai3">bài 3</a></li>
              <li><a class="dropdown-item" href="/bai4">bài 4</a></li>
            </ul>
          </li>

          <!-- Lab 2 Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="lab2Dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 2
            </a>
            <ul class="dropdown-menu" aria-labelledby="lab2Dropdown">
              <li><a class="dropdown-item" href="/lab2bai1">bài 1</a></li>
              <li><a class="dropdown-item" href="/lab2bai2">bài 2</a></li>
              <li><a class="dropdown-item" href="/lab2bai3">bài 3</a></li>
              <li><a class="dropdown-item" href="/lab2bai4">bài 4</a></li>
            </ul>
          </li>

          <!-- Lab 3 Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="lab3Dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 3
            </a>
            <ul class="dropdown-menu" aria-labelledby="lab3Dropdown">
              <li><a class="dropdown-item" href="/lab3bai1">bài 1</a></li>
              <li><a class="dropdown-item" href="/lab3bai2">bài 2</a></li>
              <li><a class="dropdown-item" href="/lab3bai3">bài 3</a></li>
              <li><a class="dropdown-item" href="/lab3bai4">bài 4</a></li>
            </ul>
          </li>

          <!-- Lab 5 Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="lab5Dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 5
            </a>
            <ul class="dropdown-menu" aria-labelledby="lab5Dropdown">
              <li><a class="dropdown-item" href="/lab5bai1">bài 1</a></li>
              <li><a class="dropdown-item" href="/lab5bai2">bài 2</a></li>
              <li><a class="dropdown-item" href="/lab5bai3">bài 3</a></li>
            </ul>
          </li>

          <!-- Lab 6 Dropdown -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="lab6Dropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Lab 6
            </a>
            <ul class="dropdown-menu" aria-labelledby="lab6Dropdown">
              <li><a class="dropdown-item" href="/lab6bai1">bài 1</a></li>
              <li><a class="dropdown-item" href="/lab6bai2">bài 2</a></li>
              <li><a class="dropdown-item" href="/lab6bai4">bài 4</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
/* You can add custom styles here */
</style>
