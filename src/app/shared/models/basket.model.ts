export class BasketReadModel {
    HasItems: boolean;
    Timestamp: Date | null;
    Items: BasketItemReadModel[] = [];
    Timestamps: Date[] = [];
    CartId: string;
    ClientId: string;
    TotalPrice: number;
    ItemCount: number;
}

export class BasketItemReadModel {
    ProductId: string;
    Description: string;
    ItemPrice: number;
    Quantity: number;
    TotalPrice: number;
}