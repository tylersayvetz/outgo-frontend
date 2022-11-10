export interface HomeData {
    accounts: Account[];
    invoiceSummary: InvoiceSummary;
    recentTransactions: Transaction[];
}

export enum AccountType {
    CHECKING = "CHECKING",
    EARLY_INCOME = "EARLY_INCOME"
}

export enum TransactionSummaryDetailsCategory {
    INVOICE_PAYMENT = "INVOICE_PAYMENT",
    CARD_PURCHASE = "CARD_PURCHASE",
    TRANSFER = "TRANSFER"
}

export enum TransactionType {
    DEBIT = "DEBIT",
    DEPOSIT = "DEPOSIT",
    ACH_TRANSFER = "ACH_TRANSFER"
}

export interface Account {
    id: string;
    type: AccountType;
    balanceCents: number;
}

export interface InvoiceSummary {
    draftSummary: DraftSummary;
    awaitingPaymentSummary: AwaitingPaymentSummary;
    paidSummary: PaidSummary;
}

export interface DraftSummary {
    count: number;
    processingDocumentsCount: number;
}

export interface AwaitingPaymentSummary {
    count: number;
    preparingCount: number;
    totalReceivableAmountCents?: number; // Not always present from API. Must be optional.
}

export interface PaidSummary {
    count: number;
    totalPaidAmountYTDCents: number;
    totalPaidAmountMonthCents: number;
}
export interface Transaction {
    id: string;
    type: TransactionType;
    amountCents: number; // FIXME! . Is this optional? Get to the bottomof it. not in api documentation.
    transactedAt: string;
    summaryDetails: {
        category: TransactionSummaryDetailsCategory;
        counterparty: string;
    };
}
