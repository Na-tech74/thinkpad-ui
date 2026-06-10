const menuItems = [
    { href: "./index.html",    text: "Trang chủ" },
    { href: "./products.html", text: "Sản phẩm" },
    { href: "./about.html",    text: "Giới thiệu" },
    { href: "./contact.html",  text: "Liên hệ" }
];

//=======categories======
const categorise = [
  {
    title: "ThinkPad X1",
    content: "Cao cấp, siêu nhẹ, cho doanh nhân.",
    image: "./assets/image/cate.jpg"
  },
  {
    title: "ThinkPad T Series",
    content: "Văn phòng, lập trình, pin bền.",
    image: "./assets/image/cate.jpg"
  },
  {
    title: "ThinkPad P Series",
    content: "Workstation cho đồ họa và kỹ thuật.",
    image: "./assets/image/cate.jpg"
  },
  {
    title: "ThinkPad E Series",
    content: "Giá tốt cho sinh viên và văn phòng.",
    image: "./assets/image/cate.jpg"
  }
];
// ===== CAROUSEL =====
const carouselData = [
    {
        image: "./assets/image/carousel1.jpg",
        title: "ThinkPad X1 Carbon Gen 12",
        subtitle: "Siêu nhẹ · Bền bỉ · Hiệu năng đỉnh cao",
        active: true
    },
    {
        image: "./assets/image/carousel2.jpg",
        title: "ThinkPad T Series 2025",
        subtitle: "Ổn định · Chuyên nghiệp · Giá tốt",
        active: false
    },
    {
        image: "./assets/image/carousel3.jpg",
        title: "ThinkPad P Series Workstation",
        subtitle: "Đồ họa mạnh · Chuẩn kỹ sư · Hiệu năng workstation",
        active: false
    }
];

// ===== SẢN PHẨM YÊU THÍCH =====
const featuredProducts = [
    {
        image: "./assets/image/cate.jpg",
        name: "ThinkPad X1 Carbon",
        specs: "Intel Core Ultra 7 · 32GB RAM · 1TB SSD",
        price: "39.990.000₫",
        id: "x1-carbon-gen12"
    },
    {
        image: "./assets/image/cate.jpg",
        name: "ThinkPad T14s Gen 5",
        specs: "AMD Ryzen 7 · 16GB RAM · 512GB SSD",
        price: "28.500.000₫",
        id: "t14s-gen5"
    },
    {
        image: "./assets/image/cate.jpg",
        name: "ThinkPad E16 Gen 2",
        specs: "Intel Core i7 · 16GB RAM · 512GB SSD",
        price: "22.990.000₫",
        id: "e16-gen2"
    },
    {
        image: "./assets/image/cate.jpg",
        name: "ThinkPad P16s Gen 3",
        specs: "AMD Ryzen 9 · 32GB RAM · 1TB SSD",
        price: "45.000.000₫",
        id: "p16s-gen3"
    }
];

// ===== FOOTER =====
const footerData = {
    brand: {
        name: 'ThinkPad',
        suffix: 'Shop',
        desc: 'Chuyên cung cấp các dòng ThinkPad chính hãng với chất lượng cao, bảo hành uy tín và dịch vụ hỗ trợ tận tâm.',
        socials: [
            { icon: 'bi-facebook', href: '#' },
            { icon: 'bi-youtube', href: '#' },
            { icon: 'bi-instagram', href: '#' },
            { icon: 'bi-github', href: '#' }
        ]
    },
    navigation: {
        title: 'Điều hướng',
        links: [
            { href: './index.html', text: 'Trang chủ' },
            { href: './products.html', text: 'Sản phẩm' },
            { href: './about.html', text: 'Giới thiệu' },
            { href: './contact.html', text: 'Liên hệ' }
        ]
    },
    support: {
        title: 'Hỗ trợ khách hàng',
        links: [
            { href: '#', text: 'Chính sách bảo hành' },
            { href: '#', text: 'Đổi trả sản phẩm' },
            { href: '#', text: 'Hướng dẫn mua hàng' },
            { href: '#', text: 'Câu hỏi thường gặp' }
        ]
    },
    contact: {
        title: 'Liên hệ',
        items: [
            { icon: 'bi-geo-alt-fill', text: 'TP. Hồ Chí Minh, Việt Nam' },
            { icon: 'bi-telephone-fill', text: '0123 456 789' },
            { icon: 'bi-envelope-fill', text: 'support@thinkpadshop.com' }
        ]
    },
    copyright: '© 2026 ThinkPad Shop. Design by Nam Nguyễn.',
    builtWith: 'Built with Bootstrap 5'
};

