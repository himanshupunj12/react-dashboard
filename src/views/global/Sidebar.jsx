import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  HelpOutlineOutlined,
  HomeOutlined,
  MenuOutlined,
  PeopleOutlined,
  PersonOutlined,
  PieChartOutlined,
  PublicOutlined,
  ReceiptOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { tokens } from "../../theme";
import Menu from "../../components/Menu";
import { useState } from "react";

const Sidebar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleIsCollapsed = () => {
    setIsCollapsed((curVal) => !curVal);
  };
  return (
    <Box
      sx={{
        background: colors.primary[400],
        gridRow: "1 / -1",
        padding: !isCollapsed ? "1.2rem" : "0.4rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.8rem",
        alignItems: "center",
      }}
    >
      {isCollapsed && (
        <IconButton size="large" onClick={handleIsCollapsed}>
          <MenuOutlined sx={{ "&": { fontSize: "1.8rem !important" } }} />
        </IconButton>
      )}
      {!isCollapsed && (
        <>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs="auto">
              <Typography fontSize="1.4rem" fontWeight={600}>
                ADMIN
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton size="large" onClick={handleIsCollapsed}>
                <MenuOutlined />
              </IconButton>
            </Grid>
          </Grid>

          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Box
                component="img"
                sx={{ height: "80px", width: "80px", borderRadius: "50%" }}
                src="/ben.jpg"
              ></Box>
            </Grid>
            <Grid item>
              <Typography
                sx={{
                  fontSize: "1.6rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Ben Rock
              </Typography>
              <Typography
                sx={{
                  color: colors.greenAccent[500],
                  fontSize: "1.2rem",
                  textAlign: "center",
                }}
              >
                VP Fancy Admin
              </Typography>
            </Grid>
          </Grid>

          <Box display="flex" flexDirection="column" gap="1.2rem">
            <Button
              variant="text"
              component={NavLink}
              to="/dashboard"
              startIcon={
                <HomeOutlined sx={{ "&": { fontSize: "1.2rem !important" } }} />
              }
              sx={{
                color: theme.palette.text.primary,
                fontSize: "1.1rem",
                alignSelf: "flex-start",
                "&.active": { color: colors.indigoAccent[500] },
              }}
            >
              Dashboard
            </Button>
            <Menu
              menu="Data"
              menuItems={[
                { icon: PeopleOutlined, text: "Manage Team", link: "/team" },
                {
                  icon: ContactsOutlined,
                  text: "Contacts Information",
                  link: "/contacts",
                },
                {
                  icon: ReceiptOutlined,
                  text: "Invoices Balances",
                  link: "/invoices",
                },
              ]}
            />
            <Menu
              menu="Pages"
              menuItems={[
                { icon: PersonOutlined, text: "Public Form", link: "/form" },
                {
                  icon: CalendarTodayOutlined,
                  text: "Calendar",
                  link: "/calendar",
                },
                {
                  icon: HelpOutlineOutlined,
                  text: "FAQ Page",
                  link: "/faq",
                },
              ]}
            />
            <Menu
              menu="Charts"
              menuItems={[
                { icon: BarChartOutlined, text: "Bar Chart", link: "/bar" },
                {
                  icon: PieChartOutlined,
                  text: "Pie Chart",
                  link: "/pie",
                },
                {
                  icon: TimelineOutlined,
                  text: "Line Chart",
                  link: "/line",
                },
                {
                  icon: PublicOutlined,
                  text: "Geography Chart",
                  link: "/geography",
                },
              ]}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;
