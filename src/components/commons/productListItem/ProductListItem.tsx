import { useState } from "react";

import * as S from "./ProductListItem.styled";

type ProductItem = {
  productId: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  description: string;
};

interface ListItemProps {
  product: ProductItem;
  reason: string;
}

const ProductListItem = ({ product, reason }: ListItemProps) => {
  const [liked, setLiked] = useState(false); // TODO : API 수정되면 기본값이 API에서 넘어온 boolean으로 수정

  const handleLikeClick = () => {
    setLiked((prev) => !prev);
    // TODO : 서버 연동 로직 추가
  };

  return (
    <S.RecommendProductWrapper>
<<<<<<< HEAD
      <S.RecommendProductContainer>
        <S.ProductImage src={product?.imageUrl} alt="Product" />
        <S.ProductInfo>
          <S.ProductText className="title">{product?.name}</S.ProductText>
          <S.ProductText>{product?.price}원</S.ProductText>
          <S.ReviewText>
            ⭐ {product?.rating} (리뷰 {product?.reviewCount})
          </S.ReviewText>
        </S.ProductInfo>
        <S.LikeButton onClick={handleLikeClick}>
          <S.HeartIcon $liked={liked} />
        </S.LikeButton>
      </S.RecommendProductContainer>
      <S.RecommendReason>
        <S.WandIcon />
        <S.ReasonText>AI 추천 코멘트: {reason}</S.ReasonText>
      </S.RecommendReason>
=======
      <S.ProductImage src="https://avatars.githubusercontent.com/u/101495452?v=4" alt="Product" />
      <S.ProductInfo>
        <S.ProductText className="title">Sample Product Name</S.ProductText>
        <S.ProductText>Sample Product Name</S.ProductText>
        <S.ReviewText>⭐ 3.3 (리뷰 39)</S.ReviewText>
      </S.ProductInfo>
      <S.LikeButton>
        <S.HeartIcon />
      </S.LikeButton>
>>>>>>> f65c274 (Design: 리스트 아이템 디자인 수정)
    </S.RecommendProductWrapper>
  );
};

export default ProductListItem;
