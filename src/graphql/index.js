import client from "./client";
import blogQuery from "./query/blog";
import blogsQuery from "./query/blogs";
import productQuery from "./query/product";
import customerQuery from "./query/customer";
import productsQuery from "./query/products";
import collectionQuery from "./query/collection";
import collectionsQuery from "./query/collections";
import addressDelete from "./mutation/addressDelete";
import addressCreate from "./mutation/addressCreate";
import customerCreate from "./mutation/customerCreate";
import customerUpdate from "./mutation/customerUpdate";
import createCheckout from "./mutation/checkoutCreate";
import customerAccessTokenCreate from "./mutation/customerAccessTokenCreate";

export {
  client,
  blogQuery,
  blogsQuery,
  productQuery,
  customerQuery,
  productsQuery,
  customerUpdate,
  createCheckout,
  addressCreate,
  addressDelete,
  customerCreate,
  collectionQuery,
  collectionsQuery,
  customerAccessTokenCreate,
};
