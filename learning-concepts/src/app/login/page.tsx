'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Validation Schemas
const emailSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});
const basicInfoSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  birthday: z.string().min(1, 'Birthday is required'),
  reference: z.string().optional(),
});
const passwordSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Types
type EmailFormData = z.infer<typeof emailSchema>;
type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

const InputField = ({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) => (
  <div>
    <label className="block text-sm font-medium">{label}</label>
    <input
      className={`w-full border ${
        error ? 'border-red-500' : 'border-gray-300'
      } rounded-md px-4 py-2 mt-1`}
      {...props}
    />
    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
  </div>
);

const LoginPage: React.FC = () => {
  const [step, setStep] = useState(1);

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const basicForm = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: { firstname: '', lastname: '', birthday: '', reference: '' },
  });

  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: '' },
  });

  const handleEmailSubmit = (data: EmailFormData) => {
    console.log('Step 1:', data);
    setStep(2);
  };

  const handleBasicInfoSubmit = (data: BasicInfoFormData) => {
    console.log('Step 2:', data);
    setStep(3);
  };

  const handlePasswordSubmit = (data: PasswordFormData) => {
    console.log('Step 3:', data);
    alert('🎉 Account created successfully!');
  };

  return (
    <div className="flex items-center justify-center min-h-auto bg-white px-4 h-[600px]">
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-1">Create an account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Already have an account?{' '}
          <a href="/login" className="text-black underline">
            Log in
          </a>
        </p>

        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          {['Enter your email', 'Provide your basic info', 'Create your password'].map((label, i) => (
            <div key={i} className="flex flex-col items-center w-full">
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  step === i + 1
                    ? 'bg-black text-white'
                    : step > i + 1
                    ? 'bg-gray-500 text-white'
                    : 'border border-gray-300 text-gray-400'
                }`}
              >
                {i + 1}
              </div>
              <span className={`text-[10px] mt-1 ${step === i + 1 ? 'text-black' : 'text-gray-400'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Email */}
        {step === 1 && (
          <form onSubmit={emailForm.handleSubmit(handleEmailSubmit)}>
            <InputField
              label="What’s your email?"
              {...emailForm.register('email')}
              error={emailForm.formState.errors.email?.message}
              placeholder="Enter your email address"
            />
            <button type="submit" className="w-full bg-black text-white py-2 rounded-full font-medium mt-5">
              Next
            </button>
          </form>
        )}

        {/* Step 2: Basic Info */}
        {step === 2 && (
          <form onSubmit={basicForm.handleSubmit(handleBasicInfoSubmit)} className="space-y-4">
            <InputField
              label="First Name"
              {...basicForm.register('firstname')}
              error={basicForm.formState.errors.firstname?.message}
              placeholder="Enter your first name"
            />
            <InputField
              label="Last Name"
              {...basicForm.register('lastname')}
              error={basicForm.formState.errors.lastname?.message}
              placeholder="Enter your last name"
            />
            <InputField
              label="Birthday"
              type="date"
              {...basicForm.register('birthday')}
              error={basicForm.formState.errors.birthday?.message}
            />
            <InputField
              label="Reference (optional)"
              {...basicForm.register('reference')}
              placeholder="Reference code or name"
            />
            <button type="submit" className="w-full bg-black text-white py-2 rounded-full font-medium">
              Next
            </button>
          </form>
        )}

        {/* Step 3: Password */}
        {step === 3 && (
          <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-4">
            <InputField
              label="Create Password"
              type="password"
              {...passwordForm.register('password')}
              error={passwordForm.formState.errors.password?.message}
              placeholder="Create a password"
            />
            <button type="submit" className="w-full bg-black text-white py-2 rounded-full font-medium">
              Create Account
            </button>
          </form>
        )}

        {/* OR Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="flex-1 flex items-center justify-center border border-gray-300 py-2 rounded-full text-sm font-medium hover:bg-gray-50"
            onClick={() => alert('Facebook signup not implemented')}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
              alt="Facebook"
              className="w-5 h-5 mr-2"
            />
            Sign up with Facebook
          </button>
          <button
            className="flex-1 flex items-center justify-center border border-gray-300 py-2 rounded-full text-sm font-medium hover:bg-gray-50"
            onClick={() => alert('Google signup not implemented')}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
