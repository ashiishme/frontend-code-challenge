import React, { FC } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as ReferralSVG } from 'assets/svg/referral.svg';

const ReferralWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ReferForm = styled.div`
    margin-right: 38px;
`;

const FormTitle = styled.div`
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 14px;
    color: #555555;
`;

const ReferFormRow = styled.div`
    display: flex;
    width: 100%;
`;

const ReferFormField = styled.div`
    justify-content: space-between;

    :first-of-type {
        margin-right: 20px;
    }

    input {
        width: 328px;
        height: 49px;
        border: 1px solid rgba(60, 73, 138, 0.42);
        border-radius: 4px;
        margin-bottom: 12px;
    }
`;

const ReferFormFooter = styled.div`
    border-top: 1px solid rgba(159, 159, 159, 0.4);
    padding-top: 24.5px;
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ReferFormFooterText = styled.p`
    font-style: italic;
    font-size: 14px;
    color: #b7b7b7;
`;

const ReferFormBanner = styled.div`
    width: 308px;
    background: #f4f5f7;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ReferFormBannerMedia = styled.div`
    padding: 43px 67px;

    svg {
        width: 174px;
        height: 190px;
    }
`;

const Referral: FC = () => {
    return (
        <ReferralWrapper className='referral'>
            <ReferForm className='refer-form'>
                <FormTitle className='form-title'>
                    <p>Basic Information</p>
                </FormTitle>
                <form id='referral-form' action='#' className='referral-form'>
                    <ReferFormRow className='refer-form-row'>
                        <ReferFormField className='referral-form-field'>
                            <input type='text' />
                        </ReferFormField>
                        <ReferFormField className='referral-form-field'>
                            <input type='text' />
                        </ReferFormField>
                    </ReferFormRow>

                    <ReferFormRow className='refer-form-row'>
                        <ReferFormField className='referral-form-field'>
                            <input type='text' />
                        </ReferFormField>
                        <ReferFormField className='referral-form-field'>
                            <input type='text' />
                        </ReferFormField>
                    </ReferFormRow>

                    <ReferFormRow className='refer-form-row'>
                        <ReferFormField className='referral-form-field'>
                            <input type='text' />
                        </ReferFormField>
                        <ReferFormField className='referral-form-field'>
                            <input type='text' />
                        </ReferFormField>
                    </ReferFormRow>
                    <ReferFormFooter className='form-footer'>
                        <div className='form-footer-text'>
                            <ReferFormFooterText>
                                Lorem Ipsum dolor sit amet & Lorem Ipsum
                            </ReferFormFooterText>
                        </div>
                        <div className='refer-form-button'>
                            <button className='btn btn-dark'>
                                <span>Refer</span>
                            </button>
                        </div>
                    </ReferFormFooter>
                </form>
            </ReferForm>
            <ReferFormBanner className='refer-form-banner'>
                <ReferFormBannerMedia className='refer-form-banner-media'>
                    <ReferralSVG />
                </ReferFormBannerMedia>
            </ReferFormBanner>
        </ReferralWrapper>
    );
};

export default Referral;
