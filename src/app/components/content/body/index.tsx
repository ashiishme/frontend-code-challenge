import React, { FC } from 'react';
import styled from '@emotion/styled';

const InnerSection = styled.div`
    margin-top: 20px;
`;

const ContentBody: FC = ({ children }) => {
    return (
        <InnerSection className='inner-section-content'>
            {children}
        </InnerSection>
    );
};

export default ContentBody;
