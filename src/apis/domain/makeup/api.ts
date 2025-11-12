import { post } from "@apis/index";
import type { components } from "@custom-types/api/schema";
import type { ApiResponseType } from "@custom-types/commonType";
import type { AxiosResponse } from "axios";

export type MakeupRecommendationRequset = components["schemas"]["RecommendRequestDto"];
export type MakeupRecommendationResponse = components["schemas"]["RecommendResponseDto"];

// 메이크업 스타일 추천 (POST)
export const postMakeupRecommendation = async (imageFile: File, data: MakeupRecommendationRequset): Promise<MakeupRecommendationResponse | null> => {
  try {
    const formData = new FormData();

    formData.append("image", imageFile);
    formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));

    const response: AxiosResponse<ApiResponseType<MakeupRecommendationResponse>> = await post(
      "/makeup/recommendation",
      formData,
    );

    return response.data.data;
  } catch (error) {
    console.error("error", error);
    return null;
  }
};