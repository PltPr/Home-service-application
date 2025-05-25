import React from 'react';
import * as Yup from "yup";
import { useAuth } from '../../Context/useAuth';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type Props = {};

type LoginFormInput = {
    email: string;
    password: string;
};

const validation = Yup.object().shape({
    email: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
    const { loginUser } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInput>({
        resolver: yupResolver(validation)
    });

    const handleLogin = (form: LoginFormInput) => {
        loginUser(form.email, form.password);
    };

    return (
        <div className="bg-gradient-to-b from-gray-200 to-[#666666] min-h-screen flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-black">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
      
            <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>
      
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password")}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                )}
              </div>
      
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      );
};

export default LoginPage;
