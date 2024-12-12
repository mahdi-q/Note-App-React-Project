import { fireEvent, render, screen } from "../../test-utils";
import NoteApp from "../NoteApp";
import { expect, test } from "vitest";

function addNote(notes) {
  const inputTitle = screen.getByPlaceholderText(/note title/i);
  const inputDescription = screen.getByPlaceholderText(/note description/i);
  const addButton = screen.getByRole("button", { name: /add/i });

  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, { target: { value: note.description } });

    fireEvent.click(addButton);
  });
}

test("Note App Test #1 : should inputs be empty after submit", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "testing title",
      description: "testing description",
    },
  ]);

  const inputTitle = screen.getByPlaceholderText(/note title/i);
  const inputDescription = screen.getByPlaceholderText(/note description/i);

  expect(inputTitle.value).toBe("");
  expect(inputDescription.value).toBe("");
});

test("Note App Test #2 : should add multiple items", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "testing title one",
      description: "testing description one",
    },
    {
      title: "testing title two",
      description: "testing description two",
    },
    {
      title: "testing title three",
      description: "testing description three",
    },
  ]);

  const divElements = screen.getAllByTestId("note item");

  expect(divElements.length).toBe(3);
});

test("Note App Test #3 : should not have active class when initially rendered", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "testing title",
      description: "testing description",
    },
  ]);

  const divElement = screen.getByTestId("note item");

  expect(divElement).not.toHaveClass("completed");
});

test("Note App Test #4 : should have active class when checkbox clicked", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "testing title",
      description: "testing description",
    },
  ]);

  const divElement = screen.getByTestId("note item");
  const checkbox = screen.getByRole("checkbox");

  fireEvent.click(checkbox);

  expect(divElement).toHaveClass("completed");
});

test("Note App Test #5 : should delete item when remove button clicked", () => {
  render(<NoteApp sortBy="latest" />);

  addNote([
    {
      title: "testing title",
      description: "testing description",
    },
  ]);

  const divElement = screen.getByTestId("note item");
  const remove = screen.getByTestId("remove");

  fireEvent.click(remove);

  expect(divElement).not.toBeInTheDocument();
});
