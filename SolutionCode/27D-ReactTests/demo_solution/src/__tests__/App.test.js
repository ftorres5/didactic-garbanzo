/**
 * @jest-environment jsdom
 */
//imports
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

/**
 * What are some tests we could write for our application?
 */

describe("App component", () => {
  test("displays the title", () => {
    //render the component
    render(<App />);

    //get the title
    const title = screen.getByRole("heading", { name: /To Do List/i });

    //assert that is is displayed
    expect(title).toBeInTheDocument();
  });

  test("displays the tasks", () => {
    //render the component
    render(<App />);

    //find the task 'Start Block 27A Workshop'
    const task = screen.getByText("Start Block 27A Workshop");

    //assert that it is present
    expect(task).toBeInTheDocument();
  });

  test("it gets a class name of `complete` when clicked", () => {
    //render the component
    render(<App />);

    //find the task 'Start Block 27A Workshop'
    let task = screen.getByText("Start Block 27A Workshop");

    //assert that it does not have the class name of complete present
    expect(task).not.toHaveClass("complete");

    //click the task
    fireEvent.click(task);

    //get the new task
    task = screen.getByText("Start Block 27A Workshop");

    //assert that it does have the class name of complete present
    expect(task).toHaveClass("complete");
  });
});
