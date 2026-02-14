import { render, screen } from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"

import Pagination from "@/components/Pagination"

describe('Pagination', () => {
    const pages = 4, onPageChange = vitest.fn(), limit = 10;
    let page = 1, skip = 0;

  it('should render pagination buttons correctly', async () => {
    const user = userEvent.setup();
    const { rerender } = render(<Pagination pages={pages} page={page} onPageChange={onPageChange} />);

    const leftNavigationButton = screen.getByText('<');
    const rightNavigationButton = screen.getByText('>');

    // Test for 1st page
    expect(page).toBe(1);
    expect(skip).toBe(0);
    expect(leftNavigationButton).toBeDisabled();
    expect(rightNavigationButton).not.toBeDisabled();

    // Navigate to the 2nd page
    const secondButton = screen.getByText('2');
    await user.click(secondButton);

    expect(onPageChange).toHaveBeenCalledTimes(1);
    
    skip = onPageChange.mock.calls[0][0] * limit;
    page = (skip / limit) + 1;

    rerender(<Pagination pages={pages} page={page} onPageChange={onPageChange} />);

    expect(skip).toBe(10);
    expect(page).toBe(2);
    expect(secondButton).toHaveClass('bg-gray-200');
    expect(leftNavigationButton).not.toBeDisabled();
    
    // Navigate to 3rd page
    const thirdButton = screen.getByText('3');
    await user.click(thirdButton);
    
    expect(onPageChange).toHaveBeenCalledTimes(2);
    
    skip = onPageChange.mock.calls[1][0] * limit;
    page = (skip / limit) + 1;
    
    rerender(<Pagination pages={pages} page={page} onPageChange={onPageChange} />);
    
    expect(skip).toBe(20);
    expect(page).toBe(3);
    expect(thirdButton).toHaveClass('bg-gray-200');
    
    // Navigate to last page by clicking right icon
    const fourthButton = screen.getByText('4')
    await user.click(rightNavigationButton);
    
    expect(onPageChange).toHaveBeenCalledTimes(3);
    
    skip = onPageChange.mock.calls[2][0] * limit;
    page = (skip / limit) + 1;
    
    rerender(<Pagination pages={pages} page={page} onPageChange={onPageChange} />)

    expect(skip).toBe(30);
    expect(page).toBe(pages);
    expect(fourthButton).toHaveClass('bg-gray-200');
    expect(rightNavigationButton).toBeDisabled();
  })
})
