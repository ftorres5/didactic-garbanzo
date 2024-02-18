/**
 * @jest-environment jsdom
 */
//imports
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

/**
 * What are some tests we could write for our application?
 * 1. Check that the title renders (by element)
 * 2. Check that one of the tasks renders (by text)
 * 3. Check that when clicked, a task gets the 'complete' class
 */
