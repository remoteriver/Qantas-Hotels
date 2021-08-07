import { render } from '@testing-library/react';
import { createRenderer } from 'react-test-renderer/shallow';
import { Header } from '..';

const renderer = createRenderer();

describe('<HotelCard />', () => {
  beforeAll(() => {});

  it('should render and match the snapshot', () => {
    //act
    const component = render(<Header></Header>);

    //assert
    expect(component.baseElement).toMatchSnapshot();
  });
});
