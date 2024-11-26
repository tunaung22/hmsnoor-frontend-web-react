const API_HOST = "http://localhost:5096";
const v1_prefix = `${API_HOST}/api/v1`;

export const endpoints = {
    v1: {
        // auth: `${v1_prefix}`,
        currency: `${v1_prefix}/currencies`,
        itemCategory: `${v1_prefix}/categories`,
        item: `${v1_prefix}/items`,
        saleInvoice: `${v1_prefix}/sales`,
    }
}