import React, { FC, useState, FocusEvent } from 'react';
import { useForm } from 'react-hook-form';
import Downshift from 'downshift';

import {
    ReferralWrapper,
    ReferForm,
    FormTitle,
    ReferFormRow,
    ReferFormField,
    ReferFormFooter,
    ReferFormFooterText,
    ReferFormBanner,
    ReferFormBannerMedia,
    FormSelectLabel,
    FormSelect,
    FormSelectListWrapper,
    FormSelectItem,
} from './styled';

import { ReactComponent as ReferralSVG } from 'assets/svg/referral.svg';

const items = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Other' },
    { value: "Don't Specify" },
];

const Referral: FC = () => {
    const { register, errors } = useForm();

    const [focus, setFocus] = useState({ id: '', isFocused: false });
    const [selectItem, setSelectItem] = useState<any>('');

    const selectHandler = (selection: any) => {
        setSelectItem(selection);
    };

    return (
        <ReferralWrapper className='referral'>
            <ReferForm className='refer-form'>
                <FormTitle className='form-title'>
                    <p>Basic Information</p>
                </FormTitle>
                <form id='referral-form' action='#' className='referral-form'>
                    <ReferFormRow className='refer-form-row'>
                        <ReferFormField className='referral-form-field'>
                            <label
                                htmlFor='name'
                                className={
                                    focus.isFocused && focus.id === 'name'
                                        ? 'is-focused'
                                        : ''
                                }
                            >
                                Name
                            </label>
                            <input
                                id='name'
                                name='name'
                                ref={register({ required: true, minLength: 2 })}
                                type='text'
                                onFocus={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused: true,
                                    })
                                }
                                onBlur={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused:
                                            e.target.value.length !== 0
                                                ? true
                                                : false,
                                    })
                                }
                            />
                        </ReferFormField>
                        <ReferFormField className='referral-form-field'>
                            <label
                                htmlFor='email'
                                className={
                                    focus.isFocused && focus.id === 'email'
                                        ? 'is-focused'
                                        : ''
                                }
                            >
                                Email
                            </label>
                            <input
                                id='email'
                                name='email'
                                ref={register({ required: true })}
                                type='email'
                                onFocus={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused: true,
                                    })
                                }
                                onBlur={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused:
                                            e.target.value.length !== 0
                                                ? true
                                                : false,
                                    })
                                }
                            />
                        </ReferFormField>
                    </ReferFormRow>

                    <ReferFormRow className='refer-form-row'>
                        <ReferFormField className='referral-form-field'>
                            <label
                                htmlFor='phone'
                                className={
                                    focus.isFocused && focus.id === 'phone'
                                        ? 'is-focused'
                                        : ''
                                }
                            >
                                Phone Number
                            </label>
                            <input
                                id='phone'
                                name='phone'
                                ref={register}
                                type='number'
                                onFocus={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused: true,
                                    })
                                }
                                onBlur={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused:
                                            e.target.value.length !== 0
                                                ? true
                                                : false,
                                    })
                                }
                            />
                        </ReferFormField>
                        <ReferFormField className='referral-form-field'>
                            <Downshift
                                onChange={(selection) =>
                                    selectHandler(selection.value)
                                }
                                selectedItem={selectItem}
                                itemToString={(items: any) =>
                                    items ? items.value : ''
                                }
                            >
                                {({
                                    isOpen,
                                    getToggleButtonProps,
                                    getItemProps,
                                    highlightedIndex,
                                    selectedItem: dsSelectedItem,
                                    getLabelProps,
                                }) => (
                                    <div className='form-select-wrapper'>
                                        <FormSelectLabel
                                            htmlFor='gender'
                                            className={
                                                isOpen || selectItem
                                                    ? 'is-focused'
                                                    : ''
                                            }
                                        >
                                            Gender
                                        </FormSelectLabel>
                                        <FormSelect
                                            id='gender'
                                            className='dropdown-button'
                                            {...getToggleButtonProps()}
                                        >
                                            <span>
                                                {selectItem !== ''
                                                    ? selectItem
                                                    : isOpen
                                                    ? 'Select item...'
                                                    : ''}
                                            </span>
                                        </FormSelect>
                                        <FormSelectListWrapper>
                                            {isOpen ? (
                                                <div className='dropdown'>
                                                    {items.map(
                                                        (item, index) => (
                                                            <FormSelectItem
                                                                className='dropdown-item'
                                                                {...getItemProps(
                                                                    {
                                                                        key: index,
                                                                        index,
                                                                        item,
                                                                    }
                                                                )}
                                                            >
                                                                {item.value}
                                                            </FormSelectItem>
                                                        )
                                                    )}
                                                </div>
                                            ) : null}
                                        </FormSelectListWrapper>
                                    </div>
                                )}
                            </Downshift>
                        </ReferFormField>
                    </ReferFormRow>

                    <ReferFormRow className='refer-form-row'>
                        <ReferFormField className='referral-form-field'>
                            <label
                                htmlFor='address'
                                className={
                                    focus.isFocused && focus.id === 'address'
                                        ? 'is-focused'
                                        : ''
                                }
                            >
                                Address
                            </label>
                            <input
                                id='address'
                                name='address'
                                ref={register}
                                type='text'
                                onFocus={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused: true,
                                    })
                                }
                                onBlur={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused:
                                            e.target.value.length !== 0
                                                ? true
                                                : false,
                                    })
                                }
                            />
                        </ReferFormField>
                        <ReferFormField className='referral-form-field'>
                            <label
                                htmlFor='street-address'
                                className={
                                    focus.isFocused &&
                                    focus.id === 'street-address'
                                        ? 'is-focused'
                                        : ''
                                }
                            >
                                Apt/Suite/Other
                            </label>
                            <input
                                id='street-address'
                                name='street_address'
                                ref={register}
                                type='text'
                                onFocus={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused: true,
                                    })
                                }
                                onBlur={(e) =>
                                    setFocus({
                                        id: e.target.id,
                                        isFocused:
                                            e.target.value.length !== 0
                                                ? true
                                                : false,
                                    })
                                }
                            />
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
