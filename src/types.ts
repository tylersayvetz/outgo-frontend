export interface HomeData {
    accounts: Account[];
    invoiceSummary: InvoiceSummary;
    recentTransactions: Transaction[];
}

export enum AccountType {
    CHECKING = "CHECKING",
    EARLY_INCOME = "EARLY_INCOME"
}

export interface Account {
    id: string;
    type: AccountType;
    balanceCents: number;
}

export interface InvoiceSummary {
    draftSummary: {
        count: number;
        processingDocumentsCount: number;
    };
    awaitingPaymentsSummary: {
        count: number;
        preparingCount: number;
    };
    paidSummary: {
        count: number;
        totalPaidAmountYTDCents: number;
        totalPaidAmountMonthCents: number;
    };
}

export interface Transaction {
    id: string;
    type: "DEPOSIT" | "DEBIT" | "ACH_TRANSFER";
    amountCents: number;
    transactedAd: number;
    summaryDetails: {
        category: "INVOICE_PAYMENT" | "CARD_PURCHASE" | "TRANSFER";
        counterparty: string;
    };
}
