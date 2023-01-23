import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { linkData } from "../data/linkData.mjs";
import { linkBtnActive, PaperStyle, passiveLink } from "../style/navbar.mjs";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <Paper sx={PaperStyle}>
        <Container maxWidth="lg">
          <Box>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems="center"
            >
              <Stack>
                <Typography>Logo</Typography>
              </Stack>
              <Stack direction="row" spacing={3}>
                {linkData.map((item, i) => {
                  return (
                    <Link
                      to={item.link}
                      style={{
                        ...(item.link === location.pathname
                          ? linkBtnActive
                          : passiveLink),
                      }}
                      key={`link_key${i}`}
                    >
                      <Typography>{item.title}</Typography>
                    </Link>
                  );
                })}
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <IconButton sx={{ color: "#fff" }}>
                  <AcUnitIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Navbar;
