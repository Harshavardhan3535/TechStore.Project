const products = [
  {
    id: 1,
    name: "Apple iMac 27, 1TB HDD, Retina 5K",
    price: 169999,
    originalPrice: 199999,
    discount: "35% OFF",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    isBestSeller: true,
    brand: "Apple"
  },
  {
    id: 2,
    name: "Apple iPhone 17 Pro Max, 1TB",
    price: 129999,
    originalPrice: 149999,
    discount: "15% OFF",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    isBestSeller: true,
    brand: "Apple"
  },
  {
    id: 3,
    name: "Samsung Galaxy S24 Ultra",
    price: 79999,
    originalPrice: 89999,
    discount: "20% OFF",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop",
    isBestSeller: true,
    brand: "Samsung"
  },
  {
    id: 4,
    name: "iPad Pro 13-Inch (M4), 512GB",
    price: 89999,
    originalPrice: 109999,
    discount: "18% OFF",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    isBestSeller: false,
    brand: "Apple"
  },
  {
    id: 5,
    name: "PlayStation 5 Console, 1TB",
    price: 68999,
    originalPrice: 74999,
    discount: "8% OFF",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    isBestSeller: true,
    brand: "Sony"
  },
  {
    id: 6,
    name: "Samsung Galaxy Tab S9",
    price: 54999,
    originalPrice: 64999,
    discount: "15% OFF",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
    isBestSeller: false,
    brand: "Samsung"
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 Headphones",
    price: 24999,
    originalPrice: 29999,
    discount: "17% OFF",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    isBestSeller: true,
    brand: "Sony"
  },
  {
    id: 8,
    name: "Dell XPS 15 Laptop, 32GB RAM",
    price: 189999,
    originalPrice: 219999,
    discount: "14% OFF",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
    isBestSeller: false,
    brand: "Dell"
  },
  {
    id: 9,
    name: "OnePlus 12 5G, 256GB",
    price: 64999,
    originalPrice: 69999,
    discount: "7% OFF",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
    isBestSeller: false,
    brand: "OnePlus"
  },
  {
    id: 10,
    name: "boAt Airdopes 141 Earbuds",
    price: 1299,
    originalPrice: 2999,
    discount: "56% OFF",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    isBestSeller: true,
    brand: "boAt"
  },
  {
    id: 11,
    name: "Logitech MX Master 3S Mouse",
    price: 8999,
    originalPrice: 10999,
    discount: "18% OFF",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    isBestSeller: false,
    brand: "Logitech"
  },
  {
    id: 12,
    name: "Samsung 55-inch QLED TV",
    price: 79999,
    originalPrice: 99999,
    discount: "20% OFF",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    isBestSeller: false,
    brand: "Samsung"
  }
];

export default products;