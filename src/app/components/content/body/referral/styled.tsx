import styled from '@emotion/styled';

export const ReferralWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ReferForm = styled.div`
    margin-right: 38px;
`;

export const FormTitle = styled.div`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 14px;
    color: #555555;
`;

export const ReferFormRow = styled.div`
    display: flex;
    width: 100%;
`;

export const ReferFormField = styled.div`
    position: relative;
    justify-content: space-between;

    :first-of-type {
        margin-right: 20px;
    }

    .is-focused {
        font-size: 10px;
        margin-bottom: 4px;
        transform: translateY(-8px);
        color: #3c498a;
    }

    input {
        width: 328px;
        border: 1px solid rgba(60, 73, 138, 0.42);
        border-radius: 4px;
        margin-bottom: 12px;
        padding: 16px;
        outline: 0;

        :focus {
            border-color: #3c498a;
        }
    }

    label {
        position: absolute;
        left: 16px;
        top: 16px;
        font-size: 14px;
        font-weight: 500;
        color: #555555;
        transition: all 0.2s ease-in-out;
    }

    .form-select-wrapper {
        width: 100%;
    }
`;

export const ReferFormFooter = styled.div`
    border-top: 1px solid rgba(159, 159, 159, 0.4);
    padding-top: 24.5px;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ReferFormFooterText = styled.p`
    font-style: italic;
    font-size: 14px;
    color: #b7b7b7;
`;

export const ReferFormBanner = styled.div`
    width: 308px;
    background: #f4f5f7;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ReferFormBannerMedia = styled.div`
    padding: 43px 67px;

    svg {
        width: 174px;
        height: 190px;
    }
`;

export const FormSelectLabel = styled.label`
    z-index: 1;
`;

export const FormSelect = styled.div`
    position: relative;
    background: #ffffff;
    width: 328px;
    height: 49px;
    border: 1px solid rgba(60, 73, 138, 0.42);
    border-radius: 4px;
    padding: 0 16px;

    span {
        display: block;
        margin-top: 24px;
        font-size: 14px;
        color: #2c2c2c;
        font-weight: 500;
    }
`;

export const FormSelectListWrapper = styled.div`
    position: absolute;
    margin-top: 8px;
    z-index: 1;
    width: 100%;
`;

export const FormSelectItem = styled.div`
    padding: 16px;
    background: #ffffff;
    border: 1px solid #ececec;
    border-radius: 4px 4px 0px 0px;
    font-size: 14px;
    font-weight: 500;
`;
