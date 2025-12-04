import { Globe } from "@/assets/svgs";

export const TOPBAR_LINKS = [
  { key: 'Events Calendar' },
  { key: 'Blog' },
  { key: 'Limelight' },
  {
    key: 'Language',
    label: 'EN (US)',
    icon: Globe,
    arrow: true,
    dropdown: [
      { key: 'EN (US)', label: 'English (United States)' },
      { key: 'EN (UK)', label: 'English (United Kingdom)' },
      { key: 'AR', label: 'Arabic' },
    ],
  },
  {
    key: 'United States',
    label: 'United States',
    flag: 'us',
    arrow: true,
    dropdown: [
      { key: 'US', label: 'United States', flag: 'us' },
      { key: 'CA', label: 'Canada', flag: 'ca' },
      { key: 'UK', label: 'United Kingdom', flag: 'uk' },
      { key: 'AU', label: 'Australia', flag: 'au' },
    ],
  },
];
export const NAV_LINKS = [
  {
    key: "explore",
    subNav: [
      { key: "home", href: "/" },
      { key: "events", href: "/events" },
      { key: "tours", href: "/tours" },
      { key: "activities", href: "/activities" },
      { key: "indulge", href: "/indulge" },
      { key: "places", href: "/places" },
      { key: "movies", href: "/movies" },
      { key: "sports", href: "/sports" },
      { key: "restaurants", href: "/restaurants" },
      { key: "find_a_table", href: "/find-a-table" },
      { key: "conferences", href: "/conferences" },
      { key: "workshops", href: "/workshops" },
      { key: "auditions", href: "/auditions" },
      { key: "people", href: "/people" },
      { key: "world_famous", href: "/world-famous" },
      { key: "social_buddies", href: "/social-buddies" },
      { key: "virtual_experiences", href: "/virtual-experiences" },
    ],
  },
  {
    key: "services",
    subNav: [
      { key: "all_services", href: "/services" },
      { key: "cleaning", href: "/services/cleaning" },
      { key: "plumbing", href: "/services/plumbing" },
      { key: "electrical", href: "/services/electrical" },
      { key: "carpentry", href: "/services/carpentry" },
    ],
  },
  {
    key: "nightlife",
    subNav: [
      { key: "clubs", href: "/nightlife/clubs" },
      { key: "bars", href: "/nightlife/bars" },
      { key: "lounges", href: "/nightlife/lounges" },
      { key: "live_music", href: "/nightlife/live-music" },
    ],
  },
  {
    key: "travel",
    subNav: [
      { key: "flights", href: "/travel/flights" },
      { key: "hotels", href: "/travel/hotels" },
      { key: "packages", href: "/travel/packages" },
      { key: "guides", href: "/travel/guides" },
    ],
  },
  {
    key: "accommodation",
    subNav: [
      { key: "hotels", href: "/accommodation/hotels" },
      { key: "apartments", href: "/accommodation/apartments" },
      { key: "hostels", href: "/accommodation/hostels" },
      { key: "villas", href: "/accommodation/villas" },
    ],
  },
  {
    key: "spaces",
    subNav: [
      { key: "coworking", href: "/spaces/coworking" },
      { key: "meeting_rooms", href: "/spaces/meeting-rooms" },
      { key: "event_venues", href: "/spaces/event-venues" },
    ],
  },
  {
    key: "subscriptions",
    subNav: [
      { key: "premium", href: "/subscriptions/premium" },
      { key: "business", href: "/subscriptions/business" },
      { key: "enterprise", href: "/subscriptions/enterprise" },
    ],
  },
  {
    key: "vouchers",
    subNav: [
      { key: "gift_cards", href: "/vouchers/gift-cards" },
      { key: "discount_codes", href: "/vouchers/discount-codes" },
      { key: "special_offers", href: "/vouchers/special-offers" },
    ],
  },
  {
    key: "rentals",
    subNav: [
      { key: "cars", href: "/rentals/cars" },
      { key: "bikes", href: "/rentals/bikes" },
      { key: "equipment", href: "/rentals/equipment" },
    ],
  },
  {
    key: "voting",
    subNav: [
      { key: "polls", href: "/voting/polls" },
      { key: "contests", href: "/voting/contests" },
      { key: "awards", href: "/voting/awards" },
    ],
  },
  {
    key: "shop",
    subNav: [
      { key: "featured", href: "/shop/featured" },
      { key: "new_arrivals", href: "/shop/new-arrivals" },
      { key: "best_sellers", href: "/shop/best-sellers" },
      { key: "deals", href: "/shop/deals" },
    ],
  },
  {
    key: "essentials",
    subNav: [
      { key: "groceries", href: "/essentials/groceries" },
      { key: "pharmacy", href: "/essentials/pharmacy" },
      { key: "household", href: "/essentials/household" },
    ],
  },
  {
    key: "healthcare",
    subNav: [
      { key: "doctors", href: "/healthcare/doctors" },
      { key: "clinics", href: "/healthcare/clinics" },
      { key: "hospitals", href: "/healthcare/hospitals" },
      { key: "appointments", href: "/healthcare/appointments" },
    ],
  },
  {
    key: "jobs",
    subNav: [
      { key: "browse_jobs", href: "/jobs" },
      { key: "post_job", href: "/jobs/post" },
      { key: "my_applications", href: "/jobs/applications" },
    ],
  },
  {
    key: "marketplace",
    subNav: [
      { key: "buy", href: "/marketplace/buy" },
      { key: "sell", href: "/marketplace/sell" },
      { key: "my_listings", href: "/marketplace/listings" },
    ],
  },
];
export const SPOTLIGHT_DATA = [
  {
    image: 'images/tonight-spotlight-image-1.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/tonight-spotlight-image-2.png',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/tonight-spotlight-image-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/tonight-spotlight-image-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
];
export const HOT_WEEK_DATA = [
  {
    image: 'images/hot-this-week-1.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/hot-this-week-2.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/hot-this-week-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/hot-this-week-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
];
export const UNMISSABLE_DATA = [
  {
    image: 'images/unmissable-1.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/unmissable-2.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/unmissable-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/unmissable-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description: 'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
];


