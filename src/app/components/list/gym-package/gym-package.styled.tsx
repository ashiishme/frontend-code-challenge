import styled from '@emotion/styled';

export const PackageListItem = styled.li`
    width: 100%;
    height: 93px;
    background: #ffffff;
    box-shadow: 0px 5px 10px #a9a9a91a;
    border: 1px solid #ececec;
    border-radius: 4px;
    margin-bottom: 8px;

    @media ${(props) => props.theme.breakpoints.phone} {
        height: auto;
    }
`;

export const PackageListItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 22px 32px;

    @media ${(props) => props.theme.breakpoints.phone} {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export const PackageItemDetails = styled.div`
    display: flex;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.phone} {
        flex-direction: column;
        justify-content: center;
        margin-bottom: 2rem;
    }
`;

export const PackageItemIcon = styled.div`
    margin-right: 16px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(61, 63, 168, 0.06);
    border: 1px solid rgba(61, 63, 168, 0.06);
    text-align: center;
    line-height: 48px;

    svg {
        fill: #3d3fa8;
    }

    @media ${(props) => props.theme.breakpoints.phone} {
        margin-right: 0px;
        margin-bottom: 1rem;
    }
`;

export const PackageItemTitle = styled.h5`
    font-weight: bold;
    font-size: 14px;
    color: #555555;
`;

export const PackageItemDescription = styled.div`
    margin-top: 8px;

    p {
        font-size: 12px;
        font-weight: 500;
        color: #858585;
    }
`;

export const PackagePrice = styled.div`
    @media ${(props) => props.theme.breakpoints.phone} {
        margin-bottom: 2rem;
    }
`;

export const PackagePriceTitle = styled.p`
    font-weight: bold;
    font-size: 10px;
    color: #858585;
    text-transform: uppercase;
`;

export const PackagePriceAmount = styled.p`
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
    color: #262758;
`;
