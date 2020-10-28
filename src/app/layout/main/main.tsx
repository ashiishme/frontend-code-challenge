import React, { FC } from 'react';
import styled from '@emotion/styled';

import Hero from 'app/layout/main/hero';
import SectionCard from 'app/layout/main/section-card';
import Content from 'app/layout/main/content';

// Context for passing data
import { ContentHeaderContext } from 'app/hooks';

const MainWrapper = styled.main`
    width: 100%;
`;

const Main: FC = () => {
    return (
        <MainWrapper>
            <section className="app-section section-pad-b">
                <Hero />
                <SectionCard />
                {/* provide data to content header */}
                <ContentHeaderContext.Provider
                    value={{
                        title: 'Recommended Tour Packages',
                        description:
                            'These recommendations are based on your profile information',
                        context: 'packages',
                    }}
                >
                    <Content />
                </ContentHeaderContext.Provider>
                <ContentHeaderContext.Provider
                    value={{
                        title: 'Refer and Earn',
                        description:
                            'Add your referral and earn <strong>5$</strong> after they sign up',
                        context: 'referral',
                    }}
                >
                    <Content />
                </ContentHeaderContext.Provider>
            </section>
        </MainWrapper>
    );
};

export default Main;
