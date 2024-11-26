export interface SaleDetail {
    invoiceNo: string;
    itemNo: string;
    itemName: string;
    price: number;
    quantity: number;
    amount: number;
}

export interface SaleInvoice {
    salesType: string;
    invoiceNo: string;
    invoiceDate: Date;
    voucherNo: string;
    currency: number;
    receivableType: string;
    registrationNo: string;
    remark: string;
    total: number;
    discountPers: number;
    discountAmt: number;
    taxPers: number;
    taxAmount: number;
    servicePers: number;
    serviceAmount: number;
    netAmount: number;
    cashierId: string;
    createUserId: number;
    createDate: Date;
    modifyUserId: number;
    modifyDate: Date;
    paidDate: Date;
    serviceTaxPers: number;
    serviceTaxAmount: number;
    isPaidBill: true;
    memberCardNo: string;
    staffName: string;
    cashPaymentDollar: number;
    cashPaymentKs: number;
    cardPaymentDollar: number;
    cardPaymentKs: number;
    remainDollar: number;
    remainKs: number;
    refundDollar: number;
    refundKs: number;
    cardNo: string;
    cardType: string;
    bankChargesDollar: number;
    bankChargesKs: number;
    bottleCharges: number;
    saleItems: SaleDetail[];
}