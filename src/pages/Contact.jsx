import React from "react";
import contact from "/images/contact.avif";
import {
  Box,
  Button,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { contactStyle } from "../style/contactStyle.mjs";
import { Stack } from "@mui/system";

const Contact = () => {
  return (
    <>
      <Box sx={contactStyle}>
        <Grid container>
          <Grid item sm={6}>
            <Box p={4}>
              <img
                src={contact}
                style={{ width: "100%" }}
                alt="contact picture"
              />
            </Box>
          </Grid>
          <Grid item sm={6} pt={2}>
            <Stack>
              <Typography variant="h4">Talk with our team</Typography>
            </Stack>
            <Grid container spacing={{ xs: 2, md: 3 }} pt={3} pr={3}>
              <Grid item sm={6}>
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  type={"number"}
                  fullWidth
                />
              </Grid>
              <Grid item sm={12}>
                <Typography pb={1} color="#F78166">
                  What would you like to discuss ?
                </Typography>
                <TextareaAutosize
                  aria-label="minimum height"
                  minRows={7}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adip ..."
                  style={{ width: "100%" }}
                />
              </Grid>
              <Grid item sm={12}>
                <Stack
                  pt={1}
                  pb={3}
                  direction="row"
                  justifyContent={"flex-end"}
                >
                  <Button sx={{ background: "#13233A" }} variant="contained">
                    Submit
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
