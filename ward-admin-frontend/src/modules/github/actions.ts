import { createAsyncAction } from 'typesafe-actions';
import { GithubProfile } from '../../api/github';
import { AxiosError } from 'axios';

export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';


export const getUserProfileAsync = createAsyncAction(
  // 요청이 시작되었을 때 디스패치되는 액션
  GET_USER_PROFILE,
  // 요청이 성공했을 때 디스패치 되는 액션
  GET_USER_PROFILE_SUCCESS,
  // 요청이 실패했을 때 디스패치 되는 액션
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>();



