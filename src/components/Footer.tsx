import {AppBar, Box, Link, Toolbar, Typography} from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ position: "sticky", bottom: 0, width: "100%", marginTop: "24px" }}>
      <AppBar position="static" color={"default"}>
        <Toolbar>
          <Box mx={2}>
            <Typography>2023</Typography>
          </Box>
          <Box mx={2}>
            <Link href={"https://arcadia.dev"}  target={"_blank"}>Arcadia</Link>
          </Box>
          <Box mx={2}>
            <Link href={"https://www.linkedin.com/in/m%C3%A1rk-kalinovits-200a4758/"}  target={"_blank"}>Created by</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
