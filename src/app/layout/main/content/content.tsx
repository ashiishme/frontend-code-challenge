import React, { FC } from 'react';
import styled from '@emotion/styled';

import { useContentHeaderContext } from 'app/hooks';

import ContentHeader from 'app/components/content/header';
import ContentBody from 'app/components/content/body';
import PackageList from 'app/components/content/body/package-list';
import Referral from 'app/components/content/body/referral';

const SectionContent = styled.div`
    margin-top: 40px;
`;

const Content: FC = () => {
    const { context } = useContentHeaderContext();

    return (
        <SectionContent className="section-content section-packages container section-pad-r">
            <div className="section-pacakges-wrapper section-pad-l">
                <ContentHeader />
                <ContentBody>
                    {context === 'packages' ? (
                        <PackageList />
                    ) : context === 'referral' ? (
                        <Referral />
                    ) : (
                        <strong>No content found</strong>
                    )}
                </ContentBody>
            </div>
        </SectionContent>
    );
};

export default Content;
