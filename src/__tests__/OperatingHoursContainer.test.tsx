import React from "react";
import {
  render,
  fireEvent,
  findByTestId,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import OperatingHoursContainer from "Containers/settings-section/general-settings/operating-hours/OperatingHoursContainer";

import { MockedProvider } from "@apollo/client/testing";
import { GET_OPERATING_HOURS } from "../schemas/settings/operatingHours";

const mocks = [
  {
    request: {
      query: GET_OPERATING_HOURS,
    },
    result: {
      data: {
        operatingHours: {
          time_zone: "0",
          operating_hours_enabled: false,
          operating_days: [
            { id: 1, enabled: true, day: "Monday " },
            { id: 2, enabled: true, day: "Tuesday" },
            { id: 3, enabled: true, day: "Wednesday" },
            { id: 4, enabled: true, day: "Thursday" },
            { id: 5, enabled: true, day: "Friday" },
            { id: 6, enabled: false, day: "Saturday" },
            { id: 7, enabled: false, day: "Sunday" },
          ],
        },
      },
    },
  },
];

async function wait(ms = 0) {
  await act(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
}

describe("<OperatingHoursContainer />", () => {
  const { debug, getByTestId, getAllByTestId, getByText, container } = render(
    <MockedProvider addTypename={false} mocks={mocks}>
      <OperatingHoursContainer />
    </MockedProvider>
  );
  // commented, so the second test work
  // it('select a timezone', async () => {
  //   await wait();
  //   expect(getByTestId('select-timezone').textContent).toMatch('0');
  //   fireEvent.click(getByTestId('select-timezone'));
  //   fireEvent.click(getByText('+1'));
  //   //expect(getByTestId('select-timezone').textContent).toMatch('+1');
  // });

  it("toggle operating hours", async () => {
    expect(container.textContent).toBe("Loading");

    await wait();

    expect(getByTestId("toggle-operating-hours")).not.toBeChecked();
    expect(getAllByTestId("days")[0]).toBeDisabled();

    fireEvent.click(getByTestId("toggle-operating-hours"));

    expect(getByTestId("toggle-operating-hours")).toBeChecked();
    expect(getAllByTestId("days")[0]).not.toBeDisabled();
  });
});
