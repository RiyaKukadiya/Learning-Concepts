'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Step Schemas
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

type EmailFormData = z.infer<typeof emailSchema>;
type BasicInfoFormData = z.infer<typeof basicInfoSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

const LoginPage: React.FC = () => {
  const [step, setStep] = useState(1);

  // Step 1: Email
  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    formState: { errors: emailErrors },
  } = useForm<EmailFormData>({ resolver: zodResolver(emailSchema) });

  // Step 2: Basic Info
  const [basicInfo, setBasicInfo] = useState<BasicInfoFormData>({
    firstname: '',
    lastname: '',
    birthday: '',
    reference: '',
  });
  const [basicInfoErrors, setBasicInfoErrors] = useState<Record<string, string>>({});

  // Step 3: Password
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Handle Step 1 Submission
  const onEmailSubmit = (data: EmailFormData) => {
    console.log('Step 1:', data);
    setStep(2);
  };

  // Handle Step 2 Submission
  const handleBasicInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = basicInfoSchema.safeParse(basicInfo);
    if (result.success) {
      setBasicInfoErrors({});
      console.log('Step 2:', result.data);
      setStep(3);
    } else {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setBasicInfoErrors(fieldErrors);
    }
  };

  // Handle Step 3 Submission
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = passwordSchema.safeParse({ password });
    if (result.success) {
      setPasswordError('');
      alert('🎉 Account created successfully!');
    } else {
      setPasswordError(result.error.errors[0].message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4">
      <div className="w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-1">Create an account</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Already have an account?{' '}
          <a href="/login" className="text-black underline">
            Log in
          </a>
        </p>

        {/* Step Indicators */}
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
              <span
                className={`text-[10px] mt-1 ${
                  step === i + 1 ? 'text-black' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Step 1: Email */}
        {step === 1 && (
          <form onSubmit={handleEmailSubmit(onEmailSubmit)}>
            <label className="block text-sm font-medium mb-1">What’s your email?</label>
            <input
              {...registerEmail('email')}
              placeholder="Enter your email address"
              className={`w-full border ${
                emailErrors.email ? 'border-red-500' : 'border-gray-300'
              } rounded-md px-4 py-2 mb-1 focus:outline-none focus:ring-2 focus:ring-gray-600`}
            />
            {emailErrors.email && (
              <p className="text-sm text-red-500 mb-4">{emailErrors.email.message}</p>
            )}
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-full font-medium mt-5"
            >
              Next
            </button>
          </form>
        )}

        {/* Step 2: Basic Info */}
        {step === 2 && (
          <form onSubmit={handleBasicInfoSubmit} className="space-y-4">
            <label className="block text-sm font-medium">First Name</label>
            <input
              value={basicInfo.firstname}
              onChange={e => setBasicInfo({ ...basicInfo, firstname: e.target.value })}
              className={`w-full border ${
                basicInfoErrors.firstname ? 'border-red-500' : 'border-gray-300'
              } rounded-md px-4 py-2`}
              placeholder="Enter your first name"
            />
            {basicInfoErrors.firstname && (
              <p className="text-sm text-red-500">{basicInfoErrors.firstname}</p>
            )}

            <label className="block text-sm font-medium">Last Name</label>
            <input
              value={basicInfo.lastname}
              onChange={e => setBasicInfo({ ...basicInfo, lastname: e.target.value })}
              className={`w-full border ${
                basicInfoErrors.lastname ? 'border-red-500' : 'border-gray-300'
              } rounded-md px-4 py-2`}
              placeholder="Enter your last name"
            />
            {basicInfoErrors.lastname && (
              <p className="text-sm text-red-500">{basicInfoErrors.lastname}</p>
            )}

            <label className="block text-sm font-medium">Birthday</label>
            <input
              type="date"
              value={basicInfo.birthday}
              onChange={e => setBasicInfo({ ...basicInfo, birthday: e.target.value })}
              className={`w-full border ${
                basicInfoErrors.birthday ? 'border-red-500' : 'border-gray-300'
              } rounded-md px-4 py-2`}
            />
            {basicInfoErrors.birthday && (
              <p className="text-sm text-red-500">{basicInfoErrors.birthday}</p>
            )}

            <label className="block text-sm font-medium">Reference (optional)</label>
            <input
              value={basicInfo.reference}
              onChange={e => setBasicInfo({ ...basicInfo, reference: e.target.value })}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              placeholder="Reference code or name"
            />

            <button type="submit" className="w-full bg-black text-white py-2 rounded-full font-medium">
              Next
            </button>
          </form>
        )}

        {/* Step 3: Password */}
        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <label className="block text-sm font-medium">Create Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className={`w-full border ${
                passwordError ? 'border-red-500' : 'border-gray-300'
              } rounded-md px-4 py-2`}
              placeholder="Create a password"
            />
            {passwordError && <p className="text-sm text-red-500">{passwordError}</p>}
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

        {/* Social Login */}
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
