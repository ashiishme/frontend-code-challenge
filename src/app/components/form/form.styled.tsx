import styled from '@emotion/styled';

export const ReferFormRow = styled.div`
    display: flex;
    width: 100%;

    @media ${(props) => props.theme.breakpoints.phone} {
        flex-direction: column;
    }
`;

export const ReferFormFooter = styled.div`
    border-top: 1px solid rgba(159, 159, 159, 0.4);
    padding-top: 24.5px;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${(props) => props.theme.breakpoints.phone} {
        padding-top: 20px;
        margin-top: 20px;
        flex-direction: column;
        width: 100%;

        .refer-form-button {
            margin-top: 1rem;
            width: 100%;
        }
    }
`;

export const ReferFormFooterText = styled.p`
    font-style: italic;
    font-size: 14px;
    color: #b7b7b7;
`;

export const FormPopUp = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    padding: 3rem;
    text-align: center;
    border-radius: 0px 23px 0px 24px;
    color: ${(props) => props.theme.color.white};
    background: ${(props) => props.theme.color.primary.light};
    z-index: 3;

    span {
        position: absolute;
        top: 0;
        right: 0;
        background: rgba(242, 242, 242, 0.1);
        color: ${(props) => props.theme.color.white};
        width: 32px;
        height: 32px;
        line-height: 32px;
        font-weight: bold;
        cursor: pointer;
    }

    .success-title {
        margin-bottom: 2rem;
    }
`;
