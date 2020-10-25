import React, { FC } from 'react';
import styled from '@emotion/styled';

import { useContentHeaderContext } from 'app/hooks';

import { stripTags } from 'app/utils';

const SectionTitle = styled.div`
    color: #555555;
    font-weight: bold;
    font-size: 20px;
`;

const SectionDescription = styled.div`
    margin-top: 16px;

    p {
        color: #858585;
        font-size: 12px;
    }
`;

const ContentHeader: FC = () => {
    const { title, description } = useContentHeaderContext();
    console.log(stripTags(description, '<strong>'));
    return (
        <div className='inner-section-head'>
            <SectionTitle className='package-section-title'>
                <h4>{title}</h4>
            </SectionTitle>
            <SectionDescription className='package-description'>
                <p
                    dangerouslySetInnerHTML={{
                        __html: stripTags(description, '<strong>'),
                    }}
                ></p>
            </SectionDescription>
        </div>
    );
};

export default ContentHeader;
