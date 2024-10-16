import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import RenderChip from "../components/render-chip";
import { useEffect, useState } from "react";
import axios from "axios";
import RenderCard from "../components/RenderCard";
import React from "react";

export default function Home() {
  const theme = useTheme();
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<Category[]>();
  const [category, setCategory] = useState("");

  useEffect(() => {
    try {
      axios
        .get("https://api.chucknorris.io/jokes/categories")
        .then((res) => setCategories(res.data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    try {
      if (category) {
        axios
          .get(`https://api.chucknorris.io/jokes/search?query=${category}`)
          .then((res) => setData(res.data.result));
      }
    } catch (error) {
      console.error(error);
    }
  }, [category]);

  return (
    <React.Fragment>
      <Stack alignItems={"center"}>
        <Stack
          direction={"row"}
          spacing={theme.spacing(1)}
          justifyContent={"center"}
          py={theme.spacing(5)}
        >
          {categories.map((category) => (
            <RenderChip
              key={category}
              label={category}
              setCategory={setCategory}
            />
          ))}
        </Stack>

        <Grid container spacing={theme.spacing(4)}>
          {data?.length &&
            data?.map((category, index) => (
              <RenderCard key={index} {...{ category }} />
            ))}
        </Grid>
      </Stack>
    </React.Fragment>
  );
}

export type Category = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};
