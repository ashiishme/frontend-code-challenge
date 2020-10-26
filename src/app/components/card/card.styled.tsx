import styled from '@emotion/styled';

export const CardContainer = styled.div`
    width: 328px;
    background: #ffffff;
    box-shadow: 0px 5px 10px #a9a9a933;
    border-radius: 4px;
`;

export const CardWrapper = styled.div`
    display: flex;
    height: 92px;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 20px;
`;

export const CardMedia = styled.figure`
    width: 72px;
    height: 60px;
    margin-right: 16px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const CardBody = styled.div`
    width: 100%;
`;

export const CardBodyTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const CardBodyTitle = styled.div`
    h4 {
        font-size: 12px;
        color: #2c2c2c;
    }
`;

export const CardBodyIcon = styled.div`
    svg {
        fill: #3d3fa8;
        font-size: 12px;
        font-weight: 700;
    }
`;

export const CardBodyText = styled.div`
    width: 180px;
    p {
        font-weight: 500;
        font-size: 10px;
        color: #858585;
    }
`;
