import {
  Box,
  Container,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { linkData } from "../data/linkData.mjs";
import { linkBtnActive, PaperStyle, passiveLink } from "../style/navbar.mjs";
import { Link, useLocation } from "react-router-dom";
import logo from "/images/logo.svg";
import { useTranslation } from "react-i18next";
import i18n from "../utils/i18n.mjs";

const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [lng, setLng] = useState("tm");

  useEffect(() => {
    if (lng === "tm" || lng === "" || lng === undefined) {
      i18n.changeLanguage("tm");
      localStorage.setItem("lng", "tm");
    } else if (lng === "en") {
      i18n.changeLanguage("en");
      localStorage.setItem("lng", "en");
    } else {
      i18n.changeLanguage("ru");
      localStorage.setItem("lng", "ru");
    }
  }, [lng]);

  const handleChange = (event) => {
    setLng(event.target.value);
  };
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
                <img src={logo} style={{ width: "230px" }} alt="logo" />
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
                      <Typography>{t(item.title)}</Typography>
                    </Link>
                  );
                })}
              </Stack>
              <Stack direction={"row"} spacing={1}>
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                  }}
                >
                  <Select
                    sx={{ pl: 2, color: "lightGray" }}
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={lng}
                    onChange={handleChange}
                    label="Age"
                    inputProps={{ IconComponent: () => null }}
                  >
                    <MenuItem value={"tm"}>TM</MenuItem>
                    <MenuItem value={"en"}>Eng</MenuItem>
                    <MenuItem value={"ru"}>RU </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Paper>
    </>
  );
};

export default Navbar;
