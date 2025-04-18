import { College, City } from "@/types/college";

// Adding more colleges with better city coverage
export const colleges: College[] = [
  {
    id: "iit-kgp",
    name: "IIT Kharagpur",
    type: "IIT",
    city: "Kharagpur",
    state: "West Bengal",
    cutoffMarks: {
      general: 85,
      obc: 78,
      sc: 70,
      st: 65
    },
    ranking: 3,
    fees: {
      tuition: 200000,
      hostel: 50000,
      other: 25000
    },
    courses: ["Computer Science", "Electronics", "Mechanical"],
    acceptanceRate: 2,
    facilities: ["Library", "Sports Complex", "Research Labs"],
    imageUrl: "/lovable-uploads/iit-kharagpur.jpg",
    website: "http://www.iitkgp.ac.in"
  },
  {
    id: "iit-delhi",
    name: "IIT Delhi",
    type: "IIT",
    city: "Delhi",
    state: "Delhi",
    cutoffMarks: {
      general: 90,
      obc: 85,
      sc: 75,
      st: 70
    },
    ranking: 2,
    fees: {
      tuition: 220000,
      hostel: 60000,
      other: 30000
    },
    courses: ["Computer Science", "Electrical Engineering", "Mechanical Engineering"],
    acceptanceRate: 1.5,
    facilities: ["Library", "Sports Complex", "Labs", "Hostel"],
    imageUrl: "/lovable-uploads/iit-delhi.jpg",
    website: "http://www.iitd.ac.in"
  },
  {
    id: "iit-bombay",
    name: "IIT Bombay",
    type: "IIT",
    city: "Mumbai",
    state: "Maharashtra",
    cutoffMarks: {
      general: 92,
      obc: 87,
      sc: 78,
      st: 72
    },
    ranking: 1,
    fees: {
      tuition: 230000,
      hostel: 65000,
      other: 35000
    },
    courses: ["Computer Science", "Chemical Engineering", "Aerospace Engineering"],
    acceptanceRate: 1,
    facilities: ["Library", "Sports Complex", "Labs", "Innovation Center"],
    imageUrl: "/lovable-uploads/iit-bombay.jpg",
    website: "http://www.iitb.ac.in"
  },
  {
    id: "aiims-delhi",
    name: "AIIMS Delhi",
    type: "Medical",
    city: "Delhi",
    state: "Delhi",
    cutoffMarks: {
      general: 95,
      obc: 92,
      sc: 85,
      st: 80
    },
    ranking: 1,
    fees: {
      tuition: 15000,
      hostel: 10000,
      other: 5000
    },
    courses: ["MBBS"],
    acceptanceRate: 0.5,
    facilities: ["Hospital", "Research Labs", "Hostel"],
    imageUrl: "/lovable-uploads/aiims-delhi.jpg",
    website: "http://www.aiims.edu"
  },
  {
    id: "cmc-vellore",
    name: "CMC Vellore",
    type: "Medical",
    city: "Vellore",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 93,
      obc: 90,
      sc: 82,
      st: 78
    },
    ranking: 3,
    fees: {
      tuition: 20000,
      hostel: 12000,
      other: 8000
    },
    courses: ["MBBS", "Nursing"],
    acceptanceRate: 0.7,
    facilities: ["Hospital", "Research Labs", "Hostel"],
    imageUrl: "/lovable-uploads/cmc-vellore.jpg",
    website: "http://www.cmch-vellore.edu"
  },
  {
    id: "jipmer-puducherry",
    name: "JIPMER Puducherry",
    type: "Medical",
    city: "Puducherry",
    state: "Puducherry",
    cutoffMarks: {
      general: 92,
      obc: 89,
      sc: 80,
      st: 75
    },
    ranking: 5,
    fees: {
      tuition: 12000,
      hostel: 8000,
      other: 4000
    },
    courses: ["MBBS", "MD"],
    acceptanceRate: 0.9,
    facilities: ["Hospital", "Research Labs", "Hostel"],
    imageUrl: "/lovable-uploads/jipmer-puducherry.jpg",
    website: "http://jipmer.edu.in"
  },
  {
    id: "bits-pilani",
    name: "BITS Pilani",
    type: "Private",
    city: "Pilani",
    state: "Rajasthan",
    cutoffMarks: {
      general: 88,
      obc: 83,
      sc: 74,
      st: 68
    },
    ranking: 8,
    fees: {
      tuition: 350000,
      hostel: 70000,
      other: 40000
    },
    courses: ["Computer Science", "Electronics", "Mechanical"],
    acceptanceRate: 3,
    facilities: ["Library", "Sports Complex", "Labs"],
    imageUrl: "/lovable-uploads/bits-pilani.jpg",
    website: "http://www.bits-pilani.ac.in"
  },
  {
    id: "vit-vellore",
    name: "VIT Vellore",
    type: "Private",
    city: "Vellore",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 85,
      obc: 80,
      sc: 72,
      st: 66
    },
    ranking: 12,
    fees: {
      tuition: 320000,
      hostel: 65000,
      other: 35000
    },
    courses: ["Computer Science", "Biotechnology", "Civil Engineering"],
    acceptanceRate: 4,
    facilities: ["Library", "Sports Complex", "Labs"],
    imageUrl: "/lovable-uploads/vit-vellore.jpg",
    website: "http://www.vit.ac.in"
  },
   {
    id: "jadavpur-university",
    name: "Jadavpur University",
    type: "State",
    city: "Kolkata",
    state: "West Bengal",
    cutoffMarks: {
      general: 80,
      obc: 75,
      sc: 65,
      st: 60
    },
    ranking: 15,
    fees: {
      tuition: 150000,
      hostel: 40000,
      other: 20000
    },
    courses: ["Engineering", "Arts", "Science"],
    acceptanceRate: 5,
    facilities: ["Central Library", "Gymnasium", "Laboratories"],
    imageUrl: "/lovable-uploads/jadavpur-university.jpg",
    website: "http://www.jaduniv.edu.in"
  },
  {
    id: "presidency-university",
    name: "Presidency University",
    type: "State",
    city: "Kolkata",
    state: "West Bengal",
    cutoffMarks: {
      general: 82,
      obc: 76,
      sc: 68,
      st: 62
    },
    ranking: 20,
    fees: {
      tuition: 120000,
      hostel: 35000,
      other: 15000
    },
    courses: ["Economics", "Physics", "Chemistry"],
    acceptanceRate: 8,
    facilities: ["Historic Campus", "Research Centers", "Modern Labs"],
    imageUrl: "/lovable-uploads/presidency-university.jpg",
    website: "https://presidencyuniversity.in"
  },
  {
    id: "nit-trichy",
    name: "NIT Trichy",
    type: "NIT",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 82,
      obc: 76,
      sc: 68,
      st: 62
    },
    ranking: 10,
    fees: {
      tuition: 180000,
      hostel: 45000,
      other: 25000
    },
    courses: ["Engineering", "Technology"],
    acceptanceRate: 7,
    facilities: ["Central Library", "Gymnasium", "Laboratories"],
    imageUrl: "/lovable-uploads/nit-trichy.jpg",
    website: "http://www.nitt.edu"
  },
  {
    id: "nit-warangal",
    name: "NIT Warangal",
    type: "NIT",
    city: "Warangal",
    state: "Telangana",
    cutoffMarks: {
      general: 78,
      obc: 72,
      sc: 64,
      st: 58
    },
    ranking: 18,
    fees: {
      tuition: 170000,
      hostel: 42000,
      other: 22000
    },
    courses: ["Engineering", "Technology"],
    acceptanceRate: 9,
    facilities: ["Central Library", "Gymnasium", "Laboratories"],
    imageUrl: "/lovable-uploads/nit-warangal.jpg",
    website: "http://www.nitw.ac.in"
  },
  {
    id: "vellore-institute-of-technology-chennai",
    name: "Vellore Institute of Technology - Chennai",
    type: "Private",
    city: "Chennai",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 75,
      obc: 70,
      sc: 60,
      st: 55
    },
    ranking: 25,
    fees: {
      tuition: 300000,
      hostel: 60000,
      other: 30000
    },
    courses: ["Engineering", "Technology", "Management"],
    acceptanceRate: 12,
    facilities: ["Library", "Sports Complex", "Labs"],
    imageUrl: "/lovable-uploads/vit-chennai.jpg",
    website: "https://chennai.vit.ac.in/"
  },
  {
    id: "anna-university",
    name: "Anna University",
    type: "State",
    city: "Chennai",
    state: "Tamil Nadu",
    cutoffMarks: {
      general: 70,
      obc: 65,
      sc: 55,
      st: 50
    },
    ranking: 30,
    fees: {
      tuition: 100000,
      hostel: 30000,
      other: 15000
    },
    courses: ["Engineering", "Technology", "Architecture"],
    acceptanceRate: 15,
    facilities: ["Library", "Sports Complex", "Labs"],
    imageUrl: "/lovable-uploads/anna-university.jpg",
    website: "https://www.annauniv.edu/"
  },
  {
    id: "institute-of-chemical-technology",
    name: "Institute of Chemical Technology",
    type: "Deemed",
    city: "Mumbai",
    state: "Maharashtra",
    cutoffMarks: {
      general: 80,
      obc: 75,
      sc: 65,
      st: 60
    },
    ranking: 22,
    fees: {
      tuition: 250000,
      hostel: 50000,
      other: 25000
    },
    courses: ["Chemical Engineering", "Pharmacy", "Technology"],
    acceptanceRate: 10,
    facilities: ["Library", "Labs", "Research Facilities"],
    imageUrl: "/lovable-uploads/ict-mumbai.jpg",
    website: "http://www.ict.ac.in/"
  },
  {
    id: "indian-institute-of-science",
    name: "Indian Institute of Science",
    type: "Deemed",
    city: "Bangalore",
    state: "Karnataka",
    cutoffMarks: {
      general: 92,
      obc: 88,
      sc: 80,
      st: 75
    },
    ranking: 2,
    fees: {
      tuition: 300000,
      hostel: 70000,
      other: 40000
    },
    courses: ["Engineering", "Science", "Research"],
    acceptanceRate: 3,
    facilities: ["Library", "Labs", "Research Facilities"],
    imageUrl: "/lovable-uploads/iisc-bangalore.jpg",
    website: "https://www.iisc.ac.in/"
  },
  {
    id: "national-institute-of-technology-surathkal",
    name: "National Institute of Technology - Surathkal",
    type: "NIT",
    city: "Surathkal",
    state: "Karnataka",
    cutoffMarks: {
      general: 79,
      obc: 74,
      sc: 66,
      st: 61
    },
    ranking: 20,
    fees: {
      tuition: 175000,
      hostel: 43000,
      other: 23000
    },
    courses: ["Engineering", "Technology"],
    acceptanceRate: 8,
    facilities: ["Central Library", "Gymnasium", "Laboratories"],
    imageUrl: "/lovable-uploads/nit-surathkal.jpg",
    website: "http://www.nitk.ac.in/"
  },
  {
    id: "national-institute-of-technology-rourkela",
    name: "National Institute of Technology - Rourkela",
    type: "NIT",
    city: "Rourkela",
    state: "Odisha",
    cutoffMarks: {
      general: 77,
      obc: 71,
      sc: 63,
      st: 57
    },
    ranking: 24,
    fees: {
      tuition: 172000,
      hostel: 41000,
      other: 21000
    },
    courses: ["Engineering", "Technology"],
    acceptanceRate: 10,
    facilities: ["Central Library", "Gymnasium", "Laboratories"],
    imageUrl: "/lovable-uploads/nit-rourkela.jpg",
    website: "http://www.nitrkl.ac.in/"
  },
  {
    id: "indian-institute-of-engineering-science-and-technology-shibpur",
    name: "Indian Institute of Engineering Science and Technology - Shibpur",
    type: "IIT",
    city: "Shibpur",
    state: "West Bengal",
    cutoffMarks: {
      general: 76,
      obc: 70,
      sc: 62,
      st: 56
    },
    ranking: 28,
    fees: {
      tuition: 170000,
      hostel: 40000,
      other: 20000
    },
    courses: ["Engineering", "Technology", "Science"],
    acceptanceRate: 11,
    facilities: ["Central Library", "Gymnasium", "Laboratories"],
    imageUrl: "/lovable-uploads/iiest-shibpur.jpg",
    website: "http://www.iiests.ac.in/"
  }
];

// Adding Kolkata and other major cities
export const indianCities: City[] = [
  { name: "Kolkata", state: "West Bengal" },
  { name: "Kharagpur", state: "West Bengal" },
  { name: "Mumbai", state: "Maharashtra" },
  { name: "Delhi", state: "Delhi" },
  { name: "Bangalore", state: "Karnataka" },
  { name: "Chennai", state: "Tamil Nadu" },
  { name: "Hyderabad", state: "Telangana" },
  { name: "Pune", state: "Maharashtra" },
  { name: "Kanpur", state: "Uttar Pradesh" },
  { name: "Madras", state: "Tamil Nadu" },
  { name: "Guwahati", state: "Assam" },
  { name: "Roorkee", state: "Uttarakhand" },
  { name: "Pilani", state: "Rajasthan" },
  { name: "Vellore", state: "Tamil Nadu" },
  { name: "Tiruchirappalli", state: "Tamil Nadu" },
  { name: "Warangal", state: "Telangana" },
  { name: "Surathkal", state: "Karnataka" },
  { name: "Rourkela", state: "Odisha" },
  { name: "Shibpur", state: "West Bengal" },
  { name: "Puducherry", state: "Puducherry" }
];
