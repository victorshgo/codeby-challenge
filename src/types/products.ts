export interface ProductsProps {
  value: number;
  items: {
    uniqueId: string;
    id: string;
    productId: string;
    productRefId: null;
    refId: null;
    ean: string;
    name: string;
    skuName: string;
    modalType: null;
    parentItemIndex: null;
    parentAssemblyBinding: null;
    assemblies: [];
    priceValidUntil: string;
    tax: number;
    price: number;
    listPrice: number;
    manualPrice: null;
    sellingPrice: number;
    rewardValue: 0;
    isGift: boolean;
    additionalInfo: {
      brandName: string;
      brandId: string;
      offeringInfo: null;
      offeringType: null;
      offeringTypeId: null;
    };
    preSaleDate: null;
    productCategoryIds: string;
    productCategories: {
      "29": string;
    };
    quantity: number;
    seller: string;
    sellerChain: string[];
    imageUrl: string;
    detailUrl: string;
    components: [];
    bundleItems: [];
    attachments: [];
    attachmentOfferings: [];
    offerings: [];
    priceTags: [
      {
        name: string;
        value: number;
        rawValue: number;
        isPercentual: boolean;
        identifier: string;
      }
    ];
    availability: string;
    measurementUnit: string;
    unitMultiplier: number;
    manufacturerCode: null;
  }[];
  totalizers: {
    id: string;
    name: string;
    value: number;
  }[];
  itemMetadata: {
    items: {
      id: string;
      seller: string;
      name: string;
      skuName: string;
      productId: string;
      refId: null;
      ean: string;
      imageUrl: string;
      detailUrl: string;
      assemblyOptions: [];
    }[];
  };
}
