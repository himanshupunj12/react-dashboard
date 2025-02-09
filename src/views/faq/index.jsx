import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

function FAQ() {
  const {
    palette: { mode },
  } = useTheme();
  const colors = tokens(mode);
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Header title="faq" subtitle="Frequently asked questions" />
      <Accordion defaultExpanded sx={{ background: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            First question text will go here!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolores, repellendus quaerat cumque error deserunt. Illum ex ab non
            adipisci, aspernatur explicabo provident, vel atque expedita
            repellendus tempore temporibus architecto?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            First question text will go here!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolores, repellendus quaerat cumque error deserunt. Illum ex ab non
            adipisci, aspernatur explicabo provident, vel atque expedita
            repellendus tempore temporibus architecto?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ background: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            First question text will go here!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolores, repellendus quaerat cumque error deserunt. Illum ex ab non
            adipisci, aspernatur explicabo provident, vel atque expedita
            repellendus tempore temporibus architecto?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded sx={{ background: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            First question text will go here!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolores, repellendus quaerat cumque error deserunt. Illum ex ab non
            adipisci, aspernatur explicabo provident, vel atque expedita
            repellendus tempore temporibus architecto?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: colors.primary[400] }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            First question text will go here!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            dolores, repellendus quaerat cumque error deserunt. Illum ex ab non
            adipisci, aspernatur explicabo provident, vel atque expedita
            repellendus tempore temporibus architecto?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

export default FAQ;
