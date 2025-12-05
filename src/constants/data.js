import { Globe } from '@/assets/svgs';

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
    key: 'explore',
    subNav: [
      { key: 'home', href: '/' },
      { key: 'events', href: '/events' },
      { key: 'tours', href: '/tours' },
      { key: 'activities', href: '/activities' },
      { key: 'indulge', href: '/indulge' },
      { key: 'places', href: '/places' },
      { key: 'movies', href: '/movies' },
      { key: 'sports', href: '/sports' },
      { key: 'restaurants', href: '/restaurants' },
      { key: 'find_a_table', href: '/find-a-table' },
      { key: 'conferences', href: '/conferences' },
      { key: 'workshops', href: '/workshops' },
      { key: 'auditions', href: '/auditions' },
      { key: 'people', href: '/people' },
      { key: 'world_famous', href: '/world-famous' },
      { key: 'social_buddies', href: '/social-buddies' },
      { key: 'virtual_experiences', href: '/virtual-experiences' },
    ],
  },
  {
    key: 'services',
    subNav: [
      { key: 'all_services', href: '/services' },
      { key: 'cleaning', href: '/services/cleaning' },
      { key: 'plumbing', href: '/services/plumbing' },
      { key: 'electrical', href: '/services/electrical' },
      { key: 'carpentry', href: '/services/carpentry' },
    ],
  },
  {
    key: 'nightlife',
    subNav: [
      { key: 'clubs', href: '/nightlife/clubs' },
      { key: 'bars', href: '/nightlife/bars' },
      { key: 'lounges', href: '/nightlife/lounges' },
      { key: 'live_music', href: '/nightlife/live-music' },
    ],
  },
  {
    key: 'travel',
    subNav: [
      { key: 'flights', href: '/travel/flights' },
      { key: 'hotels', href: '/travel/hotels' },
      { key: 'packages', href: '/travel/packages' },
      { key: 'guides', href: '/travel/guides' },
    ],
  },
  {
    key: 'accommodation',
    subNav: [
      { key: 'hotels', href: '/accommodation/hotels' },
      { key: 'apartments', href: '/accommodation/apartments' },
      { key: 'hostels', href: '/accommodation/hostels' },
      { key: 'villas', href: '/accommodation/villas' },
    ],
  },
  {
    key: 'spaces',
    subNav: [
      { key: 'coworking', href: '/spaces/coworking' },
      { key: 'meeting_rooms', href: '/spaces/meeting-rooms' },
      { key: 'event_venues', href: '/spaces/event-venues' },
    ],
  },
  {
    key: 'subscriptions',
    subNav: [
      { key: 'premium', href: '/subscriptions/premium' },
      { key: 'business', href: '/subscriptions/business' },
      { key: 'enterprise', href: '/subscriptions/enterprise' },
    ],
  },
  {
    key: 'vouchers',
    subNav: [
      { key: 'gift_cards', href: '/vouchers/gift-cards' },
      { key: 'discount_codes', href: '/vouchers/discount-codes' },
      { key: 'special_offers', href: '/vouchers/special-offers' },
    ],
  },
  {
    key: 'rentals',
    subNav: [
      { key: 'cars', href: '/rentals/cars' },
      { key: 'bikes', href: '/rentals/bikes' },
      { key: 'equipment', href: '/rentals/equipment' },
    ],
  },
  {
    key: 'voting',
    subNav: [
      { key: 'polls', href: '/voting/polls' },
      { key: 'contests', href: '/voting/contests' },
      { key: 'awards', href: '/voting/awards' },
    ],
  },
  {
    key: 'shop',
    subNav: [
      { key: 'featured', href: '/shop/featured' },
      { key: 'new_arrivals', href: '/shop/new-arrivals' },
      { key: 'best_sellers', href: '/shop/best-sellers' },
      { key: 'deals', href: '/shop/deals' },
    ],
  },
  {
    key: 'essentials',
    subNav: [
      { key: 'groceries', href: '/essentials/groceries' },
      { key: 'pharmacy', href: '/essentials/pharmacy' },
      { key: 'household', href: '/essentials/household' },
    ],
  },
  {
    key: 'healthcare',
    subNav: [
      { key: 'doctors', href: '/healthcare/doctors' },
      { key: 'clinics', href: '/healthcare/clinics' },
      { key: 'hospitals', href: '/healthcare/hospitals' },
      { key: 'appointments', href: '/healthcare/appointments' },
    ],
  },
  {
    key: 'jobs',
    subNav: [
      { key: 'browse_jobs', href: '/jobs' },
      { key: 'post_job', href: '/jobs/post' },
      { key: 'my_applications', href: '/jobs/applications' },
    ],
  },
  {
    key: 'marketplace',
    subNav: [
      { key: 'buy', href: '/marketplace/buy' },
      { key: 'sell', href: '/marketplace/sell' },
      { key: 'my_listings', href: '/marketplace/listings' },
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
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/tonight-spotlight-image-2.png',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/tonight-spotlight-image-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/tonight-spotlight-image-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
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
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/hot-this-week-2.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/hot-this-week-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/hot-this-week-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
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
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/unmissable-2.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/unmissable-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/unmissable-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
];
export const EXCLUSIVES_DATA = [
  {
    image: 'images/exclusives-card-1.jpg',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    action: 'Explore Now',
  },
  {
    image: 'images/exclusives-card-2.jpg',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    action: 'Explore Now',
  },
];
export const FOR_YOU_DATA = [
  {
    image: 'images/for-you-1.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/for-you-2.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/for-you-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/for-you-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
];
export const BUZZING_DESTINATIONS_DATA = [
  {
    image: 'images/buzzing-destinations-1.jpg',
    title: 'Kina Mountain',
    checkIns: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
  },
  {
    image: 'images/buzzing-destinations-2.jpg',
    title: 'Kina Mountain',
    checkIns: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
  },
  {
    image: 'images/buzzing-destinations-3.jpg',
    title: 'Kina Mountain',
    checkIns: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
  },
  {
    image: 'images/buzzing-destinations-4.jpg',
    title: 'Kina Mountain',
    checkIns: '1.2k check-ins this week',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
  },
];
export const DEALS_DATA = [
  {
    id: 1,
    image: 'images/deals-image-1.jpg',
    title: 'New User',
    subtitle: 'Offer',
    discountText: 'UP TO',
    discountValue: '20%',
    discountLabel: 'OFF',
  },
  {
    id: 2,
    image: 'images/deals-image-2.jpg',
    title: 'Black Friday',
    subtitle: 'Offers',
    discountText: 'UP TO',
    discountValue: '20%',
    discountLabel: 'OFF',
  },
  {
    id: 3,
    image: 'images/deals-image-3.jpg',
    title: 'Special Deal', // Update this based on actual content
    subtitle: 'Offer',
    discountText: 'UP TO',
    discountValue: '20%',
    discountLabel: 'OFF',
  },
  {
    id: 4,
    image: 'images/deals-image-1.jpg',
    title: 'New User',
    subtitle: 'Offer',
    discountText: 'UP TO',
    discountValue: '20%',
    discountLabel: 'OFF',
  },
  {
    id: 5,
    image: 'images/deals-image-2.jpg',
    title: 'Weekend Sale',
    subtitle: 'Offers',
    discountText: 'UP TO',
    discountValue: '20%',
    discountLabel: 'OFF',
  },
  {
    id: 6,
    image: 'images/deals-image-3.jpg',
    title: 'Exclusive Deal',
    subtitle: 'Offer',
    discountText: 'UP TO',
    discountValue: '20%',
    discountLabel: 'OFF',
  },
];
export const HIDDEN_GEMS_DATA = [
  {
    id: 1,
    image: 'images/hidden-gems-1.jpg',
    title: 'The Secret Garden Café',
    location: 'Napa',
    description:
      'Hidden courtyard serving organic brunch & live music evenings.',
  },
  {
    id: 2,
    image: 'images/hidden-gems-2.jpg',
    title: "Napa's Underground Jazz",
    location: 'Accra',
    description: 'Vintage cellar turned into an intimate live stages.',
  },
  {
    id: 3,
    image: 'images/hidden-gems-3.jpg',
    title: 'Sky Hammock Trail',
    location: 'Bali',
    description: 'Swing over the valley — a serene thrill far from crowds',
  },
  {
    id: 4,
    image: 'images/hidden-gems-4.jpg',
    title: 'Sky Hammock Trail',
    location: 'Bali',
    description: 'Swing over the valley — a serene thrill far from crowds',
  },
];
export const EXPLORE_GHANA_DATA = [
  [
    {
      id: 1,
      image: 'images/explore-ghana-1.jpg',
      rating: 3.5,
      title: 'Events',
      subtitle: 'Explore',
      className: 'lg:max-w-[313px]',
    },
    {
      id: 2,
      image: 'images/explore-ghana-2.png',
      rating: 3.5,
      ratingBlack: true,
      title: 'Activities',
      subtitle: 'Explore',
      className: 'lg:max-w-[460px]',
    },
    {
      id: 3,
      image: 'images/explore-ghana-3.jpg',
      rating: 3.5,
      ratingBlack: true,
      title: 'Restaurants',
      subtitle: 'Explore',
      className: 'lg:max-w-[531px]',
    },
  ],
  [
    {
      id: 4,
      image: 'images/explore-ghana-4.png',
      rating: 3.5,
      title: 'Tours',
      subtitle: 'Explore',
      className: 'lg:max-w-[713px]',
    },
    {
      id: 5,
      image: 'images/explore-ghana-5.png',
      rating: 3.5,
      ratingBlack: true,
      title: 'Services',
      subtitle: 'Explore',
      className: 'lg:max-w-[609px]',
    },
  ],
  [
    {
      id: 6,
      image: 'images/explore-ghana-6.png',
      rating: 3.5,
      title: 'Destinations',
      subtitle: 'Explore',
      className: 'lg:max-w-[400px]',
    },
    {
      id: 7,
      image: 'images/explore-ghana-7.jpg',
      rating: 3.5,
      title: 'Places',
      subtitle: 'Explore',
      className: 'lg:max-w-[316px]',
    },
    {
      id: 8,
      image: 'images/explore-ghana-8.jpg',
      rating: 3.5,
      ratingBlack: true,
      title: 'Accommodations',
      subtitle: 'Explore',
      className: 'lg:max-w-[591px]',
    },
  ],
];

export const GHANA_TOP_TEN_DATA = [
  {
    image: 'images/ghana-top-ten-1.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/ghana-top-ten-2.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/ghana-top-ten-3.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
  {
    image: 'images/ghana-top-ten-4.jpg',
    category: 'Lounge',
    title: 'DJ Liv North Live',
    rating: 4.8,
    date: 'Wed, 5th Dec',
    time: '10:30 PM - 12:30 PM',
    location: 'NewYork City',
    price: 'USD 89',
    description:
      'Lorem ipsum dolor sit amet consectetur. Cras a faucibus arcu bibendum pellentesque convallis eu ornare.',
  },
];

export const GLOBAL_HIGHLIGHTS_DATA = [
  {
    id: 1,
    image: 'images/global-highlights-1.jpg',
    title: 'Paris',
    location: 'Paris',
    description: 'Culinary nights & art walks',
    action: 'Explore Now'
  },
  {
    id: 2,
    image: 'images/global-highlights-2.jpg',
    title: 'Tokyo',
    location: 'Tokyo',
    description: 'Hidden rooftop bars & pop-up events',
    action: 'Explore Now'
  },
  {
    id: 3,
    image: 'images/global-highlights-3.jpg',
    title: 'New York',
    location: 'New York',
    description: 'Adventure escapes & wine tours',
    action: 'Explore Now'
  },
  {
    id: 4,
    image: 'images/global-highlights-4.jpg',
    title: 'New York',
    location: 'New York',
    description: 'Adventure escapes & wine tours',
    action: 'Explore Now'
  },
];