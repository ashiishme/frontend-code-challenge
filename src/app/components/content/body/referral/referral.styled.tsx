import styled from '@emotion/styled';

export const ReferralWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${(props) => props.theme.breakpoints.phone} {
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        width: 100%;
    }
`;

export const ReferForm = styled.div`
    margin-right: 38px;

    @media ${(props) => props.theme.breakpoints.phone} {
        margin-right: 0px;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        width: 70%;
    }
`;

export const FormTitle = styled.div`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: ${(props) => props.theme.font.size.small}px;
    color: #555555;
`;

export const ReferFormBanner = styled.div`
    width: 308px;
    background: #f4f5f7;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${(props) => props.theme.breakpoints.phone} {
        margin-top: 2rem;
        width: 100%;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        width: 30%;
    }
`;

export const ReferFormBannerMedia = styled.div`
    padding: 43px 67px;

    svg {
        width: 174px;
        height: 190px;
    }

    @media ${(props) => props.theme.breakpoints.phone} {
        svg {
            width: 100%;
            height: auto;
        }
    }
`;
