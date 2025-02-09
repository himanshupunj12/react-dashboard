import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useColorMode } from "./contexts/ColorModeContext";
import { themeSettings } from "./theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./views/AppLayout";
import Dashboard from "./views/dashboard";
import Team from "./views/team";
import Contacts from "./views/contacts";
import Invoices from "./views/invoices";
import Form from "./views/form";
import Bar from "./views/bar";
import Pie from "./views/pie";
import Line from "./views/line";
import FAQ from "./views/faq";
import Geography from "./views/geography";
import Calendar from "./views/calendar";
import PageNotFound from "./views/pageNotFound";

function App() {
  const { mode } = useColorMode();
  const theme = createTheme(themeSettings(mode), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/geography" element={<Geography />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
