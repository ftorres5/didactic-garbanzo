/**
 * @jest-environment jsdom
 */

import { render, fireEvent, getByLabelText } from "@testing-library/react";
import Checkbox from "../Checkbox";

// This test case is provided for you. Reference this test case
// to complete the following one!
test("Checkbox initially renders as off", () => {
  const { queryByLabelText } = render(<Checkbox labelOn="On" labelOff="Off" />);
  expect(queryByLabelText(/off/i)).toBeTruthy();
});

// TODO: Complete this test!
test("Checkbox toggles between labels when clicked", () => {
  // 1. Render the component with "On" and "Off" as the labels.
  const { queryByLabelText, getByLabelText } = render(
    <Checkbox labelOn="On" labelOff="Off" />
  );
  // 2. Expect the label to be "Off" initially.
  expect(queryByLabelText(/off/i)).toBeTruthy();
  // 3. Click the checkbox by using `fireEvent.click` and `getByLabelText`.
  fireEvent.click(getByLabelText(/off/i));
  // 4. Expect the label to be "On" after the click event.
  expect(queryByLabelText(/on/i)).toBeTruthy();
  // 5. Click the checkbox again.
  fireEvent.click(getByLabelText(/on/i));
  // 6. Expect the label to be "Off" again.
  expect(queryByLabelText(/off/i)).toBeTruthy();
});
