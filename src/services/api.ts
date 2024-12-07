export const API_HOST = "http://localhost:5096";
const V1_PREFIX = `${API_HOST}/api/v1`;

export const ENDPOINTS = {
  v1: {
    // auth: `${v1_prefix}`,
    currency: `${V1_PREFIX}/currencies`,
    itemCategory: `${V1_PREFIX}/categories`,
    item: `${V1_PREFIX}/items`,
    saleInvoice: `${V1_PREFIX}/sales`,
  },
};
