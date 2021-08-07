export type Hotel = {
  id: string;
  property: Property;
  offer: Offer;
};

export type Property = {
  propertyId: string;
  title: string;
  address: string[];
  previewImage: PreviewImage;
  rating: Rating;
};

export type PreviewImage = {
  url: string;
  caption: string;
  imageType: ImageType;
};

export enum ImageType {
  PRIMARY = 'PRIMARY',
}

export type Rating = {
  ratingValue: number;
  ratingType: RatingType;
};

export enum RatingType {
  SELF = 'self',
  STAR = 'STAR',
}

export type Offer = {
  promotion: Promotion;
  name: string;
  displayPrice: Price;
  savings?: Price;
  cancellationOption: CancellationOption;
};

export type Promotion = {
  title: string;
  type: PromotionType;
};

export enum PromotionType {
  MEMBER = 'MEMBER',
}

export type Price = {
  amount: number;
  currency: Currency;
};

export enum Currency {
  AUD = 'AUD',
}

export type CancellationOption = {
  cancellationType: CancellationType;
};

export enum CancellationType {
  FREE_CANCELLATION = 'FREE_CANCELLATION',
  NOT_REFUNDABLE = 'NOT_REFUNDABLE',
}

/**
 * "id": "cxd650nuyo",
      "property": {
        "propertyId": "P107801",
        "title": "Courtyard by Marriott Sydney-North Ryde",
        "address": [
          "7-11 Talavera Rd",
          "North Ryde"
        ],
        "previewImage": {
          "url": "https://unsplash.it/145/125/?random",
          "caption": "Image of Courtyard by Marriott Sydney-North Ryde",
          "imageType": "PRIMARY"
        },
        "rating": {
          "ratingValue": 4.5,
          "ratingType": "self"
        }
      },
      "offer": {
        "promotion": {
          "title": "Exclusive Deal",
          "type": "MEMBER"
        },
        "name": "Deluxe Balcony Room",
        "displayPrice": {
          "amount": 329.000000000,
          "currency": "AUD"
        },
        "savings": {
          "amount": 30.000000000,
          "currency": "AUD"
        },
        "cancellationOption": {
          "cancellationType": "NOT_REFUNDABLE"
        }
      }
 */
