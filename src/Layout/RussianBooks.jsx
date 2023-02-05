import React from "react";
import { Divider, Grid, Stack, Tooltip } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { bookData } from "../data/bookData.mjs";
import firstBook from "/images/firstBook.png";
import secondBook from "/images/secondBook.png";

const RussianBooks = () => {
  return (
    <>
      <Typography variant="h3" sx={{ color: "#13233A" }} pt={3}>
        Книги по математике на русском языке
        {/* Türkmen dilindäki Matematika kitaplary */}
      </Typography>
      <Grid container>
        {bookData.map((item, i) => {
          return (
            <Grid item sm={3} spacing={3} pt={7} key={`book_download_key$`}>
              <Card sx={{ maxWidth: "90%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={item.id === 0 ? firstBook : secondBook}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Tooltip title={item.title}>
                      <Typography>{item.title.slice(0, 25)}...</Typography>
                    </Tooltip>
                  </CardContent>
                </CardActionArea>
                <Divider />
                <Divider />
                <Stack direction={"row"} justifyContent="center">
                  <CardActions>
                    <a
                      style={{
                        textDecoration: "none",
                        color: "#F78166",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                      href={item.link}
                    >
                      Donwload book
                    </a>
                  </CardActions>
                </Stack>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default RussianBooks;
