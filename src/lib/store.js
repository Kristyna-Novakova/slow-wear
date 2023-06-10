import { create } from 'zustand';
import jsonData from '../categories.json';

export const useCatalogue = create((set) => jsonData);
export const useShoppingCart = create((set, get) => ({
  cartItems: [
    {
      categoryId: 'topy',
      productId: '01',
      size: 'S',
      quantity: 3,
    },
    {
      categoryId: 'topy',
      productId: '02',
      size: 'L',
      quantity: 1,
    },
  ],
  addToCart: ({ categoryId, productId, size, quantity }) =>
    set((prevState) => {
      const newCartItems = [...prevState.cartItems];
      const productIndex = findProductIndex(
        prevState.cartItems,
        categoryId,
        productId,
        size,
      );

      if (productIndex === -1) {
        newCartItems.push({ categoryId, productId, size, quantity });
      } else {
        newCartItems.splice(productIndex, 1, {
          categoryId,
          productId,
          size,
          quantity,
        });
      }

      return { ...prevState, cartItems: newCartItems };
    }),
  removeFromCart: ({ categoryId, productId, size, quantity }) =>
    set((prevState) => {
      const newCartItems = [...prevState.cartItems];
      const productIndex = findProductIndex(
        prevState.cartItems,
        categoryId,
        productId,
        size,
      );

      if (productIndex >= 0) {
        const product = newCartItems[productIndex];

        if (product.quantity <= quantity) {
          newCartItems.splice(productIndex, 1);
        } else {
          newCartItems.splice(productIndex, 1, {
            categoryId,
            productId,
            size,
            quantity: product.quantity - quantity,
          });
        }
      }

      return { ...prevState, cartItems: newCartItems };
    }),
  getProduct: ({ categoryId, productId, size }) =>
    findProduct(get().cartItems, categoryId, productId, size),
  getProductsAmount: () => get().cartItems.length,
}));

const findProduct = (cartItems, categoryId, productId, size) =>
  cartItems.find(
    (item) =>
      item.categoryId === categoryId &&
      item.productId === productId &&
      item.size === size,
  );

const findProductIndex = (cartItems, categoryId, productId, size) =>
  cartItems.findIndex(
    (item) =>
      item.categoryId === categoryId &&
      item.productId === productId &&
      item.size === size,
  );
