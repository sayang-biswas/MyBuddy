export interface Qlinks {
    categoryId: number;
    categoryName: string;
    categoryDescription: string;
    qlinks: Array<Qlink>;
}

export interface Qlink {
    name: string;
    url: string;
}