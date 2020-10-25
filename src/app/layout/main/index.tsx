import React, { FC } from 'react';
import Hero from 'app/layout/main/hero';
import SectionCard from 'app/layout/main/section-card';
import Content from 'app/layout/main/content';

import { ContentHeaderContext } from 'app/hooks';

const Main: FC = () => {
    return (
        <main>
            <section>
                <Hero />
                <SectionCard />
                <ContentHeaderContext.Provider
                    value={{
                        title: 'hello there',
                        description: 'Hi there',
                    }}
                >
                    <Content />
                </ContentHeaderContext.Provider>
                <ContentHeaderContext.Provider
                    value={{
                        title: 'hello there 2',
                        description: 'Hi there 2',
                    }}
                >
                    <Content />
                </ContentHeaderContext.Provider>
            </section>
        </main>
    );
};

export default Main;
