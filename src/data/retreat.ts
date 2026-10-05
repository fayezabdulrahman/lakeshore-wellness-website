export const retreat = {
  name: "Women’s Recalibration Retreat",
  dates: "15–17 April 2027",
  arrival: "12pm, Thursday 15 April",
  departure: "3pm, Saturday 17 April",
  venue: "Bettystown House & Estate, Co. Meath",
  venueShort: "Bettystown House, Co. Meath",
  duration: "Three days. Two nights. Just for you.",
  email: "yvonneskellyhealing@gmail.com",
  phone: "+353 87 052 8192",
};

export const retreatLinks = {
  enquiry: `mailto:${retreat.email}?subject=${encodeURIComponent(`${retreat.name} — ${retreat.dates}`)}`,
  phone: `tel:${retreat.phone.replace(/[^\d+]/g, "")}`,
  venue: "https://bettystownhouse.ie/",
};

export const retreatContent = {
  hero: {
    heading: "Shed the exhaustion.",
    headingEmphasis: "Reclaim your vision.",
    description:
      "A three-day residential retreat for women executives, leaders and entrepreneurs. Space to step back, find clarity and move forward with intention.",
    enquiryLabel: "Enquire about the retreat",
    programmeLabel: "Explore the three days",
    caption: "A quieter setting. A fresh perspective.",
    videoControls: {
      pauseLabel: "Pause",
      playLabel: "Play",
      pauseAccessibleLabel: "Pause background video",
      playAccessibleLabel: "Play background video",
    },
  },
  details: {
    datesLabel: "Proposed dates",
    settingLabel: "Proposed setting",
    durationLabel: "Your time away",
    arrivalLabel: "Arrival",
    departureLabel: "Departure",
    venueLabel: "Proposed venue",
  },
  introduction: {
    heading: "For the woman who",
    headingEmphasis: "holds so much.",
    lead:
      "You lead, create, make decisions and show up for others. This is an invitation to make space for yourself.",
    paragraphs: [
      "Created for women executives, leaders and entrepreneurs navigating the demands of responsibility, this immersive retreat brings together rest, nature, connection and practical wellbeing support.",
      "Move from overwhelm and stress towards clarity, focus and growth, with time to reflect on what matters and how you want to lead next.",
    ],
  },
  programme: {
    eyebrow: "The rhythm of the retreat",
    heading: "Arrive as you are.",
    headingEmphasis: "Leave with direction.",
    description:
      "Three days, each with its own intention. A gentle progression from slowing down to reconnecting and looking ahead.",
    note:
      "An outline of the planned experience. The final programme will be shared ahead of the retreat.",
  },
  venue: {
    eyebrow: "The proposed setting",
    heading: "A little closer to nature.",
    headingEmphasis: "A little closer to yourself.",
    description:
      "Bettystown House & Estate is a restored historic house in County Meath, set within 13 acres of gardens and woodland, just a short walk from the beach.",
    linkLabel: "Discover Bettystown House",
    location: "Bettystown, County Meath",
    travelNote: "Approximately 35 minutes from Dublin Airport",
  },
  inclusions: {
    eyebrow: "The planned experience",
    heading: "Considered care,",
    headingEmphasis: "in every detail.",
    description:
      "A residential experience designed to give you time, comfort and the freedom to be present.",
    note: "Venue, facilitators and activities are subject to final confirmation.",
  },
  host: {
    eyebrow: "Your host · Yvonne Skelly",
    heading: "A warm welcome.",
    headingEmphasis: "Thoughtful guidance.",
    lead:
      "Wellness entrepreneur, international speaker and founder of Workspace Wellness.",
    paragraphs: [
      "Yvonne brings a background spanning pharmaceuticals, project management and entrepreneurship, alongside more than 12 years building a trusted network of wellness facilitators and therapists.",
      "Her approach is personal and grounded in real life: creating supportive spaces where you can pause, reconnect and explore what comes next.",
    ],
    enquiryLabel: "Talk to Yvonne about the retreat",
  },
  enquiry: {
    heading: "Make space",
    headingEmphasis: "for your next chapter.",
    description:
      "Interested in joining us? Get in touch with Yvonne to ask a question, discuss whether the retreat is right for you, or receive pricing and booking details when available.",
    buttonLabel: "Enquire with Yvonne",
    detailsHeading: "A few details for your diary",
    note:
      "This retreat is currently being planned. Dates, venue, programme and pricing will be confirmed before bookings are taken.",
  },
};

