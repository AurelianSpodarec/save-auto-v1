import React, { forwardRef } from 'react';
import Label from '../Label';
  
const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            id,
            name,
            className,
            placeholder,
            variant = 'primary',
            kind = 'outline',
            disabled = false,
            label,
            labelPosition = 'top',
            icon,
            iconPosition = 'right',
            type = 'text',
            autoComplete,
            defaultValue,
            required = false,
            helperText,
            value,
            onChange,
            iconRight,
            autofocus,
            optional,
            ariaLabel,
            as = "input",
            ...props
        },
        ref
    ) => {
    
        const Tag = `${as}` as React.ElementType;

        return (
            <div className="form-group relative">
                
                {label && (
                    <Label
                        label={label}
                        optional={optional}
                        htmlFor={name}
                    />
                )}

                <div className="relative">
                    <Tag
                        id={name}
                        name={name}
                        type={type}
                        required={required}
                        autoComplete={autoComplete}
                        placeholder={placeholder}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={onChange}
                        className={`
                            block w-full rounded-md border-0 
                            py-2 px-3 
                            text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 
                            placeholder:text-gray-400
                            focus:ring-2 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6
                            ${className ? className : ""} 
                        `.trim()}
                        disabled={disabled}
                        aria-label={ariaLabel}
                        autoFocus={autofocus}
                        {...props}
                    />

                    {/* TODO: Make it so the user can choose either left or right */}
                    {iconRight && (
                        <div
                            className="absolute z-10 right-3 top-1/2 -translate-y-1/2"
                            dangerouslySetInnerHTML={{ __html: iconRight }}
                        />
                    )}

                </div>
            </div>
        );
    }
);

export default Input;

interface InputProps {
    id?: string;
    name?: string;
    className?: string;
    placeholder?: string;
    variant?: 'primary' | 'secondary';
    kind?: 'outline' | 'filled' | 'standard';
    disabled?: boolean;
    fullWidth?: boolean;
    label?: string;
    labelPosition?: 'top' | 'right' | 'bottom' | 'left';
    icon?: string;
    iconPosition?: 'left' | 'right';
    type?: 'number' | 'email' | 'tel' | 'text' | 'password' | 'checkbox';
    autoComplete?: string;
    defaultValue?: string;
    helperText?: string;
    required?: boolean;
    value?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    iconRight?: any;
    autofocus?: boolean;
    optional?: boolean;
    ariaLabel?: string;
    as?: string | "textarea" | "input";
}