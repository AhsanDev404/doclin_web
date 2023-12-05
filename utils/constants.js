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
