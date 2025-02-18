import {
  ArrowLeft,
  MoreVertical,
  Star,
  Tag,
  Wifi,
  Dumbbell,
  ParkingCircle,
  Waves,
  ShieldCheck,
  ConciergeBell,
} from 'lucide-react'
import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const hotels = [
  {
    id: 1,
    name: 'Hilton Grand Resort',
    location: 'Marina Bay, Singapore',
    distance: '4.6 km',
    rating: 4.7,
    reviews: 1700,
    description:
      'A luxurious stay experience in the heart of Singapore with world-class amenities. Nestled in the vibrant Marina Bay district, Hilton Grand Resort offers an unparalleled blend of elegance and comfort. Wake up to breathtaking city skyline views, and indulge in our award-winning hospitality that ensures a seamless and memorable stay. Our meticulously designed rooms and suites feature contemporary decor, plush bedding, and floor-to-ceiling windows that let in ample natural light. Whether you are traveling for business or leisure, our resort caters to your every need with state-of-the-art facilities, high-speed Wi-Fi, and a dedicated concierge service to assist with personalized recommendations. Beyond the luxurious accommodations, Hilton Grand Resort boasts a range of world-class amenities designed to elevate your stay. Enjoy a relaxing afternoon by our infinity pool overlooking the bay, or unwind at the spa with rejuvenating treatments crafted to refresh both body and mind. Savor exquisite international cuisine at our fine dining restaurants, or sip on handcrafted cocktails at the rooftop lounge while watching the sunset over the iconic Marina Bay Sands. With its prime location just minutes from top attractions like Gardens by the Bay and Orchard Road, this is more than just a hotel—it’s a gateway to the best experiences Singapore has to offer.',

    images: [
      'https://picsum.photos/100/100?random=1',
      'https://picsum.photos/100/100?random=2',
      'https://picsum.photos/100/100?random=3',
      'https://picsum.photos/100/100?random=4',
    ],
    coverImage: '/room1.jpg',
  },
  {
    id: 2,
    name: 'Hilton City Center',
    location: 'New York, USA',
    distance: '2.3 km',
    rating: 4.6,
    reviews: 1350,
    description:
      'Prime location for business travelers, minutes from Times Square and Central Park.',

    images: [
      'https://picsum.photos/100/100?random=5',
      'https://picsum.photos/100/100?random=6',
      'https://picsum.photos/100/100?random=7',
      'https://picsum.photos/100/100?random=8',
    ],
    coverImage: '/room2.jpg',
  },
  {
    id: 3,
    name: 'Hilton Beachside',
    location: 'Miami, USA',
    distance: '5.2 km',
    rating: 4.0,
    reviews: 980,
    description:
      'Relax with an oceanfront view and enjoy our private beach and infinity pool.',

    images: [
      'https://picsum.photos/100/100?random=9',
      'https://picsum.photos/100/100?random=10',
      'https://picsum.photos/100/100?random=11',
      'https://picsum.photos/100/100?random=12',
    ],
    coverImage: '/room3.jpg',
  },
  {
    id: 4,
    name: 'Hilton Mountain Retreat',
    location: 'Aspen, USA',
    distance: '8.0 km',
    rating: 4.0,
    reviews: 780,
    description:
      'Perfect getaway in the mountains with ski-in/ski-out access and spa services.',

    images: [
      'https://picsum.photos/100/100?random=13',
      'https://picsum.photos/100/100?random=14',
      'https://picsum.photos/100/100?random=15',
      'https://picsum.photos/100/100?random=16',
    ],
    coverImage: '/room4.jpg',
  },
  {
    id: 5,
    name: 'Hilton Luxury Suites',
    location: 'Paris, France',
    distance: '1.5 km',
    rating: 5.0,
    reviews: 2000,
    description:
      'Stay in luxury with city views, minutes away from the Eiffel Tower and Louvre.',
    images: [
      'https://picsum.photos/100/100?random=17',
      'https://picsum.photos/100/100?random=18',
      'https://picsum.photos/100/100?random=19',
      'https://picsum.photos/100/100?random=20',
    ],
    coverImage: '/room5.jpg',
  },
]

const HotelDetail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showFullDesc, setShowFullDesc] = useState(false)

  const hotel = hotels.find(h => h.id === Number(id))

  if (!hotel) {
    return (
      <div className="text-center mt-30 text-gray-500 text-lg font-semibold">
        Hotel not found.
      </div>
    )
  }

  return (
    <div className="max-w-[430px] mx-auto flex flex-col bg-white min-h-screen">
      <div className="w-full bg-white relative flex-grow">
        <div className="relative w-full h-[400px]">
          <img
            src={hotel.coverImage}
            alt={hotel.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <button
              className="bg-white p-2 rounded-full shadow-md"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft size={24} className="text-gray-600" />
            </button>
          </div>
          <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
            <MoreVertical size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="absolute w-full left-0 -mt-20 bg-white rounded-t-3xl p-6 pb-[100px] flex-grow">
          <h2 className="text-2xl font-bold text-gray-900">{hotel.name}</h2>
          <div className="flex items-center text-gray-500 text-sm mt-3">
            <Tag size={16} className="mr-1 text-hiltonblue" />
            {hotel.distance} • {hotel.location}
          </div>

          <div className="flex items-center mt-2">
            <Star size={18} className="text-yellow-500" />
            <span className="text-gray-800 text-sm font-semibold ml-1">
              {hotel.rating} Ratings
            </span>
            <span className="text-gray-500 text-sm ml-2">
              ({hotel.reviews} Reviewers)
            </span>
          </div>

          <div className="mt-5 text-gray-600 text-sm">
            {showFullDesc
              ? hotel.description
              : `${hotel.description.slice(0, 100)}...`}
            <button
              className="text-hiltonblue ml-2 font-medium"
              onClick={() => setShowFullDesc(!showFullDesc)}
            >
              {showFullDesc ? 'Show Less' : 'See More'}
            </button>
          </div>

          <div className="mt-5 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Amenities
            </h3>
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col items-center">
                <Waves size={24} className="text-hiltonblue/80" />
                <p className="text-xs text-gray-500 mt-1">Swimming Pool</p>
              </div>
              <div className="flex flex-col items-center">
                <Wifi size={24} className="text-hiltonblue/80" />
                <p className="text-xs text-gray-500 mt-1">Free Wi-Fi</p>
              </div>
              <div className="flex flex-col items-center">
                <ParkingCircle size={24} className="text-hiltonblue/80" />
                <p className="text-xs text-gray-500 mt-1">Free Parking</p>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck size={24} className="text-hiltonblue/80" />
                <p className="text-xs text-gray-500 mt-1">24/7 Security</p>
              </div>
              <div className="flex flex-col items-center">
                <ConciergeBell size={24} className="text-hiltonblue/80" />
                <p className="text-xs text-gray-500 mt-1">Concierge Service</p>
              </div>
              <div className="flex flex-col items-center">
                <Dumbbell size={24} className="text-hiltonblue/80" />
                <p className="text-xs text-gray-500 mt-1">Fitness Center</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Room Details
            </h3>
            <div className="flex space-x-3 overflow-x-auto scrollbar-hide">
              {hotel.images.map((img, index) => (
                <div
                  key={index}
                  className="w-[110px] rounded-lg overflow-hidden"
                >
                  <img
                    src={img}
                    alt={`hotel-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] mx-auto bg-white/70 backdrop-blur-md p-5 flex justify-end">
          <button className="bg-hiltonblue hover:bg-white hover:text-hiltonblue text-white px-6 py-3 rounded-lg text-sm font-medium transition ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HotelDetail
