import bcrypt from 'bcryptjs';
export default {
  products: [
    {
      category: "Products",
      name: "Birthday Cake",
      image: "/images/product_cake.jpg",
      price: 20,
      stock: 0,
      description: "Homebaked Cakes - ideal for Birthdays and Special Occasions. ",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f63955",
      userID: "5fe791ca8db443226c6cd243",

    },
    {
      category: "Products",
      name: "Cookies",
      image: "/images/product_cookies.jpg",
      price: 3,
      stock: 20,
      description: " ",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f63955",
      userID: "5fe791ca8db443226c6cd243",
    },
    {
      category: "Products",
      name: "Cute Cookies",
      image: "/images/product_candy.jpg",
      price: 4,
      stock: 20,
      description: "",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f63955",
      userID: "5fe791ca8db443226c6cd243",
    }
  ],
  services: [
    {
      category: "Services",
      name: "Food Deliver",
      image: "/images/service_deliver.jpg",
      price: 19,
      stock: 20,
      description: "",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f6395b",
      userID: "5fe791ca8db443226c6cd243",
    },
    {
      category: "Services",
      name: "Lawn Mowing",
      image: "/images/service_mowLawn.jpeg",
      price: 18,
      stock: 20,
      description: "",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f63957",
      userID: "5fe791ca8db443226c6cd242",
    },
    {
      category: "Services",
      name: "Plumber",
      image: "/images/service_plumber.jpg",
      price: 19,
      stock: 20,
      description: "",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f63958",
      userID: "5fe791ca8db443226c6cd243",
    }
  ],
  expertises: [
    {
      category: "Expertises",
      name: "Small Business Counsulting",
      image: "/images/expertise_consulting.jpg",
      price: 19,
      stock: 20,
      description: "",
      discount: 0.9,
      subCategoryID: "fe793913bf2cc0914f6395a",
      userID: "5fe791ca8db443226c6cd243",
    },
    {
      category: "Expertises",
      name: "Training",
      image: "/images/expertise_training.png",
      price: 18,
      stock: 20,
      description: "",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f63959",
      userID: "5fe791ca8db443226c6cd242",
    },
    {
      category: "Expertises",
      name: "Legal Advice",
      image: "/images/expertise_legaladvice.jpg",
      price: 19,
      stock: 20,
      description: "",
      discount: 0.9,
      subCategoryID: "5fe793913bf2cc0914f6395a",
      userID: "5fe791ca8db443226c6cd243",
    }
  ],
  users: [
    {
      username: "user01",
      email: "user01@gmail.com",
      password: bcrypt.hashSync('1234', 8),
      communityID: "5fe76baab69d0843c44af87e",
      admin: false,
      registerTime: new Date(),
      phoneNumber: "3658884030",
      addressID: "5fe76b8d1ccb4a626c67c33c",
      firstName: "",
      birthday: "",
      userImage: "/images/competence_deliver.jpg",
      validateStatus: false,
      validateTime: null,
      balance: 0,
      superAdmin: false,
      lastName: "",
      country: "",
      address: "",

    },
    {
      username: "user02",
      email: "user02@gmail.com",
      password: bcrypt.hashSync('1234', 8),
      communityID: "5fe76baab69d0843c44af87e",
      admin: false,
      registerTime: new Date(),
      phoneNumber: "3658884030",
      addressID: "5fe76b8d1ccb4a626c67c33c",
      firstName: "",
      birthday: "",
      userImage: "/images/competence_deliver.jpg",
      validateStatus: false,
      validateTime: null,
      balance: 0,
      superAdmin: false,
      lastName: "",
      country: "",
      address: "",
    },
    {
      username: "admin01",
      email: "admin01@gmail.com",
      password: bcrypt.hashSync('1234', 8),
      communityID: "5fe76baab69d0843c44af87e",
      admin: true,
      registerTime: new Date(),
      phoneNumber: "3658884030",
      addressID: "5fe76b8d1ccb4a626c67c33c",
      firstName: "",
      birthday: "",
      userImage: "/images/competence_deliver.jpg",
      validateStatus: false,
      validateTime: null,
      balance: 0,
      superAdmin: false,
      lastName: "",
      country: "",
      address: "",
    },
    {
      username: "superAdmin01",
      email: "superAdmin01@gmail.com",
      password: bcrypt.hashSync('1234', 8),
      communityID: "5fe76baab69d0843c44af87e",
      admin: false,
      registerTime: new Date(),
      phoneNumber: "3658884030",
      addressID: "5fe76b8d1ccb4a626c67c33c",
      firstName: "",
      birthday: "",
      userImage: "/images/competence_deliver.jpg",
      validateStatus: false,
      validateTime: null,
      balance: 0,
      superAdmin: true,
      lastName: "",
      country: "",
      address: "",
    },
  ],
  addresses: [
    {
      address: "100 Main Street South",
      city: "Hamilton",
      province: "Ontario",
      country: "Canada",
      postcode: "L3P 5H8"
    },
  ],
  communities: [
    {
      name: "Canada",
    },
    {
      name: "USA",
    },
    {
      name: "Brazil",
    },
  ],
  subCategories: [
    {
      name: "Food",
      userID: "5fe791ca8db443226c6cd243",
    },
    {
      name: "Toy",
      userID: "5fe791ca8db443226c6cd242",
    },
    {
      name: "Landscaping",
      userID: "5fe791ca8db443226c6cd242",
    },
    {
      name: "HomeMaintenance",
      userID: "5fe791ca8db443226c6cd243",
    },
    {
      name: "Training",
      userID: "5fe791ca8db443226c6cd242",
    },
    {
      name: "Consulting",
      userID: "5fe791ca8db443226c6cd243",
    },
    {
      name: "Deliver",
      userID: "5fe791ca8db443226c6cd243",
    },
  ],
  feedbacks: [
    {
      itemID: "5fe794e7f13caa70d47c3f2e",
      userID: "5fe796e41d2e3d4bc05fa58b",
      rating: 5,
      createdTime: new Date(),
      description: "Good",
    },
    {
      itemID: "5fe794e7f13caa70d47c3f2e",
      userID: "5fe796fc1d2e3d4bc05fa58c",
      rating: 5,
      createdTime: new Date(),
      description: "Good",
    },
  ],
  orders: [
    {
      buyerID: "5fe796e41d2e3d4bc05fa58b",
      sellerID: "5fe794e7f13caa70d47c3f2e",
      itemID: "5fe794e7f13caa70d47c3f2e",
      quantity: 1,
      status: "Complete",
      taxPrice: 0, 
      shippingPrice: 0, 
      logistics: "", 
      transactionID: "5fe799c3ab319b66b42de8b5",
    },
    {
      buyerID: "5fe796fc1d2e3d4bc05fa58c",
      sellerID: "5fe794e7f13caa70d47c3f2e",
      itemID: "5fe794e7f13caa70d47c3f2e",
      quantity: 1,
      status: "Complete",
      taxPrice: 0, 
      shippingPrice: 0, 
      logistics: "",      
      transactionID: "5fe799c3ab319b66b42de8b6",
    },
  ],
  transactions: [
    {
      senderID: "5fe796e41d2e3d4bc05fa58b",
      receiverID: "5fe794e7f13caa70d47c3f2e",
      time: new Date(),
      creditUnit: 20,
    },
    {
      senderID: "5fe796fc1d2e3d4bc05fa58c",
      receiverID: "5fe794e7f13caa70d47c3f2e",
      time: new Date(),
      creditUnit: 20,
    },
  ],
}
