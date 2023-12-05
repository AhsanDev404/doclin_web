import { RiCalendar2Line, RiCalendarCheckLine, RiCalendarEventLine } from 'react-icons/ri';

export const doctorNavigation = [
    {
        title: "Appointments",
        link: "/doctor/appointment-management",
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
      link: "/doctor/appointment-management/sunday",
    },
    {
      day: "Monday",
      slots: 5,
      link: "/doctor/appointment-management/monday",
    },
    {
      day: "Tuesday",
      slots: 4,
      link: "/doctor/appointment-management/tuesday",
    },
    {
      day: "Wednesday",
      slots: 6,
      link: "/doctor/appointment-management/wednesday",
    },
    {
      day: "Thursday",
      slots: 2,
      link: "/doctor/appointment-management/thursday",
    },
    {
      day: "Friday",
      slots: 7,
      link: "/doctor/appointment-management/friday",
    },
    {
      day: "Saturday",
      slots: 4,
      link: "/doctor/appointment-management/saturday",
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
  
  
