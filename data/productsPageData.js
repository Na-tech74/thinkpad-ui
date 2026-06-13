var productsPageData = {
    title: 'Tất cả sản phẩm ThinkPad',
    subtitle: 'Danh sách đầy đủ các model ThinkPad',
    filters: ['Tất cả', 'ThinkPad X1', 'ThinkPad T Series', 'ThinkPad P Series', 'ThinkPad E Series', 'ThinkPad L Series', 'ThinkPad Yoga'],
    products: [
        { id: 'x1-carbon-gen12', name: 'ThinkPad X1 Carbon Gen 12', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core Ultra 7 · 32GB RAM · 1TB SSD', price: '39.990.000₫', oldPrice: '45.990.000₫', badge: 'Bán chạy' },
        { id: 'x1-yoga-gen4', name: 'ThinkPad X1 Yoga Gen 4', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 512GB SSD', price: '34.500.000₫' },
        { id: 'x1-carbon-ultra', name: 'ThinkPad X1 Carbon Ultra', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core Ultra 9 · 64GB RAM · 2TB SSD', price: '59.900.000₫', badge: 'Mới' },
        { id: 'x1-extreme', name: 'ThinkPad X1 Extreme', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core i9 · 32GB RAM · 1TB SSD · RTX 3060', price: '49.990.000₫' },
        { id: 'x1-carbon-gen11', name: 'ThinkPad X1 Carbon Gen 11', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 32GB RAM · 1TB SSD', price: '37.990.000₫' },
        { id: 'x1-nano', name: 'ThinkPad X1 Nano', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 16GB RAM · 512GB SSD', price: '28.990.000₫' },
        { id: 'x1-carbon-lite', name: 'ThinkPad X1 Carbon Lite', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 8GB RAM · 256GB SSD', price: '22.500.000₫' },
        { id: 'x1-studio', name: 'ThinkPad X1 Studio', series: 'ThinkPad X1', image: './assets/image/cate.jpg', specs: 'Intel Core i9 · 64GB RAM · 4TB SSD', price: '79.900.000₫', badge: 'Cao cấp' },

        { id: 't14s-gen5', name: 'ThinkPad T14s Gen 5', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'AMD Ryzen 7 · 16GB RAM · 512GB SSD', price: '28.500.000₫' },
        { id: 't14-gen12', name: 'ThinkPad T14 Gen 12', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 512GB SSD', price: '29.990.000₫' },
        { id: 't15p', name: 'ThinkPad T15p', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 32GB RAM · 1TB SSD', price: '35.990.000₫', badge: 'Khuyến mãi' },
        { id: 't14-amd', name: 'ThinkPad T14 AMD', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'AMD Ryzen 5 · 8GB RAM · 256GB SSD', price: '19.990.000₫' },
        { id: 't16', name: 'ThinkPad T16', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 1TB SSD', price: '33.500.000₫' },
        { id: 't14g2', name: 'ThinkPad T14 Gen 2', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 8GB RAM · 512GB SSD', price: '24.990.000₫' },
        { id: 't15-gen3', name: 'ThinkPad T15 Gen 3', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'Intel Core i9 · 32GB RAM · 2TB SSD', price: '42.000.000₫' },
        { id: 't14s-ultra', name: 'ThinkPad T14s Ultra', series: 'ThinkPad T Series', image: './assets/image/cate.jpg', specs: 'Intel Core Ultra 7 · 32GB RAM · 1TB SSD', price: '39.500.000₫' },

        { id: 'p16s-gen3', name: 'ThinkPad P16s Gen 3', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'AMD Ryzen 9 · 32GB RAM · 1TB SSD', price: '45.000.000₫' },
        { id: 'p1-gen5', name: 'ThinkPad P1 Gen 5', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'Intel Xeon · 64GB RAM · 4TB SSD · RTX A2000', price: '129.990.000₫', badge: 'Workstation' },
        { id: 'p15v', name: 'ThinkPad P15v', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'Intel Core i9 · 32GB RAM · 2TB SSD', price: '69.990.000₫' },
        { id: 'p14s', name: 'ThinkPad P14s', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 1TB SSD', price: '39.990.000₫' },
        { id: 'p16-gen2', name: 'ThinkPad P16 Gen 2', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'Intel Core i9 · 64GB RAM · 2TB SSD · RTX 4000', price: '99.900.000₫' },
        { id: 'p15-gen4', name: 'ThinkPad P15 Gen 4', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'Intel Xeon · 128GB RAM · 8TB SSD', price: '189.000.000₫' },
        { id: 'p16z', name: 'ThinkPad P16z', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'AMD Threadripper · 64GB RAM · 2TB SSD', price: '139.000.000₫' },
        { id: 'p14-gen1', name: 'ThinkPad P14 Gen 1', series: 'ThinkPad P Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 512GB SSD', price: '36.500.000₫' },

        { id: 'e16-gen2', name: 'ThinkPad E16 Gen 2', series: 'ThinkPad E Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 512GB SSD', price: '22.990.000₫' },
        { id: 'e14', name: 'ThinkPad E14', series: 'ThinkPad E Series', image: './assets/image/cate.jpg', specs: 'AMD Ryzen 5 · 8GB RAM · 256GB SSD', price: '15.990.000₫' },
        { id: 'e15-gen3', name: 'ThinkPad E15 Gen 3', series: 'ThinkPad E Series', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 8GB RAM · 512GB SSD', price: '18.500.000₫' },
        { id: 'e14-g4', name: 'ThinkPad E14 Gen 4', series: 'ThinkPad E Series', image: './assets/image/cate.jpg', specs: 'AMD Ryzen 7 · 16GB RAM · 1TB SSD', price: '21.990.000₫' },
        { id: 'e16-lite', name: 'ThinkPad E16 Lite', series: 'ThinkPad E Series', image: './assets/image/cate.jpg', specs: 'Intel Core i3 · 8GB RAM · 256GB SSD', price: '12.990.000₫' },
        { id: 'e14-student', name: 'ThinkPad E14 Student', series: 'ThinkPad E Series', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 8GB RAM · 512GB SSD', price: '16.500.000₫' },
        { id: 'e15-pro', name: 'ThinkPad E15 Pro', series: 'ThinkPad E Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 1TB SSD', price: '24.990.000₫' },

        { id: 'l14', name: 'ThinkPad L14', series: 'ThinkPad L Series', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 8GB RAM · 256GB SSD', price: '17.500.000₫' },
        { id: 'l15', name: 'ThinkPad L15', series: 'ThinkPad L Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 512GB SSD', price: '21.990.000₫' },
        { id: 'l13-compact', name: 'ThinkPad L13 Compact', series: 'ThinkPad L Series', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 8GB RAM · 256GB SSD', price: '15.990.000₫' },
        { id: 'l-series-pro', name: 'ThinkPad L Series Pro', series: 'ThinkPad L Series', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 1TB SSD', price: '25.500.000₫' },

        { id: 'yoga-14', name: 'ThinkPad Yoga 14', series: 'ThinkPad Yoga', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 16GB RAM · 512GB SSD · Màn cảm ứng', price: '26.990.000₫' },
        { id: 'yoga-x1', name: 'ThinkPad Yoga X1', series: 'ThinkPad Yoga', image: './assets/image/cate.jpg', specs: 'Intel Core i7 · 16GB RAM · 1TB SSD · Màn OLED', price: '42.000.000₫' },
        { id: 'yoga-slim', name: 'ThinkPad Yoga Slim', series: 'ThinkPad Yoga', image: './assets/image/cate.jpg', specs: 'Intel Core i5 · 8GB RAM · 256GB SSD · 2-in-1', price: '20.990.000₫' },
        { id: 'yoga-compact', name: 'ThinkPad Yoga Compact', series: 'ThinkPad Yoga', image: './assets/image/cate.jpg', specs: 'Intel Core i3 · 8GB RAM · 128GB SSD', price: '13.990.000₫' }
    ]
};
