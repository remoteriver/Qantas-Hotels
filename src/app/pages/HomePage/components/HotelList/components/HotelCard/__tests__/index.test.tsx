import { render } from '@testing-library/react';
import { createRenderer } from 'react-test-renderer/shallow';
import {
  CancellationType,
  Currency,
  ImageType,
  PromotionType,
  RatingType,
} from 'types/Hotel';
import { HotelCard } from '..';

const renderer = createRenderer();

describe('<HotelCard />', () => {
  const mockHotel = {
    id: 'cxd650nuyo',
    property: {
      propertyId: 'P107801',
      title: 'Courtyard by Marriott Sydney-North Ryde',
      address: ['7-11 Talavera Rd', 'North Ryde'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
        imageType: ImageType.PRIMARY,
      },
      rating: {
        ratingValue: 4.5,
        ratingType: RatingType.SELF,
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: PromotionType.MEMBER,
      },
      name: 'Deluxe Balcony Room',
      displayPrice: {
        amount: 329.0,
        currency: Currency.AUD,
      },
      savings: {
        amount: 30.0,
        currency: Currency.AUD,
      },
      cancellationOption: {
        cancellationType: CancellationType.NOT_REFUNDABLE,
      },
    },
  };

  const mockFn = jest.fn();

  beforeAll(() => {});

  it('should render and match the snapshot', () => {
    //act
    renderer.render(
      <HotelCard hotel={mockHotel} removeHandler={mockFn}></HotelCard>,
    );
    const renderedOutput = renderer.getRenderOutput();

    //assert
    expect(renderedOutput).toMatchSnapshot();
  });
});
