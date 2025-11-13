export interface WishListResponse {
  content: WishItem[];
  pageable: WishPageInfo;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface WishPageInfo {
  pageNumber: number;
  pageSize: number;
}

export interface WishItem {
  id: string;
  userId: string;
  wishProduct: WishProduct;
}

export interface WishProduct {
  productId: string;
  category: string;
  overallRank: number;
  pageNumber: number;
  pageRank: number;
  brand: string;
  productName: string;
  listPrice: number;
  salePrice: number;
  reviewScore: number;
  reviewCount: number;
  ingredients: string;
  description: string;
  tags: string;
  bestOrNew: string; // "BEST" | "NEW" 로 확장 가능
  imageUrl: string;
  productUrl: string;
}
