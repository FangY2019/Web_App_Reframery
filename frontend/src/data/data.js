export default {
    products: [
        {
            _id: '1',
            category: 'Products',
            name: 'Birthday Cake',
            image: '/images/product_cake.jpg',
            price: 20,
            quantity: 20,
            rating: 4,
            description: "Homebaked Cakes - ideal for Birthdays and Special Occasions. ",
            city: "Hamilton",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
        {
            _id: '2',
            category: 'Products',
            name: 'Cookies',
            image: '/images/product_cookies.jpg',
            price: 3,
            quantity: 20,
            rating: 4.5,
            description: " ",
            city: "Hamilton",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
        {
            _id: '3',
            category: 'Products',
            name: 'Cute Cookies',
            image: '/images/product_candy.jpg',
            price: 4,
            quantity: 20,
            rating: 4.5,
            description: "",
            city: "Hamilton",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
    ],
    services: [
        {
            _id: '1',
            category: 'services',
            name: 'plumber',
            image: '/images/service_plumber.jpg',
            price:20,
            quantity: 20,
            rating: 5,
            description: "",
            city: "Hamilton",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
        {
            _id: '2',
            category: 'services',
            name: 'Air Conditioner Repair',
            image: '/images/service_airConditionerRepair.jpg',
            price:20,
            quantity: 20,
            rating: 5,
            description: "",
            city: "Toronto",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
        {
            _id: '3',
            category: 'services',
            name: 'Heating Maintenance',
            image: '/images/service_heatingMaintance.jpg',
            price:20,
            quantity: 20,
            rating: 5,
            description: "",
            city: "Toronto",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
    ],
    competences: [
        {
            _id: '1',
            category: 'Competences',
            name: 'Food Deliver',
            image: '/images/competence_deliver.jpg',
            price: 19,
            quantity: 20,
            rating: 5,
            description: "",
            city: "Toronto",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
        {
            _id: '2',
            category: 'Competences',
            name: 'Lawn Mowing',
            image: '/images/competence_mowLawn.jpeg',
            price: 18,
            quantity: 20,
            rating: 4.5,
            description: "",
            city: "Toronto",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
        {
            _id: '3',
            category: 'Competences',
            name: 'Sweep Snow',
            image: '/images/competence_sweepSnow.jpg',
            price: 19,
            quantity: 20,
            rating: 4.5, 
            description: "",
            city: "Toronto",
            address: "100 Main Street South Hamilton, ON L3P 5H8 Canada"
        },
    ], 
    requests:[
        {
            _id: "00001",
            name: "Hacker1",
            email: "hacker@gmail.com",
            request_time: " Oct. 10, 2020  10:10:02 ",
            status:true,
            validate_time: "Oct. 14, 2020  10:10:02",
        },
        {
            _id: "00002",
            name: "TechTerms",
            email: "techterms@gmail.com",
            request_time: " Oct. 10, 2020  10:10:02 ",
            status:true,
            validate_time: "Oct. 14, 2020  10:10:02",
        },
        {
            _id: "00003",
            name: "Hacker3",
            email: "hacker3@gmail.com",
            request_time: " Oct. 10, 2020  10:10:02 ",
            status:false,
            validate_time: "",
        },
        {
            _id: "00004",
            name: "TechTerm4",
            email: "techterms4@gmail.com",
            request_time: " Oct. 11, 2020  10:10:02 ",
            status:false,
            validate_time: "",
        },
    ],
    complaints:[
        {
            _id: "00001",
            complainant_id: "Complainant",
            complaint_email: "complainant@gmail.com",
            complaint_time: "Oct. 10, 2020  10:10:02 ",
            respondent_id: "Respondent",
            respondent_email: "complainant@gmail.com",
            status:"pending"
        },

    ]
}