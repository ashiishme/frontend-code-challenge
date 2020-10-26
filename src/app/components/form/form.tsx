import React, { FC } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import Input from './input';
import Select from './select';
import {
    ReferFormRow,
    ReferFormFooter,
    ReferFormFooterText,
} from './form.styled';

type FormValues = {
    fullname: string;
    email: string;
    phone: number;
    gender: string;
    address: string;
    street_address: string;
};

const Form: FC = () => {
    const methods = useForm<FormValues>();
    const { handleSubmit } = methods;
    const submitForm = (formData: FormValues) => console.log(formData);

    return (
        <FormProvider {...methods}>
            <form
                id="referral-form"
                onSubmit={handleSubmit(submitForm)}
                className="referral-form"
            >
                <ReferFormRow className="refer-form-row">
                    <Controller
                        label="Name"
                        register={methods.register}
                        id="fullname"
                        name="fullname"
                        type="text"
                        defaultValue=""
                        as={<Input />}
                    />
                    <Controller
                        label="Email"
                        register={methods.register}
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
                        register={methods.register}
                        id="phone"
                        name="phone"
                        type="number"
                        defaultValue=""
                        as={<Input />}
                    />
                    <Controller
                        label="Gender"
                        register={methods.register}
                        id="gender"
                        name="gender"
                        type="button"
                        defaultValue=""
                        as={<Select />}
                    />
                </ReferFormRow>

                <ReferFormRow className="refer-form-row">
                    <Controller
                        label="Address"
                        register={methods.register}
                        id="address"
                        name="address"
                        type="text"
                        defaultValue=""
                        as={<Input />}
                    />
                    <Controller
                        label="Apt/Suite/Other"
                        register={methods.register}
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
                        <button type="submit" className="btn btn-dark">
                            <span>Refer</span>
                        </button>
                    </div>
                </ReferFormFooter>
            </form>
        </FormProvider>
    );
};

export default Form;
