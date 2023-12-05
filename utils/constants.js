import { RiCalendar2Line, RiCalendarCheckLine, RiCalendarEventLine } from 'react-icons/ri';

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
  
  
