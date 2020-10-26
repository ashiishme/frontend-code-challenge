import React, { FC } from 'react';
import styled from '@emotion/styled';

const HeroWrapper = styled.div`
    background: rgba(70, 72, 195, 0.06);
    border-radius: 0px 0px 24px 0px;
    height: 256px;
`;

const HeroAuthor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeroGreet = styled.h2`
    font-size: 24px;
    color: #555555;

    span {
        color: #3d3fa8;
    }
`;

const HeroInterrogative = styled.div`
    margin-top: 14px;

    h3 {
        font-weight: normal;
        font-size: 36px;
        color: #2c2c2c;
        line-height: 72px;
    }
`;

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
