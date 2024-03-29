const data ={
  products: [
    {
      _id: "1",
      category: "Products",
      name: "Birthday Cake",
      image: "/images/product_cake.jpg",
      price: 20,
      stock: 0,
      rating: 4,
      numOfReviews: 10,
      Review: "Good",
      description: "Homebaked Cakes - ideal for Birthdays and Special Occasions. ",
      city: "Hamilton",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    },
    {
      _id: "2",
      category: "Products",
      name: "Cookies",
      image: "/images/product_cookies.jpg",
      price: 3,
      stock: 20,
      rating: 4.5,
      numOfReviews: 10,
      description: " ",
      city: "Hamilton",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    },
    {
      _id: "3",
      category: "Products",
      name: "Cute Cookies",
      image: "/images/product_candy.jpg",
      price: 4,
      stock: 20,
      rating: 4.5,
      numOfReviews: 10,
      description: "",
      city: "Hamilton",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    }
  ],
  services: [
    {
      _id: "1",
      category: "services",
      name: "plumber",
      image: "/images/service_plumber.jpg",
      price: 20,
      stock: 20,
      rating: 5,
      numOfReviews: 10,
      description: "",
      city: "Hamilton",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    },
    {
      _id: "2",
      category: "services",
      name: "Air Conditioner Repair",
      image: "/images/service_airConditionerRepair.jpg",
      price: 20,
      stock: 20,
      rating: 5,
      numOfReviews: 10,
      description: "",
      city: "Toronto",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    },
    {
      _id: "3",
      category: "services",
      name: "Heating Maintenance",
      image: "/images/service_heatingMaintance.jpg",
      price: 20,
      stock: 20,
      rating: 5,
      numOfReviews: 10,
      description: "",
      city: "Toronto",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    }
  ],
  expertises: [
    {
      _id: "1",
      category: "expertises",
      name: "Food Deliver",
      image: "/images/competence_deliver.jpg",
      price: 19,
      stock: 20,
      rating: 5,
      numOfReviews: 10,
      description: "",
      city: "Toronto",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    },
    {
      _id: "2",
      category: "expertises",
      name: "Lawn Mowing",
      image: "/images/competence_mowLawn.jpeg",
      price: 18,
      stock: 20,
      rating: 4.5,
      numOfReviews: 10,
      description: "",
      city: "Toronto",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    },
    {
      _id: "3",
      category: "expertises",
      name: "Sweep Snow",
      image: "/images/competence_sweepSnow.jpg",
      price: 19,
      stock: 20,
      rating: 4.5,
      numOfReviews: 10,
      description: "",
      city: "Toronto",
      community: "Canada",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    }
  ],
  users: [
    {
      _id: "1",
      name: "Mr Smith",
      phone: "3658884030",
      postcode: "L8S121",
      password: "abxs",
      image: "/images/competence_deliver.jpg",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada",
      email: "la@gmail.com"
    }
  ],
  input_products: [
    {
      _id: "1",
      category: "Products",
      name: "Banana",
      image: "/images/competence_deliver.jpg",
      price: 19,
      quantity: 20,
      rating: 4.5,
      description: "taste good",
      city: "Toronto",
      address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
    }
  ], 
  requests:[
  {
    _id: "00001",
    name: "Hacker1",
    email: "hacker@gmail.com",
    request_time: " Oct. 10, 2020  10:10:02 ",
    status:true,
    validate_time: "Oct. 14, 2020  10:10:02"
  },
  {
    _id: "00002",
    name: "TechTerms",
    email: "techterms@gmail.com",
    request_time: " Oct. 10, 2020  10:10:02 ",
    status:true,
    validate_time: "Oct. 14, 2020  10:10:02"
  },
  {
    _id: "00003",
    name: "Hacker3",
    email: "hacker3@gmail.com",
    request_time: " Oct. 10, 2020  10:10:02 ",
    status:false,
    validate_time: ""
  },
  {
    _id: "00004",
    name: "TechTerm4",
    email: "techterms4@gmail.com",
    request_time: " Oct. 11, 2020  10:10:02 ",
    status:false,
    validate_time: ""
  }
  ]
};

export default data;
