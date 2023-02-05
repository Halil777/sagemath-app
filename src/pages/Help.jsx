import { Divider, Stack } from "@mui/material";
import React from "react";
import EnglishBooks from "../Layout/EnglishBooks";
import RussianBooks from "../Layout/RussianBooks";
import TurkmenBooks from "../Layout/TurkmenBooks";

const Help = () => {
  return (
    <>
      <EnglishBooks />
      <Stack mt={5}>
        <Divider />
        <Divider />
        <Divider />
      </Stack>
      <RussianBooks />
      <Stack mt={5}>
        <Divider />
        <Divider />
        <Divider />
      </Stack>
      <TurkmenBooks />
    </>
  );
};

export default Help;
