import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { useState } from "react";
import { tokens } from "../../theme";

// sample events
let eventGuid = 0;
const todayStr = new Date().toISOString().replace(/T.*$/, "");
function createEventId() {
  return String(eventGuid++);
}
const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "All-day event",
    start: todayStr,
  },
  {
    id: createEventId(),
    title: "Timed event",
    start: todayStr + "T12:00:00",
  },
];

function Calendar() {
  const {
    palette: { mode },
  } = useTheme();
  const colors = tokens(mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter the event details.");
    const api = selected.view.calendar;
    api.unselect();

    if (title) {
      api.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box height="100%" display="flex" flexDirection="column" gap="20px">
      <Header title="calendar" subtitle="Full calendar" />
      <Box
        height="calc(100% - 90px)"
        display="flex"
        justifyContent="space-between"
        gap={2}
      >
        {/* events */}
        <Box
          bgcolor={colors.primary[400]}
          flex="1 1 20%"
          p="15px"
          borderRadius="4px"
          sx={{ overflowY: "auto" }}
        >
          <Box maxHeight="100%">
            <Typography variant="h4">Events</Typography>
            <List>
              {currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
        {/* calendar */}
        <Box height="100%" flex="1 1 80%">
          <FullCalendar
            height="100%"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={INITIAL_EVENTS}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Calendar;
