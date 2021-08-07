import { render } from '@testing-library/react';
import { RatingType } from 'types/Hotel';
import { RatingBar } from '..';

describe('<HotelCard />', () => {
  const mockRating = {
    ratingValue: 4.5,
    ratingType: RatingType.SELF,
  };

  beforeAll(() => {});

  it('should render and match the snapshot', () => {
    //act
    const component = render(<RatingBar rating={mockRating}></RatingBar>);

    //assert
    expect(component.baseElement).toMatchSnapshot();
  });
});
