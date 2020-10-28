import styled from '@emotion/styled';

export const FormSelectLabel = styled.label`
    z-index: 1;
`;

export const FormSelect = styled.button`
    position: relative;
    background: #ffffff;
    display: block;
    width: 362px;
    height: 50px;
    border: 1px solid rgba(60, 73, 138, 0.42);
    border-radius: 4px;
    padding: 0 16px 8px 16px;
    text-align: left;
    margin-bottom: 10px;
    outline: 0;

    span {
        display: block;
        margin-top: 24px;
        font-size: 14px;
        color: #2c2c2c;
        font-weight: 500;
    }

    @media ${(props) => props.theme.breakpoints.phone} {
        width: 100%;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        width: 100%;
    }
`;

export const FormSelectListWrapper = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;

    & .is-selected {
        background: #ecf4f9;
    }
`;

export const FormSelectItem = styled.div`
    padding: 16px;
    background: #ffffff;
    border: 1px solid #ececec;
    border-radius: 4px 4px 0px 0px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;

    :hover {
        background: #f4f5f7;
    }
`;
