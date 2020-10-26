import React, { FC, useState } from 'react';
import { ReferFormField } from 'app/components/styled';

const Input: FC = (props: any) => {
    const [focus, setFocus] = useState({ isFocused: false, length: 0 });
    const isFocused = focus.isFocused || focus.length > 0 ? 'is-focused' : '';
    const isError = props.errors ? 'is-error' : '';
    return (
        <ReferFormField className="referral-form-field">
            <label htmlFor={props.name} className={`${isFocused} ${isError}`}>
                {props.label}
            </label>
            <input
                style={props.errors ? { borderColor: '#f04d46' } : {}}
                id={props.id}
                name={props.name}
                type={props.type}
                ref={props.register}
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
            {props.errors && <p className="err-msg">{props.errors.message}</p>}
        </ReferFormField>
    );
};

export default Input;
