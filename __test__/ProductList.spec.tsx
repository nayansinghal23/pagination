import { screen, render } from '@testing-library/react'

import ProductList from '../components/ProductList';

describe('ProductList component', () => {
  const products: any[] = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description for product 1',
      images: ['https://example.com/product1.jpg']
    }
  ]

  it('renders the products', () => {
    render(<ProductList products={products} />)

    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Description for product 1')).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', expect.stringContaining('product1.jpg'));
    expect(image).toHaveAttribute('alt', 'product-1');
    expect(image).toHaveAttribute('loading', 'lazy');
  });
})
