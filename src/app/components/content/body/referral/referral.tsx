import React, { FC } from 'react';

import Form from 'app/components/form';

import {
    ReferralWrapper,
    ReferForm,
    FormTitle,
    ReferFormBanner,
    ReferFormBannerMedia,
} from './styled';

import { ReactComponent as ReferralSVG } from 'assets/svg/referral.svg';

const Referral: FC = () => {
    return (
        <ReferralWrapper className="referral">
            <ReferForm className="refer-form">
                <FormTitle className="form-title">
                    <p>Basic Information</p>
                </FormTitle>
                <Form />
            </ReferForm>
            <ReferFormBanner className="refer-form-banner">
                <ReferFormBannerMedia className="refer-form-banner-media">
                    <ReferralSVG />
                </ReferFormBannerMedia>
            </ReferFormBanner>
        </ReferralWrapper>
    );
};

export default Referral;
