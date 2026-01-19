import type { AxiosResponse } from 'axios';

import type { AuthUser } from '@/types/auth';

import axiosInstance from '@/lib/axios';

export type LoginPayload = {
  email: string;
  password: string;
};

export type SignupPayload = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
};

export type CredentialsData = {
  message: string;
  user: AuthUser;
};

export type LogoutData = {
  message: string;
};

export type ProfileData = {
  user: AuthUser;
};

export type LoginResponse = AxiosResponse<CredentialsData>;
export type SignupResponse = AxiosResponse<CredentialsData>;
export type LogoutResponse = AxiosResponse<LogoutData>;
export type ProfileResponse = AxiosResponse<ProfileData>;

export const authService = {
  login: (payload: LoginPayload): Promise<LoginResponse> => {
    return axiosInstance.post('/auth/login', payload);
  },

  signup: (payload: SignupPayload): Promise<SignupResponse> => {
    return axiosInstance.post('/auth/signup', payload);
  },

  logout: (): Promise<LogoutResponse> => {
    return axiosInstance.post('/auth/logout');
  },

  getProfile: (): Promise<ProfileResponse> => {
    return axiosInstance.get('/auth/profile');
  },
};
