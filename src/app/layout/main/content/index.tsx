import React, { FC } from 'react';
import styled from '@emotion/styled';

import ContentHeader from 'app/components/content/header';
import ContentBody from 'app/components/content/body';
import PackageList from 'app/components/content/body/package';
import { useContentHeaderContext } from 'app/hooks';

const SectionContent = styled.div`
    margin-top: 40px;
`;

const Content: FC = () => {
    const { context } = useContentHeaderContext();

    return (
        <SectionContent className='section-content section-packages container section-pad-r'>
            <div className='section-pacakges-wrapper section-pad-l'>
                <ContentHeader />
                <ContentBody>
                    {context === 'packages' ? (
                        <PackageList />
                    ) : context === 'referral' ? (
                        <h1>Referral</h1>
                    ) : (
                        <strong>No content found</strong>
                    )}
                </ContentBody>
            </div>
        </SectionContent>
    );
};

export default Content;
