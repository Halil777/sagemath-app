import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import ReactLoading from "react-loading";

const Home = () => {
  return (
    <>
      {/* <Stack
        direction="row"
        alignItems={"center"}
        height="80vh"
        justifyContent={"center"}
      >
        <ReactLoading type={"balls"} color={"red"} height={67} width={75} />
      </Stack> */}
      <Stack direction={"row"} justifyContent="center">
        <Typography variant="h1">What is SageMath ?</Typography>
      </Stack>
    </>
  );
};

export default Home;
