import React, { FC } from 'react';

import { useForm, Controller } from 'react-hook-form';

import Input from './input';
import {
    ReferFormRow,
    ReferFormFooter,
    ReferFormFooterText,
} from 'app/components/styled';
import Select from './select';

const Form: FC = () => {
    const { control } = useForm();

    return (
        <>
            <form id="referral-form" action="#" className="referral-form">
                <ReferFormRow className="refer-form-row">
                    <Controller
                        label="Name"
                        control={control}
                        id="fullname"
                        name="fullname"
                        type="text"
                        defaultValue=""
                        as={<Input />}
                    />
                    <Controller
                        label="Email"
                        control={control}
                        id="email"
                        name="email"
                        type="email"
                        defaultValue=""
                        as={<Input />}
                    />
                </ReferFormRow>

                <ReferFormRow className="refer-form-row">
                    <Controller
                        label="Phone Number"
                        control={control}
                        id="phone"
                        name="phone"
                        type="number"
                        defaultValue=""
                        as={<Input />}
                    />
                    <Controller
                        label="Gender"
                        control={control}
                        id="gender"
                        name="gender"
                        defaultValue=""
                        as={<Select />}
                    />
                </ReferFormRow>

                <ReferFormRow className="refer-form-row">
                    <Controller
                        label="Address"
                        control={control}
                        id="address"
                        name="address"
                        type="text"
                        defaultValue=""
                        as={<Input />}
                    />
                    <Controller
                        label="Apt/Suite/Other"
                        control={control}
                        id="street-address"
                        name="street_address"
                        type="text"
                        defaultValue=""
                        as={<Input />}
                    />
                </ReferFormRow>
                <ReferFormFooter className="form-footer">
                    <div className="form-footer-text">
                        <ReferFormFooterText>
                            Lorem Ipsum dolor sit amet & Lorem Ipsum
                        </ReferFormFooterText>
                    </div>
                    <div className="refer-form-button">
                        <button className="btn btn-dark">
                            <span>Refer</span>
                        </button>
                    </div>
                </ReferFormFooter>
            </form>
        </>
    );
};

export default Form;
