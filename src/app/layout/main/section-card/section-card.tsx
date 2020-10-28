import React, { FC } from 'react';
import styled from '@emotion/styled';

import Card from 'app/components/card';

import FillFormIcon from 'assets/images/card-icon-1.png';
import FindGymIcon from 'assets/images/card-icon-2.png';
import TrackProgressIcon from 'assets/images/card-icon-3.png';

const SectionCardWrapper = styled.div`
    margin-top: -46px;

    @media ${(props) => props.theme.breakpoints.phone} {
        margin-top: 20px;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${(props) => props.theme.breakpoints.phone} {
        width: 100%;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.phone} {
        width: 100%;
    }
`;

const SectionCard: FC = () => {
    return (
        <SectionCardWrapper className="section-card container section-pad-r">
            <CardContainer className="card-container section-pad-l">
                <Card
                    icon={FillFormIcon}
                    iconText={'Fill the form icon'}
                    title={'Fill up the form'}
                    description={
                        'Fill in your basic information to join the Gym club.'
                    }
                />
                <Card
                    icon={FindGymIcon}
                    iconText={'Find gym icon'}
                    title={'Find your perfect gym'}
                    description={
                        'Easily find your perfect gym club and join the club instantly.'
                    }
                />
                <Card
                    icon={TrackProgressIcon}
                    iconText={'Track progress icon'}
                    title={'track your progress'}
                    description={
                        'Analyze and plan for your tasks and progress.'
                    }
                />
            </CardContainer>
        </SectionCardWrapper>
    );
};

export default SectionCard;
