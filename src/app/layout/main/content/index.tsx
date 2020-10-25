import React, { FC } from 'react';
import styled from '@emotion/styled';

import ContentHeader from 'app/components/content/header';
import ContentBody from 'app/components/content/body';
import PackageList from 'app/components/content/body/package';

const SectionContent = styled.div`
    margin-top: 40px;
`;

const Content: FC = () => {
    return (
        <SectionContent className='section-content section-packages container section-pad-r'>
            <div className='section-pacakges-wrapper section-pad-l'>
                <ContentHeader />
                <ContentBody>
                    <PackageList />
                </ContentBody>
            </div>
        </SectionContent>
    );
};

export default Content;
