import React, { FC } from 'react';
import Hero from 'app/layout/main/hero';
import SectionCard from 'app/layout/main/section-card';
import Content from 'app/layout/main/content';

import { ContentHeaderContext } from 'app/hooks';

const Main: FC = () => {
    return (
        <main>
            <section className='app-section section-pad-b'>
                <Hero />
                <SectionCard />
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
        </main>
    );
};

export default Main;
