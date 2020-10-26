import styled from '@emotion/styled';

export const AppHeader = styled.header``;

export const SidebarHead = styled.div`
    margin-top: 50px;
    margin-left: 40px;
`;

export const AuthorAvatar = styled.figure`
    width: 60px;
    height: 60px;
    opacity: 0.85;
    margin: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const AuthorName = styled.h1`
    margin-top: 13px;
    font-size: 14px;
    text-align: left;
    color: #ffffff;
`;

export const ProfileWrapper = styled.div`
    margin-top: 8px;
`;

export const AuthorProfile = styled.a`
    color: #ffffff;
    font-size: 12px;
`;
