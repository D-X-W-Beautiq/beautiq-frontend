import { IconBack, IconClose, IconHamburger } from "@assets/svgs";
import styled from "@emotion/styled";

import { getTypography } from "../../../styles/typography";

export const HeaderWrapper = styled.div`
    ${getTypography("heading1")}; 
    background-color: ${({theme}) => theme.colors.neutral[100]};
    color: ${({theme}) => theme.colors.primary[500]};  
    display: flex;
    flex-direction: row;
    width: 100% ;
    height: 56px;
    padding-left: 12px;
    padding-right: 12px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 16px;
`;


// 햄버거 아이콘
export const HamburgerIcon = styled(IconHamburger)`
    width: 32px;
    height: 32px;
    fill: ${({theme}) => theme.colors.primary[100]};
`;

// 뒤로가기 아이콘
export const BackIcon = styled(IconBack)`
    width: 32px;
    height: 32px;
    fill: ${({theme}) => theme.colors.primary[100]};
`;

// 닫기 아이콘
export const CloseIcon = styled(IconClose)`
    width: 24px;
    height: 24px;
    fill: ${({theme}) => theme.colors.primary[100]};
`;
