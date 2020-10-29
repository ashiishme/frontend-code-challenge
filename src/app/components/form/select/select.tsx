import React, { FC, useState } from 'react';
import Downshift from 'downshift';

import { ReferFormField } from 'app/components/styled';
import {
    FormSelectLabel,
    FormSelect,
    FormSelectListWrapper,
    FormSelectItem,
} from './select.styled';

import { ReactComponent as DownArrowSVG } from 'assets/svg/down-arrow.svg';

const items = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Other' },
    { value: "Don't Specify" },
];

const Select: FC = ({ label, register, type, name, errors }: any) => {
    const [selectItem, setSelectItem] = useState<any>('');

    const selectHandler = (selection: any) => {
        setSelectItem(selection);
    };

    return (
        <ReferFormField className="referral-form-field">
            <Downshift
                onChange={(selection) => selectHandler(selection.value)}
                selectedItem={selectItem}
                itemToString={(items: any) => (items ? items.value : '')}
            >
                {({
                    isOpen,
                    getToggleButtonProps,
                    getItemProps,
                    getInputProps,
                    getLabelProps,
                }) => (
                    <div className="form-select-wrapper">
                        <FormSelectLabel
                            htmlFor="gender"
                            className={isOpen || selectItem ? 'is-focused' : ''}
                            style={errors ? { color: '#f04d46' } : {}}
                        >
                            {label}
                        </FormSelectLabel>
                        <DownArrowSVG />
                        <FormSelect
                            style={errors ? { borderColor: '#f04d46' } : {}}
                            ref={register}
                            id="gender"
                            name={name}
                            value={selectItem}
                            type={type}
                            className="dropdown"
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
                        {errors && <p className="err-msg">{errors.message}</p>}
                        <FormSelectListWrapper>
                            {isOpen ? (
                                <div className="dropdown">
                                    {items.map((item, index) => (
                                        <FormSelectItem
                                            className={`dropdown-item ${
                                                selectItem === item.value
                                                    ? 'is-selected'
                                                    : ''
                                            }`}
                                            {...getItemProps({
                                                key: index,
                                                index,
                                                item,
                                            })}
                                        >
                                            {item.value}
                                        </FormSelectItem>
                                    ))}
                                </div>
                            ) : null}
                        </FormSelectListWrapper>
                    </div>
                )}
            </Downshift>
        </ReferFormField>
    );
};

export default Select;