// ===== PRODUCTS PAGE =====
const productsPageData = {
    title: 'Sản phẩm',
    subtitle: 'Khám phá bộ sưu tập ThinkPad chính hãng',
    filters: ['Tất cả', 'X1 Series', 'T Series', 'P Series', 'E Series'],
    products: [
        { id: 'x1-carbon-gen12', series: 'X1 Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad X1 Carbon Gen 12', specs: 'Intel Core Ultra 7 · 32GB · 1TB SSD', price: '39.990.000₫', oldPrice: '45.000.000₫', badge: 'Bán chạy', desc: 'ThinkPad X1 Carbon Gen 12 là dòng laptop siêu nhẹ dành cho doanh nhân với khung carbon bền bỉ, hiệu năng Intel Core Ultra vượt trội.' },
        { id: 'x1-nano-gen4', series: 'X1 Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad X1 Nano Gen 4', specs: 'Intel Core i7 · 16GB · 512GB SSD', price: '32.990.000₫', oldPrice: '36.000.000₫', badge: '-8%', desc: 'ThinkPad X1 Nano Gen 4 siêu nhẹ chỉ dưới 1kg, phù hợp cho di chuyển liên tục.' },
        { id: 't14s-gen5', series: 'T Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad T14s Gen 5', specs: 'AMD Ryzen 7 · 16GB · 512GB SSD', price: '28.500.000₫', oldPrice: '32.000.000₫', badge: '-11%', desc: 'ThinkPad T14s Gen 5 với AMD Ryzen 7 mạnh mẽ, pin bền bỉ cho cả ngày làm việc.' },
        { id: 't16-gen3', series: 'T Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad T16 Gen 3', specs: 'Intel Core i7 · 16GB · 512GB SSD', price: '26.990.000₫', oldPrice: '29.990.000₫', badge: '-10%', desc: 'Màn hình 16 inch rộng rãi, ThinkPad T16 Gen 3 là lựa chọn lý tưởng cho văn phòng.' },
        { id: 'p16s-gen3', series: 'P Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad P16s Gen 3', specs: 'AMD Ryzen 9 · 32GB · 1TB SSD', price: '45.000.000₫', oldPrice: '49.000.000₫', badge: 'Mới', desc: 'Workstation di động với AMD Ryzen 9, đồ họa mạnh mẽ cho dân kỹ thuật và thiết kế.' },
        { id: 'p1-gen7', series: 'P Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad P1 Gen 7', specs: 'Intel Core i9 · 64GB · 2TB SSD', price: '62.000.000₫', oldPrice: '68.000.000₫', badge: '-9%', desc: 'ThinkPad P1 Gen 7 workstation cao cấp nhất với Intel Core i9 và 64GB RAM.' },
        { id: 'e16-gen2', series: 'E Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad E16 Gen 2', specs: 'Intel Core i7 · 16GB · 512GB SSD', price: '22.990.000₫', oldPrice: '25.990.000₫', badge: '-12%', desc: 'ThinkPad E16 Gen 2 giá tốt, cấu hình mạnh cho sinh viên và văn phòng.' },
        { id: 'e14-gen6', series: 'E Series', image: './assets/image/cate.jpg', images: ['./assets/image/cate.jpg', './assets/image/cate.jpg'], name: 'ThinkPad E14 Gen 6', specs: 'Intel Core i5 · 8GB · 256GB SSD', price: '16.990.000₫', oldPrice: '18.990.000₫', badge: '-11%', desc: 'ThinkPad E14 Gen 6 nhỏ gọn, giá rẻ nhất dòng ThinkPad, phù hợp học tập.' }
    ]
};

