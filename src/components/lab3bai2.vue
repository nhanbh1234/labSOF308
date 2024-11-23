<template>
  <div>
    
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../images/logo-energy-pilates.png" alt="Logo" style="width: 150px;" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="lab3bai3.vue"><i class="fas fa-list"></i> Bài viết</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="user.vue"><i class="fas fa-video"></i> Người dùng</a>
            </li>
            
            

          </ul>

          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Việt</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Tiếng Anh</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="../images/banner1.jpg" class="d-block w-100" alt="Slide 1">
            <div class="carousel-caption d-none d-md-block">
                
            </div>
        </div>
        <div class="carousel-item">
            <img src="../images/banner2.jpg" class="d-block w-100" alt="Slide 2">
            <div class="carousel-caption d-none d-md-block">
                
            </div>
        </div>
        <div class="carousel-item">
            <img src="../images/banner3.jpg" class="d-block w-100" alt="Slide 3">
            <div class="carousel-caption d-none d-md-block">
                
            </div>
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
          <h2 class="text-info mb-3">Về tôi</h2>
          <div class="card">
            <img src="../images/avatar.png" class="card-img-top" alt="Avatar" />
            <div class="card-body">
              <h5 class="card-title">Giới thiệu bản thân</h5>
              <p class="card-text">
                TS. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế độc lập <br />
                Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
              </p>
            </div>
          </div>

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

          <h3 class="text-info mt-4">Đọc nhiều</h3>
          <ul class="list-group">
            <li class="list-group-item d-flex align-items-center">
              <img src="../images/corevalue.jpg" class="img-thumbnail me-2" style="width: 50px;" alt="Popular Post 1" />
              <a class="nav-link" href="#">Biết ơn đời, đời sẽ thương ta</a>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img src="../images/sesameoil_300x300.jpg" class="img-thumbnail me-2" style="width: 50px;" alt="Popular Post 2" />
              <a class="nav-link" href="#">10 công dụng bất ngờ từ dầu dừa</a>
            </li>
            <li class="list-group-item d-flex align-items-center">
              <img src="../images/eat-clean.png" class="img-thumbnail me-2" style="width: 50px;" alt="Popular Post 3" />
              <a class="nav-link" href="#">Lợi ích khi ăn rau mỗi ngày</a>
            </li>
          </ul>

        </aside>

        <!-- Blog Section -->
        <section class="col-sm-8">
          <h2 class="section-header mb-3">Blog của tôi</h2>

          <div class="row">
            <!-- Main Blog Post -->
            <div class="col-md-8">
              <div class="card mb-4">
                <img src="../images/tap-pilates1.jpg" class="card-img-top" alt="Blog post" />
                <div class="card-body">
                  <h5 class="card-title">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h5>
                  <p class="card-text">
                    Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, Pilates giúp cơ bắp và các khớp mạnh hơn, kéo giãn hơn...
                  </p>
                  <p><span class="text-muted"><i class="fas fa-comments"></i> 16</span></p>
                  <a href="lab3bai4.vue">
    <button class="btn btn-info text-white">Xem thêm</button>
</a>

                </div>
              </div>
            </div>

            <!-- Related Posts -->
<div class="col-md-4">
  <ul class="list-group">
    <li class="list-group-item d-flex">
      <img src="../images/corevalue.jpg" class="related-img" alt="Blog post" />
      <div class="related-content">
        <a class="nav-link" href="#">Biết ơn đời, đời sẽ thương ta</a>
        <span class="badge bg-secondary"><i class="fas fa-comments"></i> 30</span>
      </div>
    </li>
    <li class="list-group-item d-flex">
      <img src="../images/orange_300x300.jpg" class="related-img" alt="Blog post" />
      <div class="related-content">
        <a class="nav-link" href="#">9 tác dụng tuyệt vời của quả cam</a>
        <span class="badge bg-secondary"><i class="fas fa-comments"></i> 28</span>
      </div>
    </li>
    <li class="list-group-item d-flex">
      <img src="../images/sesameoil_300x300.jpg" class="related-img" alt="Blog post" />
      <div class="related-content">
        <a class="nav-link" href="#">10 công dụng bất ngờ từ dầu dừa</a>
        <span class="badge bg-secondary"><i class="fas fa-comments"></i> 15</span>
      </div>
    </li>
    <li class="list-group-item d-flex">
      <img src="../images/eat-clean.png" class="related-img" alt="Blog post" />
      <div class="related-content">
        <a class="nav-link" href="#">Lợi ích khi ăn rau mỗi ngày</a>
        <span class="badge bg-secondary"><i class="fas fa-comments"></i> 12</span>
      </div>
    </li>
  </ul>
</div>


            <div class="col-md-8">
            </div>
            <h2 class="section-header mb-3 text-info">VIDEO - ĐỪNG BỎ LỠ</h2>
          <div class="row">
            <div class="col-md-6 mb-3">
              <div class="card">
                <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
                <div class="card-body">
                  <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                  <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
                <div class="card-body">
                  <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                  <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
                <div class="card-body">
                  <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                  <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <div class="card">
                <img src="../images/video2.jpg" class="card-img-top" alt="Video 2" />
                <div class="card-body">
                  <h5 class="card-title">Chút tâm tư những ngày cuối năm</h5>
                  <p class="card-text">Guồng quay cuộc sống đầu co với vàng...</p>
                </div>
              </div>
            </div>
          </div>
          <button class="btn btn-info text-white mt-3">Xem thêm</button>

          </div>
        </section>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer mt-4">
      <p>&copy;Copyright by FPT Polytechnic</p>
    </footer>
  </div>
</template>

  
  <script>
  export default {
    name: "Lab3Bai2",
  };

  
  </script>
  
  <style scoped>



@import "../css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
@import '../css/style.css';

  </style>
  