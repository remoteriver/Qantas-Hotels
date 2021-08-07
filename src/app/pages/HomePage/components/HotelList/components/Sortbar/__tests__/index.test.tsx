import { render } from '@testing-library/react';
import { SortBy } from 'app/pages/HomePage/types';
import { createRenderer } from 'react-test-renderer/shallow';
import { Sortbar } from '..';

describe('<HotelCard />', () => {
  beforeAll(() => {});

  const mockFunction = jest.fn();

  it('should render and match the snapshot', () => {
    //act
    const component = render(
      <Sortbar
        sortby={SortBy.PRICE_LOW_HIGH}
        handleSort={mockFunction}
      ></Sortbar>,
    );

    //assert
    expect(component.baseElement).toMatchSnapshot();
  });
});
