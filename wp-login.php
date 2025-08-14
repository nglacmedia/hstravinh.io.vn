<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <title>Đăng nhập</title>
  <style>
    body {
      background: #f1f1f1;
      font-family: Arial, sans-serif;
    }
    .login-container {
      width: 320px;
      margin: 100px auto;
      padding: 25px;
      background: white;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .logo {
      text-align: center;
      margin-bottom: 20px;
    }
    .logo img {
      width: 84px;
      height: 84px;
    }
    form label {
      display: block;
      margin: 10px 0 5px;
      color: #333;
    }
    form input[type="text"],
    form input[type="password"] {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    form input[type="submit"] {
      width: 100%;
      margin-top: 15px;
      padding: 8px;
      background: #0073aa;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
    form input[type="submit"]:hover {
      background: #005a8c;
    }
    .links {
      margin-top: 15px;
      text-align: center;
      font-size: 0.9em;
    }
    .links a {
      color: #0073aa;
      text-decoration: none;
    }
    .links a:hover {
      color: #005a8c;
    }
  </style>
</head>
<body>
  <div class="login-container">
    <div class="logo">
      <!-- Thay logo bằng logo của bạn hoặc để trống -->
      <img src="logo-placeholder.png" alt="Logo">
    </div>
    <form action="/wp-login.php" method="post">
      <label for="user_login">Tên người dùng hoặc Email</label>
      <input type="text" name="log" id="user_login" required>

      <label for="user_pass">Mật khẩu</label>
      <input type="password" name="pwd" id="user_pass" required>

      <input type="submit" value="Đăng nhập">

      <div class="links">
        <a href="/wp-login.php?action=lostpassword">Quên mật khẩu?</a>
      </div>
    </form>
  </div>
</body>
</html>
