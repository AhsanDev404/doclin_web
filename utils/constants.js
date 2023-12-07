import { RiCalendar2Line, RiCalendarCheckLine, RiCalendarEventLine } from 'react-icons/ri';
import { RiDashboardLine, RiUserSettingsLine, RiStethoscopeLine, RiBookLine, RiUserAddLine } from 'react-icons/ri';

export const doctorNavigation = [
    {
        title: "Appointments",
        link: "/doctor",
        icon: <RiCalendar2Line /> // Use this icon for Appointments
    },
    {
        title: "Calendar",
        link: "/doctor/calender-management",
        icon: <RiCalendarCheckLine/> // Use this icon for Calendar
    },
    {
        title: "My Schedule",
        link: "/doctor/schedule-management",
        icon: <RiCalendarEventLine />// Use this icon for My Schedule
    },
];

export const appointmentDaysData = [
    {
      day: "Sunday",
      slots: 3,
      link: "/doctor/schedule-management/sunday",
    },
    {
      day: "Monday",
      slots: 5,
      link: "/doctor/schedule-management/monday",
    },
    {
      day: "Tuesday",
      slots: 4,
      link: "/doctor/schedule-management/tuesday",
    },
    {
      day: "Wednesday",
      slots: 6,
      link: "/doctor/schedule-management/wednesday",
    },
    {
      day: "Thursday",
      slots: 2,
      link: "/doctor/schedule-management/thursday",
    },
    {
      day: "Friday",
      slots: 7,
      link: "/doctor/schedule-management/friday",
    },
    {
      day: "Saturday",
      slots: 4,
      link: "/doctor/schedule-management/saturday",
    },
  ];

  export const sundayAppointments = [
    { id: 1, startTime: "10:00 AM", endTime: "11:00 AM", editLink: "/edit/1" },
    { id: 2, startTime: "12:00 PM", endTime: "01:00 PM", editLink: "/edit/2" },
    { id: 3, startTime: "02:00 PM", endTime: "03:00 PM", editLink: "/edit/3" },
    { id: 4, startTime: "04:00 PM", endTime: "05:00 PM", editLink: "/edit/4" },
    { id: 5, startTime: "06:00 PM", endTime: "07:00 PM", editLink: "/edit/5" },
    { id: 6, startTime: "08:00 PM", endTime: "09:00 PM", editLink: "/edit/6" },
    { id: 7, startTime: "10:00 PM", endTime: "11:00 PM", editLink: "/edit/7" },
  ];
  export const appointmentData = [
    {
      id: 1,
      patientName: "John Doe",
      patientEmail: "example@gmail.com",
      slotId: 123,
      day: "Monday",
      date: "2023-12-04",
      slotTime: "10:00 PM - 11:00 PM",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      patientEmail: "example2@gmail.com",
      slotId: 456,
      day: "Tuesday",
      date: "2023-12-05",
      slotTime: "02:00 PM - 03:00 PM",
    },
    {
      id: 3,
      patientName: "Alice Johnson",
      patientEmail: "alice@gmail.com",
      slotId: 789,
      day: "Wednesday",
      date: "2023-12-06",
      slotTime: "08:00 AM - 09:00 AM",
    },
    // Add more data as needed
  ];
  
  export const myEventsList = [
    {
      id: 1,
      title: 'Meeting',
      start: new Date(2023, 12, 4, 10, 0),
      end: new Date(2023, 12, 4, 11, 0),
    },
    {
      id: 2,
      title: 'Conference',
      start: new Date(2023, 11, 8, 14, 0),
      end: new Date(2023, 11, 8, 15, 0),
    },
    {
      id: 3,
      title: 'Lunch',
      start: new Date(2023, 11, 12, 12, 0),
      end: new Date(2023, 11, 12, 13, 0),
    },
    {
      id: 4,
      title: 'Presentation',
      start: new Date(2023, 11, 16, 9, 0),
      end: new Date(2023, 11, 16, 10, 0),
    },
    {
      id: 5,
      title: 'Team Meeting',
      start: new Date(2023, 11, 20, 11, 0),
      end: new Date(2023, 11, 20, 12, 0),
    },
    {
      id: 6,
      title: 'Training',
      start: new Date(2023, 11, 24, 13, 0),
      end: new Date(2023, 11, 24, 14, 0),
    },
    {
      id: 7,
      title: 'Project Review',
      start: new Date(2023, 11, 28, 15, 0),
      end: new Date(2023, 11, 28, 16, 0),
    },
    {
      id: 8,
      title: 'Workshop',
      start: new Date(2023, 11, 5, 10, 0),
      end: new Date(2023, 11, 5, 11, 0),
    },
    {
      id: 9,
      title: 'Seminar',
      start: new Date(2023, 11, 13, 14, 0),
      end: new Date(2023, 11, 13, 15, 0),
    },
    {
      id: 10,
      title: 'Interview',
      start: new Date(2023, 11, 21, 9, 0),
      end: new Date(2023, 11, 21, 10, 0),
    },
    // Add more events as needed
  ];

  export const adminNavigation = [
    {
        title: "Dashboard",
        link: "/admin",
        icon: <RiDashboardLine /> // Dashboard icon
    },
    {
        title: "User Management",
        link: "/admin/user-management",
        icon: <RiUserSettingsLine /> // User Management icon
    },
    {
        title: "Doctor Management",
        link: "/admin/doctor-management",
        icon: <RiStethoscopeLine /> // Doctor Management icon
    },
    {
      title: "Booking Management",
      link: "/admin/booking-management",
      icon: <RiBookLine /> // Booking Management icon
    },
    {
      title: "Doctor Registration",
      link: "/admin/doctor-registration",
      icon: <RiUserAddLine /> // Doctor Registration icon
    },
];

