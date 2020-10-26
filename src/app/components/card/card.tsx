import React, { FC } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as RightArrowSVG } from 'assets/svg/right-arrow.svg';

const CardContainer = styled.div`
    width: 328px;
    background: #ffffff;
    box-shadow: 0px 5px 10px #a9a9a933;
    border-radius: 4px;
`;

const CardWrapper = styled.div`
    display: flex;
    height: 92px;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 20px;
`;

const CardMedia = styled.figure`
    width: 72px;
    height: 60px;
    margin-right: 16px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const CardBody = styled.div`
    width: 100%;
`;

const CardBodyTop = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;

const CardBodyTitle = styled.div`
    h4 {
        font-size: 12px;
        color: #2c2c2c;
    }
`;

const CardBodyIcon = styled.div`
    svg {
        fill: #3d3fa8;
        font-size: 12px;
        font-weight: 700;
    }
`;

const CardBodyText = styled.div`
    width: 180px;
    p {
        font-weight: 500;
        font-size: 10px;
        color: #858585;
    }
`;

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
