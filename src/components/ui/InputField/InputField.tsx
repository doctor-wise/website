'use client';

import React from 'react';
import { Mail_01 } from '@/components/icons/generated/Mail_01';
import { HelpCircle } from '@/components/icons/generated/HelpCircle';
import { AlertCircle } from '@/components/icons/generated/AlertCircle';
import { Tooltip } from '@/components/ui/Tooltip';

export type InputFieldSize = 'sm' | 'md';
export type InputFieldState = 'placeholder' | 'filled' | 'focused' | 'disabled' | 'error';

export interface InputFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  required?: boolean;
  hintText?: string;
  errorMessage?: string;
  size?: InputFieldSize;
  state?: InputFieldState;
  iconLeading?: React.ReactNode;
  helpIcon?: boolean;
  helpText?: React.ReactNode;
  destructive?: boolean;
}

const sizeClasses = {
  sm: {
    wrapper: 'gap-1.5',
    input: 'px-3 py-2',
    text: 'text-base leading-6',
    icon: 'size-5',
    helpIcon: 'size-4'
  },
  md: {
    wrapper: 'gap-1.5',
    input: 'px-3.5 py-2.5',
    text: 'text-base leading-6',
    icon: 'size-5',
    helpIcon: 'size-4'
  }
};

const stateClasses = {
  default: {
    container: 'bg-bg-primary',
    border: 'border-border-primary',
    text: 'text-text-placeholder placeholder:text-text-placeholder',
    hover: 'hover:border-border-secondary',
    iconColor: 'text-fg-quaternary'
  },
  filled: {
    container: 'bg-bg-primary',
    border: 'border-border-primary',
    text: 'text-text-primary',
    hover: 'hover:border-border-secondary',
    iconColor: 'text-fg-quaternary'
  },
  focused: {
    container: 'bg-bg-primary',
    border: 'border-2 border-border-brand',
    text: 'text-text-primary',
    hover: '',
    iconColor: 'text-fg-quaternary'
  },
  disabled: {
    container: 'bg-bg-disabled-subtle cursor-not-allowed',
    border: 'border-border-disabled',
    text: 'text-text-disabled cursor-not-allowed',
    hover: '',
    iconColor: 'text-fg-disabled'
  },
  error: {
    container: 'bg-bg-primary',
    border: 'border-border-error-subtle',
    text: 'text-text-primary',
    hover: 'hover:border-error-200',
    iconColor: 'text-fg-quaternary'
  },
  errorFocused: {
    container: 'bg-bg-primary',
    border: 'border-2 border-border-error',
    text: 'text-text-primary',
    hover: '',
    iconColor: 'text-fg-quaternary'
  }
};

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(({
  label,
  required = false,
  hintText,
  errorMessage,
  size = 'md',
  state: propState,
  iconLeading,
  helpIcon = false,
  helpText,
  destructive = false,
  disabled = false,
  className = '',
  onFocus,
  onBlur,
  value,
  placeholder,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(!!value);

  React.useEffect(() => {
    setHasValue(!!value);
  }, [value]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    props.onChange?.(e);
  };

  // Determine the actual state based on conditions
  let actualState: keyof typeof stateClasses = 'default';
  
  if (propState) {
    // Use prop state if explicitly provided
    if (propState === 'error' || (propState === 'focused' && (destructive || errorMessage))) {
      actualState = isFocused ? 'errorFocused' : 'error';
    } else if (propState === 'focused') {
      actualState = 'focused';
    } else if (propState === 'disabled') {
      actualState = 'disabled';
    } else if (propState === 'filled') {
      actualState = 'filled';
    }
  } else {
    // Auto-determine state
    if (disabled) {
      actualState = 'disabled';
    } else if (destructive || errorMessage) {
      actualState = isFocused ? 'errorFocused' : 'error';
    } else if (isFocused) {
      actualState = 'focused';
    } else if (hasValue) {
      actualState = 'filled';
    }
  }

  const sizeConfig = sizeClasses[size];
  const stateConfig = stateClasses[actualState];
  const isError = actualState === 'error' || actualState === 'errorFocused';

  const inputClasses = [
    'w-full',
    'rounded-full',
    'border',
    'shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
    'transition-all duration-200',
    'font-normal',
    'outline-none',
    sizeConfig.input,
    sizeConfig.text,
    stateConfig.container,
    stateConfig.border,
    stateConfig.text,
    stateConfig.hover,
    'flex items-center gap-2',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={`flex flex-col ${sizeConfig.wrapper} w-full`}>
      {label && (
        <div className="flex items-start gap-0.5">
          <label className="text-[14px] font-medium leading-5 text-text-secondary">
            {label}
          </label>
          {required && (
            <span className="text-[14px] font-medium leading-5 text-text-brand-tertiary">*</span>
          )}
        </div>
      )}
      
      <div className="relative w-full">
        <div className={inputClasses}>
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {iconLeading || (
              <Mail_01 
                size={20} 
                className={`shrink-0 ${stateConfig.iconColor}`}
              />
            )}
            <input
              ref={ref}
              type="text"
              disabled={disabled}
              value={value}
              placeholder={placeholder || "olivia@untitledui.com"}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
              className={`
                flex-1 min-w-0 bg-transparent outline-none border-none
                ${sizeConfig.text}
                ${disabled ? 'cursor-not-allowed' : ''}
                placeholder:text-current placeholder:opacity-100
                overflow-ellipsis overflow-hidden text-nowrap
              `}
              {...props}
            />
          </div>
          
          {(helpIcon && !isError) && (
            <Tooltip content={helpText ?? ''}>
              <span className="inline-flex">
                <HelpCircle
                  size={16}
                  className={`shrink-0 ${stateConfig.iconColor}`}
                />
              </span>
            </Tooltip>
          )}
          
          {isError && (
            <AlertCircle
              size={16}
              className="shrink-0 text-fg-error-secondary"
            />
          )}
        </div>
      </div>

      {(hintText || errorMessage) && (
        <p className={`text-[14px] leading-5 ${isError ? 'text-text-error-primary' : 'text-text-tertiary'}`}>
          {errorMessage || hintText}
        </p>
      )}
    </div>
  );
});

InputField.displayName = 'InputField';