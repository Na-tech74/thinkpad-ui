# 🛍️ UI Thinkpad - E-Commerce Interface

Một giao diện e-commerce hiện đại và responsive được xây dựng với HTML5, CSS3 và JavaScript. Project này cung cấp trải nghiệm mua sắm trực tuyến hoàn chỉnh với các tính năng thiết yếu.

## 📋 Mục Lục
- [✨ Tính Năng](#-tính-năng)
- [🗂️ Cấu Trúc Dự Án](#-cấu-trúc-dự-án)
- [🚀 Bắt Đầu Nhanh](#-bắt-đầu-nhanh)
- [🛠️ Công Nghệ Sử Dụng](#-công-nghệ-sử-dụng)
- [📄 Các Trang Chính](#-các-trang-chính)
- [💡 Hướng Dẫn Sử Dụng](#-hướng-dẫn-sử-dụng)
- [🤝 Đóng Góp](#-đóng-góp)

## ✨ Tính Năng

- ✅ **Giao diện Responsive** - Tương thích với mọi thiết bị (Desktop, Tablet, Mobile)
- ✅ **Xác thực Người Dùng** - Trang Login và Register
- ✅ **Danh Sách Sản Phẩm** - Hiển thị các sản phẩm với thông tin chi tiết
- ✅ **Giỏ Hàng** - Quản lý sản phẩm trong giỏ
- ✅ **Chi Tiết Sản Phẩm** - Xem thông tin chi tiết từng sản phẩm
- ✅ **Thanh Toán** - Giao diện thanh toán an toàn
- ✅ **Đơn Hàng** - Theo dõi lịch sử đơn hàng
- ✅ **Liên Hệ** - Trang liên hệ để khách hàng gửi tin nhắn
- ✅ **Giới Thiệu** - Trang About giới thiệu doanh nghiệp

## 🗂️ Cấu Trúc Dự Án

```
Ui-tihinkpad/
├── index.html          # 🏠 Trang chủ
├── products.html       # 📦 Danh sách sản phẩm
├── detail.html         # 🔍 Chi tiết sản phẩm
├── cart.html           # 🛒 Giỏ hàng
├── payment.html        # 💳 Thanh toán
├── order.html          # 📋 Lịch sử đơn hàng
├── login.html          # 🔐 Đăng nhập
├── register.html       # 📝 Đăng ký
├── contact.html        # 📧 Liên hệ
├── about.html          # ℹ️ Giới thiệu
├── bootstrap/          # 📚 Bootstrap framework
├── assets/             # 🖼️ Hình ảnh và tài nguyên
├── data/               # 📊 Dữ liệu (JSON, v.v.)
└── README.md           # 📖 Tài liệu này
```

## 🚀 Bắt Đầu Nhanh

### Yêu Cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt hay dependency phức tạp

### Cách Sử Dụng

1. **Clone repository**
```bash
git clone https://github.com/Na-tech74/Ui-tihinkpad.git
cd Ui-tihinkpad
```

2. **Mở trong trình duyệt**
   - Cách đơn giản nhất: Nhấp đúp vào file `index.html`
   - Hoặc dùng Live Server: `python -m http.server 8000`
   - Sau đó truy cập: `http://localhost:8000`

3. **Khám phá các trang**
   - Trang chủ: `index.html`
   - Sản phẩm: `products.html`
   - Đăng nhập: `login.html`
   - Giỏ hàng: `cart.html`

## 🛠️ Công Nghệ Sử Dụng

| Công Nghệ | Phần Trăm | Mô Tả |
|-----------|----------|-------|
| **HTML5** | 56% | Cấu trúc và nội dung trang |
| **CSS3** | 34.9% | Kiểu dáng và bố cục responsive |
| **JavaScript** | 9.1% | Tương tác và xử lý sự kiện |
| **Bootstrap** | Framework | Giao diện component sẵn có |

## 📄 Các Trang Chính

### 🏠 Trang Chủ (index.html)
- Banner chính với hình ảnh nổi bật
- Các sản phẩm gợi ý
- Thông tin khuyến mãi

### 📦 Danh Sách Sản Phẩm (products.html)
- Grid hiển thị các sản phẩm
- Bộ lọc theo danh mục
- Sắp xếp theo giá, tên, v.v.

### 🔍 Chi Tiết Sản Phẩm (detail.html)
- Hình ảnh sản phẩm đầy đủ
- Thông tin chi tiết: giá, mô tả, đánh giá
- Nút thêm vào giỏ

### 🛒 Giỏ Hàng (cart.html)
- Danh sách sản phẩm đã chọn
- Điều chỉnh số lượng
- Tính tổng tiền
- Nút thanh toán

### 💳 Thanh Toán (payment.html)
- Form nhập thông tin thanh toán
- Chọn phương thức thanh toán
- Xác nhận đơn hàng

### 📋 Lịch Sử Đơn Hàng (order.html)
- Danh sách các đơn hàng đã mua
- Trạng thái đơn hàng
- Chi tiết từng đơn

### 🔐 Đăng Nhập (login.html)
- Form đăng nhập với email/password
- Liên kết quên mật khẩu
- Chuyển hướng đến đăng ký

### 📝 Đăng Ký (register.html)
- Form tạo tài khoản mới
- Xác thực dữ liệu
- Điều khoản sử dụng

### 📧 Liên Hệ (contact.html)
- Form gửi tin nhắn
- Thông tin liên hệ công ty
- Bản đồ vị trí

### ℹ️ Giới Thiệu (about.html)
- Câu chuyện công ty
- Sứ mệnh và giá trị
- Đội ngũ nhân viên

## 💡 Hướng Dẫn Sử Dụng

### Cho Người Dùng
1. **Duyệt sản phẩm**: Vào trang Products để xem danh sách
2. **Xem chi tiết**: Click vào sản phẩm để xem thông tin chi tiết
3. **Thêm vào giỏ**: Nút "Add to Cart" trên trang chi tiết
4. **Thanh toán**: Vào giỏ hàng và click "Checkout"
5. **Tạo tài khoản**: Click Register để đăng ký tài khoản mới

### Cho Nhà Phát Triển
1. **Tùy chỉnh CSS**: Chỉnh sửa các file CSS trong thư mục `bootstrap/`
2. **Thêm sản phẩm**: Cập nhật file JSON trong thư mục `data/`
3. **JavaScript**: Thêm logic tương tác trong thư mục `assets/`
4. **Hình ảnh**: Thêm hình ảnh sản phẩm vào `assets/`

## 🔧 Tính Năng Tiềm Năng

- [ ] Tích hợp Backend API
- [ ] Hệ thống quản lý người dùng
- [ ] Cơ sở dữ liệu sản phẩm
- [ ] Thanh toán trực tuyến (Stripe, PayPal)
- [ ] Email notification
- [ ] Đánh giá và bình luận sản phẩm
- [ ] Tìm kiếm nâng cao
- [ ] Tối ưu hóa SEO

## 📊 Thống Kê Dự Án

- 📝 **Tệp HTML**: 10 trang
- 🎨 **Thư mục Assets**: Chứa hình ảnh và tài nguyên
- 📚 **Framework**: Bootstrap
- 💾 **Kích thước**: ~21.5 KB
- 🌍 **Trạng thái**: Public Repository

## 🤝 Đóng Góp

Rất hoan nghênh các đóng góp! Để đóng góp:

1. Fork dự án này
2. Tạo branch tính năng (`git checkout -b feature/AmazingFeature`)
3. Commit các thay đổi (`git commit -m 'Add some AmazingFeature'`)
4. Push lên branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Liên Hệ

- **Author**: Na-tech74
- **GitHub**: [Na-tech74](https://github.com/Na-tech74)
- **Repository**: [Ui-tihinkpad](https://github.com/Na-tech74/Ui-tihinkpad)

## 📜 Giấy Phép

Dự án này không có giấy phép cụ thể. Vui lòng liên hệ tác giả để biết thêm thông tin.

---

**⭐ Nếu bạn thích dự án này, vui lòng cho một ⭐ Star để hỗ trợ!**

*Cập nhật lần cuối: 2026-06-10*
