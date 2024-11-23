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

      <!-- Main Content Section -->
      <div class="container mt-4">
        
        
        <div class="row">
          <!-- Article Section -->
          <div class="col-md-8 article-section">
            <h2 class="text-info mt-4">Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</h2>
            
            <img src="../images/tap-pilates1.jpg" alt="Pilates" class="img-fluid mb-3" />
            <p>
              Tập Pilates có thể vẫn còn khá xa lạ với người Việt, nhưng tại các nước phương Tây thì đây chính là phương pháp tập thể dục giúp duy trì vóc dáng, tăng cường ý chí và cải thiện sự linh hoạt, dẻo dai cho người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống. Sau đây hãy cùng tìm hiểu các phương pháp tập luyện này giúp phục hồi chấn thương cột sống như thế nào nhé!
            </p>
            <h5 class="mt-4">Pilates giúp phục hồi chấn thương cột sống nhanh chóng</h5>
            <p>
              Một trong những căn bệnh ngày càng phổ biến, đặc biệt là dân văn phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, nếu điều trị không đúng cách có thể dẫn đến nhiều biến chứng nguy hiểm, bao gồm: Vì điều trị bằng laser không đúng cách hoặc tập yoga không đúng cách có thể khiến bệnh nhân nằm liệt giường.
            </p>
            <img src="../images/tap-piltes.jpg" alt="Pilates Therapy" class="img-fluid mb-3" />
          </div>
  
          <!-- Comment Section -->
          <div class="col-md-4 comment-section">
            <h5 class="comment-header">Bình luận và viết tại đây</h5>
            <div class="mb-3">
              <textarea class="form-control" rows="3" placeholder="Nhập bình luận của bạn"></textarea>
            </div>
            <button class="btn btn-success mb-3">Gửi bình luận</button>
            <h5>Danh sách các bình luận:</h5>
            <ul class="list-unstyled comment-list">
              <li><strong>Bình An:</strong> Bài viết rất hữu ích</li>
              <li><strong>Bình An:</strong> Cảm ơn những chia sẻ bổ ích</li>
            </ul>
          </div>
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
    name: "Lab3Bai4",
  };
  </script>
  
  <style scoped>
  @import "../css/bootstrap.min.css";
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
  @import "../css/style.css";
  
  
  </style>
  