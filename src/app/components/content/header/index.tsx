import React, { FC } from 'react';
import styled from '@emotion/styled';

import { useContentHeaderContext } from 'app/hooks';

const SectionTitle = styled.div`
    color: #555555;
    font-weight: bold;
    font-size: 20px;
`;

const SectionDescription = styled.div`
    margin-top: 16px;
`;

const ContentHeader: FC = (props: any) => {
    const { title, description } = useContentHeaderContext();

    return (
        <div className='inner-section-head'>
            <SectionTitle className='package-section-title'>
                <h4>{title}</h4>
            </SectionTitle>
            <SectionDescription className='package-description'>
                <p>{description}</p>
            </SectionDescription>
        </div>
    );
};

export default ContentHeader;