export const retreatSeo = {
  title: "Retreat for Women Leaders — Workspace Wellness",
  description:
    "Discover the Women’s Recalibration Retreat: a planned three-day residential experience for women executives, leaders and entrepreneurs in County Meath.",
  image: "/og.png",
};

// Venue photos and the derived loop are from bettystownhouse.ie/gallery/.
// Confirm permission for both photography and derivative video before publishing.
export const retreatMedia = {
  house: {
    src: "/images/retreat/bettystown-house.webp",
    width: 1536,
    height: 865,
  },
  estate: {
    src: "/images/retreat/bettystown-estate.webp",
    alt: "Bettystown House surrounded by mature trees and private estate grounds",
    width: 1600,
    height: 800,
    caption: "A house with history. Space to breathe.",
  },
  sittingRoom: {
    src: "/images/retreat/bettystown-sitting-room.webp",
    alt: "A quiet sitting room at Bettystown House with armchairs beside the fireplace",
    width: 1536,
    height: 1024,
    caption: "Unhurried moments, indoors and out.",
  },
  interior: {
    src: "/images/retreat/bettystown-interior.webp",
    alt: "Light-filled sitting room overlooking the gardens at Bettystown House",
    width: 1536,
    height: 865,
  },
  host: {
    src: "/images/yvonne-skelly.jpg",
    alt: "Yvonne Skelly, your retreat host and founder of Workspace Wellness",
    width: 480,
    height: 640,
  },
  video: "/videos/retreat-bettystown-loop.mp4",
};

export const retreatDays = [
  {
    day: "Thursday",
    date: "15 April",
    title: "Decompression",
    subtitle: "Arrive. Exhale. Slow down.",
    description:
      "Step away from notifications and to-do lists. The first day is about arriving fully, settling into your surroundings and giving yourself permission to slow down.",
    detail:
      "A gentle beginning, with space to unwind, connect and leave the demands of everyday life at the door.",
  },
  {
    day: "Friday",
    date: "16 April",
    title: "Somatic reset & integration",
    subtitle: "Reconnect with yourself.",
    description:
      "A day of somatic sessions, mindful time in nature and wellbeing workshops. Explore practices that support rest, presence and a clearer sense of what you need.",
    detail:
      "Balance guided experiences with unhurried time for reflection, restorative rest and meaningful conversation.",
  },
  {
    day: "Saturday",
    date: "17 April",
    title: "Sustainable forward planning",
    subtitle: "Carry the clarity home.",
    description:
      "Bring your attention back to the life and leadership you want to create. Shape a practical plan that turns bigger goals into small, sustainable daily habits.",
    detail:
      "Leave with a personal direction and manageable next steps, supported by a post-retreat care consultation.",
  },
];

export const retreatInclusions = [
  {
    title: "A room of your own",
    description:
      "Two nights in a single-occupancy ensuite room, with exclusive access to the house and estate.",
  },
  {
    title: "Thoughtfully prepared meals",
    description:
      "All meals, including a private dining experience with Michelin-trained chef Aidan Ryan.",
  },
  {
    title: "Space to reset",
    description:
      "Somatic sessions, mindful nature walks, and mindset and wellbeing workshops.",
  },
  {
    title: "Creativity & connection",
    description:
      "A creativity and acoustic session with Irish singer-songwriter Brian Flanagan.",
  },
  {
    title: "Time by the sea",
    description:
      "A sea swim and sauna experience at Bettystown Beach, alongside time for quiet reflection and rest.",
  },
  {
    title: "Care beyond the retreat",
    description:
      "Pre- and post-retreat care consultations, and a personalised handcrafted gift on arrival.",
  },
];
