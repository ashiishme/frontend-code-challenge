import styled from '@emotion/styled';

export const HeroWrapper = styled.div`
    background: rgba(70, 72, 195, 0.06);
    border-radius: 0px 0px 24px 0px;
    height: 256px;
`;

export const HeroAuthor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeroGreet = styled.h2`
    font-size: 24px;
    color: #555555;

    span {
        color: #3d3fa8;
    }
`;

export const HeroInterrogative = styled.div`
    margin-top: 14px;

    h3 {
        font-weight: normal;
        font-size: 36px;
        color: #2c2c2c;
        line-height: 72px;
    }
`;
