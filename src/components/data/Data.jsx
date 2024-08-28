export const navList = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/services",
    text: "Services",
  },
  {
    id: 4,
    path: "/rooms",
    text: "Rooms",
  },
  {
    id: 5,
    path: "/page",
    text: "Page",
    subItems: [
      {
        id: 51,
        path: "/booking",
        text: "Booking",
      },
      {
        id: 52,
        path: "/team",
        text: "Our Team",
      },
      {
        id: 53,
        path: "/testimonial",
        text: "Testimonial",
      },
      {
        id: 54,
        path: "/gallery",
        text: "Gallery",
      }
    ],
  },
  {
    id: 6,
    path: "/contact",
    text: "Contact",
  },
];
export const socialIcons = [
  {
    icon: <i className="fab fa-facebook-f"></i>,
    Link: 'https://www.facebook.com/FriendshipInternationalHotel',
  },
  {
    icon: <i className="fab fa-twitter"></i>,
  },
  {
    icon: <i className="fab fa-instagram"></i>,
  },
  {
    icon: <i className="fab fa-linkedin-in"></i>,
  },
  {
    icon: <i className="fab fa-youtube"></i>,
  },
];

export const carouselData = [
  {
    img: "../assets/img/carousel-1.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
  {
    img: "../assets/img/carousel-2.jpg",
    title: "Discover A Brand Luxurious Hotel",
    subtitle: "luxury living",
    btn1: "Our Room",
    btn2: "Book Room",
  },
];
export const about = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary mb-2"></i>,
    text: "Rooms",
    count: "7861",
  },
  {
    icon: <i class="fa fa-users fa-2x text-primary mb-2"></i>,
    text: "Staffs",
    count: "1234",
  },
  {
    icon: <i class="fa fa-users-cog fa-2x text-primary mb-2"></i>,
    text: "Clients",
    count: "4321",
  },
];

