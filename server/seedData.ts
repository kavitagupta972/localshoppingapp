// seedData.ts

export const seedData = {
    categories: [
      {
        id: "cat-1",
        name: "Electronics",
      },
      {
        id: "cat-2",
        name: "Fashion",
      },
      {
        id: "cat-3",
        name: "Home & Kitchen",
      },
    ],
  
    products: [
      {
        id: "prod-1",
        name: "iPhone 15",
        description: "Latest Apple smartphone",
        price: 79999,
        categoryId: "cat-1",
        stock: 50,
        imageUrl: "/images/iphone15.jpg",
      },
      {
        id: "prod-2",
        name: "Samsung Galaxy S25",
        description: "Flagship Android smartphone",
        price: 69999,
        categoryId: "cat-1",
        stock: 40,
        imageUrl: "/images/galaxy-s25.jpg",
      },
      {
        id: "prod-3",
        name: "Men's Casual Shirt",
        description: "100% Cotton Casual Shirt",
        price: 1499,
        categoryId: "cat-2",
        stock: 120,
        imageUrl: "/images/shirt.jpg",
      },
      {
        id: "prod-4",
        name: "Women's Sneakers",
        description: "Comfortable everyday sneakers",
        price: 2999,
        categoryId: "cat-2",
        stock: 75,
        imageUrl: "/images/sneakers.jpg",
      },
      {
        id: "prod-5",
        name: "Air Fryer",
        description: "Healthy cooking appliance",
        price: 4999,
        categoryId: "cat-3",
        stock: 25,
        imageUrl: "/images/air-fryer.jpg",
      },
    ],
  
    users: [
      {
        id: "user-1",
        firstName: "Kavita",
        lastName: "Gupta",
        email: "kavita@example.com",
        role: "customer",
      },
      {
        id: "user-2",
        firstName: "Admin",
        lastName: "User",
        email: "admin@example.com",
        role: "admin",
      },
    ],
  
    orders: [
      {
        id: "order-1",
        userId: "user-1",
        status: "DELIVERED",
        totalAmount: 81498,
        createdAt: "2026-06-01",
        items: [
          {
            productId: "prod-1",
            quantity: 1,
            price: 79999,
          },
          {
            productId: "prod-3",
            quantity: 1,
            price: 1499,
          },
        ],
      },
    ],
  };