import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import VisitorsContainer from "Containers/settings-section/general-settings/visitors/VisitorsContainer";

describe("visitor works well", () => {
  const { debug, getByTestId } = render(<VisitorsContainer />);

  test("toggle High load dashboard", async () => {
    const toggleHighLoad = getByTestId("toggle-high-load");
    await waitFor(() => fireEvent.click(toggleHighLoad));

    expect(getByTestId("toggle-high-load")).not.toBeChecked();
  });

  test("block visitor by ip", async () => {
    const blockVisitorBtn = getByTestId("block-visitor");

    const bannedNumberBefore = parseInt(
      getByTestId("banned-number").textContent
    );
    await waitFor(() => fireEvent.click(blockVisitorBtn));

    expect(parseInt(getByTestId("banned-number").textContent)).toEqual(
      bannedNumberBefore + 1
    );
  });
});