export const services = [
  {
    icon: <i class="fa fa-hotel fa-2x text-primary"></i>,
    name: "24 hour room service",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-utensils fa-2x text-primary"></i>,
    name: "Food & Restaurant",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-spa fa-2x text-primary"></i>,
    name: "Spa & Fitness",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-swimmer fa-2x text-primary"></i>,
    name: "Sports & Gaming",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-glass-cheers fa-2x text-primary"></i>,
    name: "Event & Party",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },

  {
    icon: <i class="fa fa-dumbbell fa-2x text-primary"></i>,
    name: "GYM & Yoga",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-parking fa-2x text-primary"></i>,
    name: "Adequate parking",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-tshirt fa-2x text-primary"></i>,
    name: "Laundry and dry-cleaning",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
  {
    icon: <i class="fa fa-gift fa-2x text-primary"></i>,
    name: "Gift shop",
    discription: "Contrary to popular belief, ipsum is not simply random.",
  },
];
export const team = [
  {
    image: "../assets/img/team-1.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-2.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
  {
    image: "../assets/img/team-3.jpg",
    name: "Full Name",
    designation: "Designation",
  },
];

export const footerItem = [
  {
    id: 1,
    header: "Company",
    UnitItem: [
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
      {
        name: "Newsletter",
      },
      {
        name: "Terms & Condition",
        link: "/terms-and-conditions",
      },

    ],
  },
  {
    id: 2,
    header: "Services",
    UnitItem: [
      {
        name: "Rooms",
        link: "/rooms",
      },
      {
        name: "Food & Restaurant",
        link: "/services/food-restaurant",
      },
      {
        name: "Events & Meeting",
        link: "/services/events-meeting",
      },
      {
        name: "Spa, GYM & Internet",
        link: "/services/spa-gym-internet",
      },
    ],
  },
];


export const footerContact = [
  {
    icon: <i className="fa fa-map-marker-alt me-3"></i>,
    name: "Africa Avenue, Bole, AA",
  },
  {
    icon: <i className="fa fa-phone-alt me-3"></i>,
    name: "+251-11-6670202",
  },
  {
    icon: <i className="fa fa-envelope me-3"></i>,
    name: "friendshiphotel.com.et",
  },
];

export const contact = [
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Booking",
    email: "book@example.com",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "Marketing",
    email: "marketing@friendshiphotel.com.et",
  },
  {
    icon: <i class="fa fa-envelope-open text-primary me-2"></i>,
    title: "General",
    email: "info@example.com",
  },
];
export const testimonial = [
  {
    description:
      "Friendship is such a beautiful and neat hotel. It has mindblowingly amazing rooms and the service is of an international standard.",
    name: "Nurhusen Arefayne",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-1.jpg",
  },
  {
    description:
      "I spent quite sometime at the Friendship Hotel. It was a pleasant and beautiful stay. The staff is extremely polite, courteous and warm. The title of the hotel definitely extends to the environment and staff. They provided me with a driver who took me all over Addis Ababa with historical information. I was pleased with the cleanliness of the rooms, the food was splendid. I will definitely spend time at this hitel again",
    name: "Andrew S",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-2.jpg",
  },
  {
    description:
      "The Friendship International Hotel is a luxurious accommodation that caters to both business and leisure travelers. With spacious and well-appointed rooms, attentive staff, and a range of exceptional amenities, it offers a delightful stay experience.",
    name: "Ewnetu Bekele",
    profession: "Profession",
    icon: (
      <i class="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1"></i>
    ),
    img: "../assets/img/testimonial-3.jpg",
  },
];

export const roomItems = [
  {
    img: "../assets/img/royal_suit_3.jpg",
    price: "$110/night",
    name: "Royal Suite",
    star: 5,
    description:
      "Our Royal Suite represents the best that our hotel has to offer. Guests will enjoy 62 sq. m of spacious luxury in Addis Ababa that is designed to please.",
    beds: 5,
    wifi: true,
    area: 62,
  },
  {
    img: "../assets/img/deluxe_1.JPG",
    price: "$110/night",
    name: "Deluxe",
    star: 4,
    description:
      "Our deluxe room gives our guests more comfort and more amenities to enjoy. These rooms have 38 sq. m of upgraded living space.",
    wifi: true,
    area: 38,
    beds: 2,
  },
  {
    img: "../assets/img/standard_king_1.JPG",
    price: "$110/night",
    name: "Standard King",
    star: 3,
    description:
      "Appropriately titled, this room is made for a king. The larger space allows guests to easily make their stay at our hotel like a second home.",
    wifi: true,
    area: 38,
    beds: 1,
  },
  {
    img: "../assets/img/standard_queen_1.JPG",
    price: "$110/night",
    name: "Standard Queen",
    star: 3,
    description:
      "At Friendship Hotel we believe everyone should be treated like royalty and this room represents how we feel about the level of service all our guests should receive.",
    wifi: true,
    area: 38,
    beds: 1,
  }, {
    img: "../assets/img/standard_twin_1.JPG",
    price: "$110/night",
    name: "Standard Twin",
    star: 3,
    description:
      "Sometimes two beds are better than one. For duo travelers that would prefer their own space to lay down their head, this room is perfect.",
    wifi: true,
    area: 35,
    beds: 2,
  },
];

export const images = [
  "../assets/img/about-2.jpg",
  "../assets/img/gallery_13.jpg",
  "../assets/img/gallery_12.jpg",
  "../assets/img/gallery_14.jpg",
  "../assets/img/royal_suit_3.jpg",
  "../assets/img/gallery_2.jpg",
  "../assets/img/royal_suit_2.jpg",
  "../assets/img/gallery_9.jpg",
  "../assets/img/standard_king_2.JPG",
  "../assets/img/gallery_11.JPG",
  "../assets/img/gallery_3.jpg",
  "../assets/img/royal_suit_1.jpg",
  "../assets/img/gallery_7.jpg",
  "../assets/img/gallery_18.png",
  "../assets/img/gallery_16.jpg",
  "../assets/img/about-1.jpg",
  "../assets/img/deluxe_1.JPG",
  "../assets/img/gallery_5.jpg",
  "../assets/img/about-4.jpg",
  "../assets/img/standard_queen_1.JPG",
  "../assets/img/gallery_1.jpg",
  "../assets/img/gallery_6.jpg",
  "../assets/img/royal_suit_4.jpg",
  "../assets/img/gallery_10.jpg",
  "../assets/img/gallery_4.jpg",
  "../assets/img/gallery_17.jpg",
  "../assets/img/about-3.jpg",
  "../assets/img/gallery_8.jpg",
  "../assets/img/standard_king_1.JPG",
  "../assets/img/standard_twin_1.JPG",
  "../assets/img/standard_queen_2.JPG",
  "../assets/img/gallery_15.jpg",
  "../assets/img/royal_suit_5.jpg",
];
