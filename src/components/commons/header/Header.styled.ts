import styled from "@emotion/styled";

import { getTypography } from "../../../styles/typography";

export const HeaderWrapper = styled.div`
    ${getTypography("heading1")}; 
    background-color: ${({theme}) => theme.colors.primary[100]};
    color: ${({theme}) => theme.colors.primary[500]};  
    display: flex;
    flex-direction: row;
    width: 100% ;
    justify-content: space-between;
    flex-direction: row;
`;

// export const HeaderContent = styled.div`
//     display : flex;
// `;

