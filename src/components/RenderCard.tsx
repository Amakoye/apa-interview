import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Category } from "@/pages";
import React from "react";

export default function RenderCard({ category }: RenderCardProps) {
  return (
    <React.Fragment>
      <Grid item lg={6} md={6} sm={12}>
        <Stack direction="row">
          <Box
            sx={{
              width: "30%",
            }}
          >
            <img
              src={`${category?.icon_url}`}
              style={{
                height: "100%",
                width: "100",
                objectFit: "contain",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Typography variant="h6">
              {category?.categories?.length && category?.categories[0]}
            </Typography>
            <Typography variant="h6">{category?.created_at}</Typography>
            <Typography>ID: {category?.id}</Typography>
            <Typography>Updated: {category?.updated_at}</Typography>
            <Typography>Updated: {category?.value}</Typography>
          </Box>
        </Stack>
      </Grid>
    </React.Fragment>
  );
}

type RenderCardProps = {
  category: Category;
};
