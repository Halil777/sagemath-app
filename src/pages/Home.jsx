import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <Stack direction={"row"} pt={3} pb={3} justifyContent="center">
        <Typography variant="h3">{t("what")} ?</Typography>
      </Stack>
      <Grid container>
        <Grid item sm={6}>
          <Grid item sm={6}></Grid>
          <Typography>{t("sage")}</Typography>
        </Grid>
        <Grid item sm={6}></Grid>
        <Grid item sm={6}></Grid>
        <Grid item sm={6} pt={2} pb={3}>
          <Typography>{t("sage1")}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