export const userData = [
  {
    id: 1,
    patientName: "John Doe",
    patientEmail: "example@gmail.com",
    totalBookings: 23,
  },
  {
    id: 2,
    patientName: "Alice Smith",
    patientEmail: "alice@example.com",
    totalBookings: 15,
  },
  {
    id: 3,
    patientName: "Bob Johnson",
    patientEmail: "bob@example.com",
    totalBookings: 30,
  },
  {
    id: 4,
    patientName: "Emma Brown",
    patientEmail: "emma@example.com",
    totalBookings: 18,
  },
  {
    id: 5,
    patientName: "Michael Davis",
    patientEmail: "michael@example.com",
    totalBookings: 10,
  },
  {
    id: 6,
    patientName: "Sophia Wilson",
    patientEmail: "sophia@example.com",
    totalBookings: 28,
  },
  {
    id: 7,
    patientName: "Oliver Taylor",
    patientEmail: "oliver@example.com",
    totalBookings: 20,
  },
  {
    id: 8,
    patientName: "Ava Garcia",
    patientEmail: "ava@example.com",
    totalBookings: 25,
  },
  {
    id: 9,
    patientName: "Noah Martinez",
    patientEmail: "noah@example.com",
    totalBookings: 12,
  },
  {
    id: 10,
    patientName: "Isabella Rodriguez",
    patientEmail: "isabella@example.com",
    totalBookings: 21,
  },
  {
    id: 11,
    patientName: "William Lee",
    patientEmail: "william@example.com",
    totalBookings: 17,
  },
];
export const userAppointment = [
  {
    id: 1,
    bookingDay: "Sunday",
    bookingTime: "10:00PM - 11:00PM",
    bookingDate: "23/2/2",
    doctorName: "John Doe",
  },
  {
    id: 2,
    bookingDay: "Monday",
    bookingTime: "9:00AM - 10:00AM",
    bookingDate: "24/2/2",
    doctorName: "Alice Smith",
  },
  {
    id: 3,
    bookingDay: "Tuesday",
    bookingTime: "2:00PM - 3:00PM",
    bookingDate: "25/2/2",
    doctorName: "Bob Johnson",
  },
  {
    id: 4,
    bookingDay: "Wednesday",
    bookingTime: "4:00PM - 5:00PM",
    bookingDate: "26/2/2",
    doctorName: "Emma Brown",
  },
  {
    id: 5,
    bookingDay: "Thursday",
    bookingTime: "11:00AM - 12:00PM",
    bookingDate: "27/2/2",
    doctorName: "Michael Davis",
  },
  {
    id: 6,
    bookingDay: "Friday",
    bookingTime: "1:00PM - 2:00PM",
    bookingDate: "28/2/2",
    doctorName: "Sophia Wilson",
  },
  {
    id: 7,
    bookingDay: "Saturday",
    bookingTime: "3:00PM - 4:00PM",
    bookingDate: "29/2/2",
    doctorName: "Oliver Taylor",
  },
  {
    id: 8,
    bookingDay: "Sunday",
    bookingTime: "10:00AM - 11:00AM",
    bookingDate: "1/3/2",
    doctorName: "Ava Garcia",
  },
  {
    id: 9,
    bookingDay: "Monday",
    bookingTime: "5:00PM - 6:00PM",
    bookingDate: "2/3/2",
    doctorName: "Noah Martinez",
  },
  {
    id: 10,
    bookingDay: "Tuesday",
    bookingTime: "12:00PM - 1:00PM",
    bookingDate: "3/3/2",
    doctorName: "Isabella Rodriguez",
  },
  {
    id: 11,
    bookingDay: "Wednesday",
    bookingTime: "3:00PM - 4:00PM",
    bookingDate: "4/3/2",
    doctorName: "William Lee",
  },
];

export const doctorData = [
  {
    id: 1,
    doctorName: "Dr. John Smith",
    specialization: "Cardiology",
    experience: 15,
  },
  {
    id: 2,
    doctorName: "Dr. Emily Johnson",
    specialization: "Pediatrics",
    experience: 10,
  },
  {
    id: 3,
    doctorName: "Dr. Michael Williams",
    specialization: "Orthopedics",
    experience: 20,
  },
  // Add more doctor objects as needed
];
export const doctorAppointment = [
  {
    id: 1,
    bookingDay: "Monday",
    bookingTime: "10:00AM - 11:00AM",
    bookingDate: "2023-01-16",
    patientName: "Alice Smith",
  },
  {
    id: 2,
    bookingDay: "Wednesday",
    bookingTime: "2:00PM - 3:00PM",
    bookingDate: "2023-01-18",
    patientName: "Bob Johnson",
  },
  {
    id: 3,
    bookingDay: "Friday",
    bookingTime: "3:00PM - 4:00PM",
    bookingDate: "2023-01-20",
    patientName: "Emily Davis",
  },
  // Add more appointment objects as needed
];

export const booking = [
  {
    id: 1,
    bookingDay: "Monday",
    bookingTime: "10:00AM - 11:00AM",
    bookingDate: "2023-01-16",
    patientName: "Alice Smith",
    doctorName: "Dr. John Doe",
  },
  {
    id: 2,
    bookingDay: "Wednesday",
    bookingTime: "2:00PM - 3:00PM",
    bookingDate: "2023-01-18",
    patientName: "Bob Johnson",
    doctorName: "Dr. Emily Johnson",
  },
  {
    id: 3,
    bookingDay: "Friday",
    bookingTime: "3:00PM - 4:00PM",
    bookingDate: "2023-01-20",
    patientName: "Emily Davis",
    doctorName: "Dr. Michael Williams",
  },
  // Add more booking objects as needed
];

export const sampleData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


  
  
