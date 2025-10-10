'use client';

import React, { useState } from 'react';
import { InputField } from '@/components/ui';

export function InputFieldShowcase() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('olivia@untitledui.com');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('olivia@untitledui.com');
  const [errorValue, setErrorValue] = useState('');

  return (
    <div className="p-8 space-y-12 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Input Field Component</h1>
        
        {/* Basic States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Basic States</h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-600">Small Size</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  size="sm"
                  label="Email"
                  required
                  hintText="This is a hint text to help user."
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  placeholder="Enter your email"
                />
                <InputField
                  size="sm"
                  label="Email"
                  required
                  hintText="This is a hint text to help user."
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-600">Medium Size</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  size="md"
                  label="Email"
                  required
                  hintText="This is a hint text to help user."
                  value={value3}
                  onChange={(e) => setValue3(e.target.value)}
                  placeholder="Enter your email"
                />
                <InputField
                  size="md"
                  label="Email"
                  required
                  hintText="This is a hint text to help user."
                  value={value4}
                  onChange={(e) => setValue4(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Interactive States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Interactive States</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Focused (click to focus)</p>
                <InputField
                  label="Email"
                  required
                  hintText="This is a hint text to help user."
                  helpIcon
                  helpText="We’ll use this email to contact you about your account."
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Disabled</p>
                <InputField
                  label="Email"
                  required
                  disabled
                  value="olivia@untitledui.com"
                  hintText="This is a hint text to help user."
                  helpIcon
                  helpText="Disabled fields do not accept input."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Error States */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Error States</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Error - Small</p>
                <InputField
                  size="sm"
                  label="Email"
                  required
                  destructive
                  errorMessage="This is an error message."
                  value={errorValue}
                  onChange={(e) => setErrorValue(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Error - Medium</p>
                <InputField
                  size="md"
                  label="Email"
                  required
                  destructive
                  errorMessage="This is an error message."
                  value="invalid@email"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Variations */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Variations</h2>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">With Help Icon</p>
                <InputField
                  label="Email"
                  helpIcon
                  helpText="Enter a valid email address."
                  hintText="Click the help icon for more information."
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Without Label</p>
                <InputField
                  placeholder="Enter your email address"
                  hintText="This field has no label."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-2">Required Field</p>
                <InputField
                  label="Email"
                  required
                  placeholder="Required field"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Optional Field</p>
                <InputField
                  label="Email"
                  placeholder="Optional field"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Common Use Cases</h2>
          <div className="space-y-6">
            <div className="max-w-md">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Login Form</h3>
              <div className="space-y-4">
                <InputField
                  label="Email"
                  required
                  type="email"
                  placeholder="you@example.com"
                />
                <InputField
                  label="Password"
                  required
                  type="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div className="max-w-md">
              <h3 className="text-sm font-medium text-gray-600 mb-4">Profile Form</h3>
              <div className="space-y-4">
                <InputField
                  label="Full Name"
                  required
                  placeholder="John Doe"
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  hintText="Include country code"
                />
                <InputField
                  label="Website"
                  type="url"
                  placeholder="https://example.com"
                  hintText="Optional"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}