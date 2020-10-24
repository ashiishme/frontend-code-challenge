import styled from '@emotion/styled';

export const AppFooter = styled.footer`
    position: absolute;
    bottom: 23px;
    left: 24px;
`;

export const Mentor = styled.div`
    width: 176px;
    padding-top: 18px;
    padding-bottom: 25px;
    border-radius: 0px 23px 0px 24px;
    background: rgba(68, 70, 190, 0.24);
`;

export const MentorHead = styled.div`
    display: flex;
    padding: 0 24px;
    justify-content: space-between;
    padding-bottom: 16.5px;
    border-bottom: 1px solid rgba(244, 245, 247, 0.11);

    div {
        svg {
            fill: #fff;
            font-size: 12px;
            font-family: Inter-Bold, Inter;
            font-weight: 700;
        }
    }
`;

export const MentorTitle = styled.div`
    font-weight: bold;
    font-size: 12px;
    color: #ffffff;
    text-transform: uppercase;
`;

export const MentorBody = styled.div`
    padding: 0 24px;
    padding-top: 16.5px;
`;

export const MentorFooterTitle = styled.h4`
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 16px;
`;

export const JimmyPageIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    padding: 0;

    li {
        width: 32px;
        height: 32px;
        text-align: center;
        border-radius: 50%;
        background: rgba(68, 70, 190, 0.7);
    }

    svg {
        height: 100%;
    }
`;

/**
 * // .a {
//     fill: #fff;
//     font-size: 12px;
//     font-family: Inter-Bold,
//         Inter;
//     font-weight: 700;
// }
 */
