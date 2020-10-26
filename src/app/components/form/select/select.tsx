import React, { FC, useState } from 'react';
import Downshift from 'downshift';

import { ReferFormField } from 'app/components/styled';
import {
    FormSelectLabel,
    FormSelect,
    FormSelectListWrapper,
    FormSelectItem,
} from './select.styled';

const items = [
    { value: 'Male' },
    { value: 'Female' },
    { value: 'Other' },
    { value: "Don't Specify" },
];

const Select: FC = () => {
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
                    highlightedIndex,
                    selectedItem: dsSelectedItem,
                    getLabelProps,
                }) => (
                    <div className="form-select-wrapper">
                        <FormSelectLabel
                            htmlFor="gender"
                            className={isOpen || selectItem ? 'is-focused' : ''}
                        >
                            Gender
                        </FormSelectLabel>
                        <FormSelect
                            id="gender"
                            className="dropdown-button"
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
                                <div className="dropdown">
                                    {items.map((item, index) => (
                                        <FormSelectItem
                                            className="dropdown-item"
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
