export const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#!',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#!',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#!' },
            { name: 'Dresses', href: '#!' },
            { name: 'Pants', href: '#!' },
            { name: 'Denim', href: '#!' },
            { name: 'Sweaters', href: '#!' },
            { name: 'T-Shirts', href: '#!' },
            { name: 'Jackets', href: '#!' },
            { name: 'Activewear', href: '#!' },
            { name: 'Browse All', href: '#!' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#!' },
            { name: 'Wallets', href: '#!' },
            { name: 'Bags', href: '#!' },
            { name: 'Sunglasses', href: '#!' },
            { name: 'Hats', href: '#!' },
            { name: 'Belts', href: '#!' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#!' },
            { name: 'My Way', href: '#!' },
            { name: 'Re-Arranged', href: '#!' },
            { name: 'Counterfeit', href: '#!' },
            { name: 'Significant Other', href: '#!' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#!',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#!',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#!' },
            { name: 'Pants', href: '#!' },
            { name: 'Sweaters', href: '#!' },
            { name: 'T-Shirts', href: '#!' },
            { name: 'Jackets', href: '#!' },
            { name: 'Activewear', href: '#!' },
            { name: 'Browse All', href: '#!' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#!' },
            { name: 'Wallets', href: '#!' },
            { name: 'Bags', href: '#!' },
            { name: 'Sunglasses', href: '#!' },
            { name: 'Hats', href: '#!' },
            { name: 'Belts', href: '#!' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#!' },
            { name: 'Counterfeit', href: '#!' },
            { name: 'Full Nelson', href: '#!' },
            { name: 'My Way', href: '#!' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#!' },
    { name: 'Stores', href: '#!' },
  ],
};

export const favorites = [
  {
    id: 1,
    name: 'Black Basic Tee',
    price: '$32',
    href: '#!',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg',
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: 'Off-White Basic Tee',
    price: '$32',
    href: '#!',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg',
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: 'Mountains Artwork Tee',
    price: '$36',
    href: '#!',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg',
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
] as const;

// credits goes to https://twitter.com/WrocTypeScript/status/1306296710407352321
export type TupleUnion<U extends string, R extends any[] = []> = {
  [S in U]: Exclude<U, S> extends never
    ? [...R, S]
    : TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];

// Footer navigation
export const footerNavigation = {
  shop: [
    { name: 'Bags', href: '#!' },
    { name: 'Tees', href: '#!' },
    { name: 'Objects', href: '#!' },
    { name: 'Home Goods', href: '#!' },
    { name: 'Accessories', href: '#!' },
  ],
  company: [
    { name: 'Who we are', href: '#!' },
    { name: 'Sustainability', href: '#!' },
    { name: 'Press', href: '#!' },
    { name: 'Careers', href: '#!' },
    { name: 'Terms & Conditions', href: '#!' },
    { name: 'Privacy', href: '#!' },
  ],
  account: [
    { name: 'Manage Account', href: '#!' },
    { name: 'Returns & Exchanges', href: '#!' },
    { name: 'Redeem a Gift Card', href: '#!' },
  ],
  connect: [
    { name: 'Contact Us', href: '#!' },
    { name: 'Twitter', href: '#!' },
    { name: 'Instagram', href: '#!' },
    { name: 'Pinterest', href: '#!' },
  ],
} as const;
