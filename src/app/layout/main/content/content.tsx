import React, { FC } from 'react';
import styled from '@emotion/styled';

import { useContentHeaderContext } from 'app/hooks';

import ContentHeader from 'app/components/content/header';
import ContentBody from 'app/components/content/body';
import PackageList from 'app/components/content/body/package-list';
import Referral from 'app/components/content/body/referral';

const SectionContent = styled.div`
    margin-top: 40px;

    @media ${(props) => props.theme.breakpoints.phone} {
        margin-top: 0px;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        width: 100%;
    }
`;

const Content: FC = () => {
    // get the context data from provider
    const { context } = useContentHeaderContext();

    return (
        <SectionContent className="section-content section-packages container section-pad-r">
            <div className="section-pacakges-wrapper section-pad-l">
                <ContentHeader />
                {/* Conditionally render based on context */}
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
