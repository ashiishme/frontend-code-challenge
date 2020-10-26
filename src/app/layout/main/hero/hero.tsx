import React, { FC } from 'react';

import {
    HeroWrapper,
    HeroAuthor,
    HeroGreet,
    HeroInterrogative,
} from './hero.styled';

const Hero: FC = () => {
    return (
        <HeroWrapper className="section-top container section-pad-r">
            <div className="section-pad-t section-pad-l">
                <HeroAuthor className="author-flex">
                    <div className="greet-author">
                        <HeroGreet className="greet-text">
                            Hello
                            <span className="author-first-name">Jimmy,</span>
                        </HeroGreet>
                    </div>
                    <div className="find-gym-cta">
                        <button
                            type="button"
                            className="btn btn-dark find-gym-button"
                        >
                            <span>Find A Gym Club</span>
                        </button>
                    </div>
                </HeroAuthor>
                <HeroInterrogative className="interrogative-text">
                    <h3>What do you want to do today?</h3>
                </HeroInterrogative>
            </div>
        </HeroWrapper>
    );
};

export default Hero;
