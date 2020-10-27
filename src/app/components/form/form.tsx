import React, { FC, useState } from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';

import Input from './input';
import Select from './select';
import {
    ReferFormRow,
    ReferFormFooter,
    ReferFormFooterText,
    FormPopUp,
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
    const [success, setSuccess] = useState<{
        status: boolean;
        data: FormValues | null;
    }>({ status: false, data: null });

    const methods = useForm<FormValues>();
    const { handleSubmit } = methods;
    const submitForm = (formData: FormValues) => {
        // set state show success popup with user information
        console.log(formData);
        setSuccess({ status: true, data: formData });
    };
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
                        register={methods.register({
                            required: {
                                value: true,
                                message: 'Full name is required.',
                            },
                            minLength: {
                                value: 2,
                                message:
                                    'Invalid full name, must be greater than 2 characters.',
                            },
                        })}
                        id="fullname"
                        name="fullname"
                        type="text"
                        defaultValue=""
                        errors={
                            methods.errors?.fullname
                                ? methods.errors.fullname
                                : ''
                        }
                        as={<Input />}
                    />
                    <Controller
                        label="Email"
                        register={methods.register({
                            required: {
                                value: true,
                                message: 'Email is required.',
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                            },
                        })}
                        id="email"
                        name="email"
                        type="email"
                        defaultValue=""
                        errors={
                            methods.errors?.email ? methods.errors.email : ''
                        }
                        as={<Input />}
                    />
                </ReferFormRow>

                <ReferFormRow className="refer-form-row">
                    <Controller
                        label="Phone Number"
                        register={methods.register({
                            required: {
                                value: true,
                                message: 'Phone number is required.',
                            },
                            pattern: {
                                value: /^[0-9]{10}$/i,
                                message: 'Invalid phone number',
                            },
                        })}
                        id="phone"
                        name="phone"
                        type="number"
                        defaultValue=""
                        errors={
                            methods.errors?.phone ? methods.errors.phone : ''
                        }
                        as={<Input />}
                    />
                    <Controller
                        label="Gender"
                        register={methods.register({
                            required: {
                                value: true,
                                message: 'Gender is required.',
                            },
                        })}
                        id="gender"
                        name="gender"
                        type="button"
                        defaultValue=""
                        errors={
                            methods.errors?.gender ? methods.errors.gender : ''
                        }
                        as={<Select />}
                    />
                </ReferFormRow>

                <ReferFormRow className="refer-form-row">
                    <Controller
                        label="Address"
                        register={methods.register({
                            required: {
                                value: true,
                                message: 'Address is required.',
                            },
                        })}
                        id="address"
                        name="address"
                        type="text"
                        defaultValue=""
                        errors={
                            methods.errors?.address
                                ? methods.errors.address
                                : ''
                        }
                        as={<Input />}
                    />
                    <Controller
                        label="Apt/Suite/Other"
                        register={methods.register()}
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
                        <button
                            disabled={!success.status}
                            type="submit"
                            className="btn btn-dark"
                        >
                            <span>Refer</span>
                        </button>
                    </div>
                </ReferFormFooter>
            </form>
            {/* Show popup if form submission is valid */}
            {success.status && (
                <FormPopUp>
                    <span
                        onClick={() =>
                            setSuccess({ status: false, data: null })
                        }
                    >
                        ×
                    </span>
                    <div className="success-popup-container">
                        <div className="success-title">
                            <h3>
                                You have successfully refered{' '}
                                {success.data?.email}
                            </h3>
                        </div>
                        <div className="success-content">
                            <p>
                                Your account will be credited once the signup
                                process is completed by {''}
                                {success.data?.fullname}.
                            </p>
                        </div>
                    </div>
                </FormPopUp>
            )}
        </FormProvider>
    );
};

export default Form;
