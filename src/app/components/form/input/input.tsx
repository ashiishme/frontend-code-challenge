import React, { FC, useState } from 'react';
import { ReferFormField } from 'app/components/styled';

const Input: FC = (props: any) => {
    const [focus, setFocus] = useState({ isFocused: false, length: 0 });

    return (
        <>
            <ReferFormField className="referral-form-field">
                <label
                    htmlFor={props.name}
                    className={
                        focus.isFocused || focus.length > 0 ? 'is-focused' : ''
                    }
                >
                    {props.label}
                </label>
                <input
                    id={props.id}
                    name={props.name}
                    type={props.type}
                    onFocus={(e) =>
                        setFocus({
                            isFocused: true,
                            length: e.target.value?.length,
                        })
                    }
                    onBlur={(e) =>
                        setFocus({
                            isFocused: false,
                            length: e.target.value?.length,
                        })
                    }
                />
            </ReferFormField>
        </>
    );
};

export default Input;
