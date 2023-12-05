'use client'
import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { myEventsList } from '@/utils/constants';
import { Box } from '@chakra-ui/react';

const localizer = momentLocalizer(moment);

const page = () => {
 

  return (
    <Box p={10}>
      <div style={{ height: '500pt' }}>
        <Calendar
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          
        />
      </div>
    </Box>
  );
};

export default page;
