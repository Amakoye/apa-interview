import { render } from "@testing-library/react";

import React from "react";
import RenderChip from "../../components/render-chip";

describe("Render Chip Component", () => {
  const label = "Test label";
  it("renders with provided props", () => {
    render(<RenderChip {...{ label }} />);
  });
});
