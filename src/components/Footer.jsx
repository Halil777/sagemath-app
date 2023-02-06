import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { footer } from "../data/footer.mjs";
import {
  footerStyle,
  linkBtnActiveFooter,
  passiveLinkFooter,
} from "../style/footerStyle.mjs";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { linkData } from "../data/linkData.mjs";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import { Link, useLocation } from "react-router-dom";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import PhoneIcon from "@mui/icons-material/Phone";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation();
  return (
    <>
      <Box sx={footerStyle}>
        <Container>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
            pt={3}
          >
            <Typography color={"#fff"}>{t("getConnect")} :</Typography>
            <Stack direction={"row"} spacing={2}>
              <Tooltip title="FaceBook">
                <IconButton sx={{ color: "#fff" }}>
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Twitter">
                <IconButton sx={{ color: "#fff" }}>
                  <TwitterIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Google">
                <IconButton sx={{ color: "#fff" }}>
                  <GoogleIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Instagram">
                <IconButton sx={{ color: "#fff" }}>
                  <InstagramIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="LinkedIn">
                <IconButton sx={{ color: "#fff" }}>
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton sx={{ color: "#fff" }}>
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Container>
        <Divider sx={{ marginTop: "20px" }} color="#F78166" />
        <Divider color="#F78166" />
        <Container>
          <Grid container pt={3} pb={3}>
            {footer.map((item, i) => {
              return (
                <Grid key={`footer_title_key${i}`} item sm={3}>
                  <Typography variant="h5" color="#F78166">
                    {t(item.title)}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
          <Grid container pb={3}>
            <Grid item sm={3}>
              <Stack>
                <Typography
                  width="85%"
                  sx={{
                    lineHeight: 2,
                    color: "#fff",
                    textTransform: "uppercase",
                  }}
                >
                  {t("titu")}
                </Typography>
                <Typography
                  width="85%"
                  sx={{
                    lineHeight: 2,
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {t("department")}
                </Typography>
              </Stack>
            </Grid>
            <Grid item sm={3}>
              <Stack spacing={1}>
                <Typography color="#fff">React js</Typography>
                <Typography color="#fff">Vite Latest</Typography>
                <Typography color="#fff">Node JS</Typography>
                <Typography color="#fff">SCSS</Typography>
              </Stack>
            </Grid>
            <Grid item sm={3}>
              <Stack spacing={1}>
                {linkData.map((item, i) => {
                  return (
                    <Link
                      to={item.link}
                      style={{
                        ...(item.link === location.pathname
                          ? linkBtnActiveFooter
                          : passiveLinkFooter),
                      }}
                      key={`link_key${i}`}
                    >
                      <Typography>{t(item.title)}</Typography>
                    </Link>
                  );
                })}
              </Stack>
            </Grid>
            <Grid item sm={3}>
              <Stack spacing={1}>
                <Stack direction={"row"} spacing={2} alignItems="center">
                  <IconButton sx={{ color: "#fff" }}>
                    <HomeIcon />
                  </IconButton>
                  <Typography color="#fff">
                    Ashgabat shaher , Taslama Koche, 101 jayy
                  </Typography>
                </Stack>
                <Stack direction={"row"} alignItems="center" spacing={1}>
                  <IconButton sx={{ color: "#fff" }}>
                    <EmailIcon />
                  </IconButton>
                  <Typography color="#fff">
                    akjemalrahmankulova@gmail.com
                  </Typography>
                </Stack>
                <Stack direction={"row"} alignItems="center" spacing={1}>
                  <IconButton sx={{ color: "#fff" }}>
                    <PhoneIcon />
                  </IconButton>
                  <Typography color="#fff">+993 61 010101</Typography>
                </Stack>
                <Stack direction={"row"} alignItems="center" spacing={1}>
                  <IconButton sx={{ color: "#fff" }}>
                    <LocalPrintshopIcon />
                  </IconButton>
                  <Typography color="#fff">+993 (112) 12- 12 - 12</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Stack direction="row" justifyContent={"center"}>
            <Typography color="#fff">
              © 2022 - 2023 Copyright && Powered By Rahmankulova Akjemal
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
