import { render } from '@testing-library/react';
import App from './App';

test('renders swagger-ui', () => {
  const { container } = render(<App />);
  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  const swaggerUIElement = container.getElementsByClassName("swagger-ui")

  expect(swaggerUIElement.length).toBe(1);
});
