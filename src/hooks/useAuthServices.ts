import { useNavigate } from 'react-router';

import { useMutation } from '@tanstack/react-query';

import {
  type LoginPayload,
  type LoginResponse,
  type SignupPayload,
  type SignupResponse,
  authService,
} from '@/services/authService';

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isSuccess, error, data, reset } = useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: authService.login,
    onSuccess: () => {
      navigate('/');
    },
  });

  const login = async (payload: LoginPayload) => {
    reset();
    return mutateAsync(payload);
  };

  return {
    login,
    isLoading: isPending,
    isSuccess,
    error,
    data,
  };
};

export const useSignUp = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isSuccess, error, data, reset } = useMutation<SignupResponse, Error, SignupPayload>({
    mutationFn: authService.signup,
    onSuccess: () => {
      navigate('/login');
    },
  });

  const signUp = async (payload: SignupPayload) => {
    reset();
    return mutateAsync(payload);
  };

  return {
    signUp,
    isLoading: isPending,
    isSuccess,
    error,
    data,
  };
};
