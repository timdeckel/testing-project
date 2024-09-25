// src/__tests__/ToDoItem.test.tsx

import { render, screen } from '@testing-library/react';
import ToDoItem from '../components/ToDoItem'

describe('ToDoItem Component', () => {
  it('renders the task text', () => {
    const taskText = 'Buy groceries';

    // Render the component
    render(<ToDoItem task={taskText} />);

    // Find the rendered task
    const taskElement = screen.getByText(taskText);

    // Assert that the task is in the document
    expect(taskElement).toBeInTheDocument();
  });
});
