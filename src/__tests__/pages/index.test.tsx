import { render } from "@testing-library/react";
import { describe } from "node:test";
import React from "react";
import Home from "../../pages/index";
import RenderChip from "../../components/render-chip";
import RenderCard from "../../components/RenderCard";

describe("Home Page", () => {
  const category = {
    categories: ["food"],
    created_at: "2020-01-05 13:42:18.823766",
    icon_url: "https://api.chucknorris.io/img/avatar/chuck-norris.png",
    id: "MjtEesffSd6AH3Pxbw7_lg",
    updated_at: "2020-01-05 13:42:18.823766",
    url: "https://api.chucknorris.io/jokes/MjtEesffSd6AH3Pxbw7_lg",
    value:
      "When Chuck Norris played Chopped from Food Network, he finished his food in 1 millisecond, and instantly wins every dish. You didn't see him play because the episode is secret.",
  };

  it("renders home page", () => {
    render(<Home />);
  });
  it("renders Chip Component with its props", () => {
    render(<RenderChip label="Test Chip" />);
  });

  it("renders Card Component with its props", () => {
    render(<RenderCard category={category} />);
  });
});
