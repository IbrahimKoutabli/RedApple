import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import ShortcutsContainer from "Containers/settings-section/general-settings/shortcuts/ShortcutsContainer";
import ShortcutModal from "Components/settings/shortcuts/ShortcutModal";

describe("display shortcut modal and add shortcut", () => {
  it("fire display add shortcut modal", async () => {
    const { debug, getByTestId, container } = render(<ShortcutsContainer />);

    const openShortcutModalBtn = getByTestId("open-shortcut-modal");

    await waitFor(() => fireEvent.click(openShortcutModalBtn));

    //expect(getByTestId('shortcut-modal')).toBeInTheDocument();

    //debug();
  });

  // it('display modal', async () => {
  //   const { debug, getByTestId } = render(<ShortcutModal />);
  //   const container = document.body;

  //   getByTestId('shortcut-modal'); // WORKS !

  //   //waitFor(()=>{ container }).then(() => { expect(modal).toBeVisible() })
  //   // await waitFor(() => {
  //   //   container;
  //   // }).then(() => {
  //   //   getByTestId('shortcut-modal');
  //   // });
  //   debug();
  // });
});
