import React, { FC } from 'react';
import Hero from 'app/layout/main/hero';
import SectionCard from './section-card';

const Main: FC = () => {
    return (
        <main>
            <section>
                <Hero />
                <SectionCard />
                <div>Card</div>
                <div>Content</div>
            </section>
        </main>
    );
};

export default Main;
