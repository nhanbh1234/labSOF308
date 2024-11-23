<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../images/logo-energy-pilates.png" alt="Logo" style="width: 150px;" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link" href=""><i class="fas fa-list"></i> Bài viết</a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-video"></i> Video</a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-info-circle"></i> Giới thiệu</a></li>
            <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-calendar-alt"></i> Sự kiện</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="accountDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user"></i> Tài khoản
              </a>
              <ul class="dropdown-menu" aria-labelledby="accountDropdown">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                <li><a class="dropdown-item" href="#">Đăng ký thành viên</a></li>
              </ul>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="#">Tiếng Việt</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Tiếng Anh</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../images/banner1.jpg" class="d-block w-100" alt="Slide 1">
        </div>
        <div class="carousel-item">
          <img src="../images/banner2.jpg" class="d-block w-100" alt="Slide 2">
        </div>
        <div class="carousel-item">
          <img src="../images/banner3.jpg" class="d-block w-100" alt="Slide 3">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </a>
    </div>

    <!-- Main Content with Sidebar -->
    <div class="container mt-4">
      <div class="row">
        <!-- Sidebar -->
        <aside class="col-sm-4">
          <h3 class="text-info mt-4">Chuyên mục</h3>
          <ul class="list-group">
            <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
              <a class="nav-link text-white" href="#">Chế độ tập</a>
              <span class="badge bg-primary rounded-pill">12</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
              <span class="badge bg-primary rounded-pill">15</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
              <span class="badge bg-primary rounded-pill">99</span>
            </li>
          </ul>

          <h3 class="text-info mt-4">Bài viết nổi bật</h3>
        <ul class="featured-posts list-unstyled">
          <li class="featured-post d-flex align-items-center mb-3">
            <img src="../images/eat-clean.png" alt="Rau Mỗi Ngày" class="featured-post-img me-2">
            <div>
              <h6 class="featured-post-title">Lợi ích khi ăn rau mỗi ngày</h6>
              <p class="featured-post-text text-muted">Tiêu thụ rau xanh giúp cải thiện sức khỏe và tăng cường hệ miễn dịch...</p>
            </div>
          </li>
          <li class="featured-post d-flex align-items-center mb-3">
            <img src="../images/orange_300x300.jpg" alt="Tác Dụng Tuyệt Vời Của Quả Cam" class="featured-post-img me-2">
            <div>
              <h6 class="featured-post-title">9 tác dụng tuyệt vời của quả cam</h6>
              <p class="featured-post-text text-muted">Cam chứa hàm lượng cao vitamin C giúp chống lão hóa và tăng sức đề kháng...</p>
            </div>
          </li>
          <li class="featured-post d-flex align-items-center mb-3">
            <img src="../images/sesameoil_300x300.jpg" alt="Dầu Dừa" class="featured-post-img me-2">
            <div>
              <h6 class="featured-post-title">10 công dụng bất ngờ từ dầu dừa</h6>
              <p class="featured-post-text text-muted">Dầu dừa có lợi ích lớn trong chăm sóc da và tóc, đồng thời hỗ trợ sức khỏe tổng thể...</p>
            </div>
          </li>
        </ul>
          
        </aside>

        <!-- Main Blog Posts Section -->
        <section class="col-sm-8">
          <h3 class="text-info">Tất cả bài viết</h3>
          
          <div class="row">
          <div class="col-md-6 mb-3">
            <div class="card">
              <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
              <div class="card-body">
                <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                <p><span class="text-muted"><i class="fas fa-comments"></i> 16</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card">
              <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
              <div class="card-body">
                <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                <p><span class="text-muted"><i class="fas fa-comments"></i> 16</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card">
              <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
              <div class="card-body">
                <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                <p><span class="text-muted"><i class="fas fa-comments"></i> 16</span></p>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card">
              <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
              <div class="card-body">
                <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                <p><span class="text-muted"><i class="fas fa-comments"></i> 16</span></p>
              </div>
            </div>
          </div>
        </div>
        

        

          <!-- Pagination -->
          <nav>
            <ul class="pagination justify-content-center">
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer mt-4">
      <p>&copy; Copyright by FPT Polytechnic</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Lab3Bai3",
  
};
</script>

<style scoped>
@import "../css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
@import '../css/style.css';

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
