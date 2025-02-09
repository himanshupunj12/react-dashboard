import {
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutlined,
  SearchOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import { tokens } from "../../theme";
import { useColorMode } from "../../contexts/ColorModeContext";

const Topbar = (props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { mode, toggleColorMode } = useColorMode();
  return (
    <Stack
      sx={{
        gridRow: "auto",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.8rem 1.2rem",
      }}
      direction="row"
    >
      <TextField
        variant="standard"
        size="small"
        hiddenLabel
        placeholder="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlined />
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
        sx={{
          "&": {
            backgroundColor: colors.primary[400],
            padding: "10px 20px",
            borderRadius: "5px",
          },
        }}
      ></TextField>
      <Stack direction="row" alignItems="center">
        <IconButton onClick={toggleColorMode}>
          {mode === "dark" && <LightModeOutlined />}
          {mode === "light" && <DarkModeOutlined />}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Topbar;