// ===== ABOUT PAGE =====
const aboutPageData = {
    title: 'Về ThinkPad Shop',
    subtitle: 'Đam mê công nghệ, đồng hành cùng doanh nhân',
    intro: {
        heading: 'Câu chuyện của chúng tôi',
        paragraphs: [
            'ThinkPad Shop là cửa hàng chuyên cung cấp các dòng laptop ThinkPad chính hãng tại Việt Nam. Với hơn 10 năm kinh nghiệm, chúng tôi tự hào là đối tác tin cậy của hàng nghìn khách hàng cá nhân và doanh nghiệp.',
            'Chúng tôi cam kết mang đến những sản phẩm chất lượng nhất với giá cả cạnh tranh, cùng dịch vụ hậu mãi chu đáo. Đội ngũ nhân viên giàu chuyên môn luôn sẵn sàng tư vấn và hỗ trợ bạn chọn được chiếc laptop phù hợp nhất.'
        ]
    },
    stats: [
        { icon: 'bi-people', number: '10.000+', label: 'Khách hàng' },
        { icon: 'bi-laptop', number: '50+', label: 'Dòng sản phẩm' },
        { icon: 'bi-shield-check', number: '100%', label: 'Chính hãng' },
        { icon: 'bi-star', number: '4.9/5', label: 'Đánh giá' }
    ],
    values: [
        { icon: 'bi-check-circle', title: 'Chất lượng', desc: 'Sản phẩm chính hãng, kiểm định kỹ lưỡng trước khi bàn giao.' },
        { icon: 'bi-heart', title: 'Tận tâm', desc: 'Tư vấn nhiệt tình, hỗ trợ trọn đời cho mọi khách hàng.' },
        { icon: 'bi-rocket-takeoff', title: 'Nhanh chóng', desc: 'Giao hàng toàn quốc trong 24h, miễn phí nội thành.' },
        { icon: 'bi-shield', title: 'Bảo hành', desc: 'Bảo hành chính hãng 12-36 tháng, đổi trả miễn phí 30 ngày.' }
    ]
};

// ===== CONTACT PAGE =====
const contactPageData = {
    title: 'Liên hệ',
    subtitle: 'Chúng tôi luôn sẵn sàng hỗ trợ bạn',
    info: [
        { icon: 'bi-geo-alt-fill', label: 'Địa chỉ', text: 'TP. Hồ Chí Minh, Việt Nam' },
        { icon: 'bi-telephone-fill', label: 'Điện thoại', text: '0123 456 789' },
        { icon: 'bi-envelope-fill', label: 'Email', text: 'support@thinkpadshop.com' },
        { icon: 'bi-clock-fill', label: 'Giờ làm việc', text: 'Thứ 2 - Thứ 7: 8:00 - 18:00' }
    ],
    form: {
        name: 'Họ tên',
        email: 'Email',
        message: 'Nội dung',
        button: 'Gửi tin nhắn'
    }
};

// ===== BANNER 3 CỘT =====
const bannerData = [
    {
        image: "./assets/image/cate.jpg",
        title: "ThinkPad X1",
        desc: "Cao cấp, siêu nhẹ, dành cho doanh nhân."
    },
    {
        image: "./assets/image/cate.jpg",
        title: "ThinkPad T Series",
        desc: "Bền bỉ, hiệu năng ổn định cho công việc."
    },
    {
        image: "./assets/image/cate.jpg",
        title: "ThinkPad P Series",
        desc: "Workstation mạnh mẽ cho đồ họa và kỹ thuật."
    }
];

// ===== LOGIN HELPERS =====
function isLoggedIn() {
    return localStorage.getItem('thinkpad_logged_in') === 'true';
}

function loginUser() {
    localStorage.setItem('thinkpad_logged_in', 'true');
}

function logoutUser() {
    localStorage.removeItem('thinkpad_logged_in');
}

// ===== CART HELPERS =====
function getCart() {
    try { return JSON.parse(localStorage.getItem('thinkpad_cart')) || []; }
    catch { return []; }
}

function saveCart(cart) {
    localStorage.setItem('thinkpad_cart', JSON.stringify(cart));
}

function addToCart(product) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += product.qty || 1;
    } else {
        cart.push({
            id: product.id,
            image: product.image,
            name: product.name,
            specs: product.specs,
            price: typeof product.price === 'string' ? parsePrice(product.price) : product.price,
            qty: product.qty || 1
        });
    }
    saveCart(cart);
    alert('Đã thêm vào giỏ hàng!');
    updateCartBadge();
}

function updateCartBadge() {
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll('.cart-badge').forEach(el => {
        el.textContent = count;
        el.style.display = count > 0 ? 'inline' : 'none';
    });
}

function parsePrice(str) {
    return parseInt(String(str).replace(/[.\s₫]/g, ''));
}

function fmtPrice(num) {
    return Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '₫';
}