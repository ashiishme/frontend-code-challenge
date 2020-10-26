import React, { FC } from 'react';

import {
    CardContainer,
    CardWrapper,
    CardMedia,
    CardBody,
    CardBodyTop,
    CardBodyTitle,
    CardBodyIcon,
    CardBodyText,
} from './card.styled';
import { ReactComponent as RightArrowSVG } from 'assets/svg/right-arrow.svg';

const Card: FC<{
    icon: string;
    iconText: string;
    title: string;
    description: string;
}> = (props: {
    icon: string;
    iconText: string;
    title: string;
    description: string;
}) => {
    return (
        <CardContainer className="card">
            <CardWrapper className="card-wrapper">
                <div className="card-icon">
                    <CardMedia className="card-media">
                        <img src={props.icon} alt={props.iconText} />
                    </CardMedia>
                </div>
                <CardBody className="card-body">
                    <CardBodyTop className="card-body-top">
                        <CardBodyTitle className="card-body-title">
                            <h4>{props.title}</h4>
                        </CardBodyTitle>
                        <CardBodyIcon className="card-body-icon">
                            <RightArrowSVG />
                        </CardBodyIcon>
                    </CardBodyTop>
                    <CardBodyText className="card-body-text">
                        <p>{props.description}</p>
                    </CardBodyText>
                </CardBody>
            </CardWrapper>
        </CardContainer>
    );
};

export default Card;
