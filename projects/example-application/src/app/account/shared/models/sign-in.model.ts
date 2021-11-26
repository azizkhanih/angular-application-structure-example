export interface SignInRequest
{
  email: string;
  password: string;
}

export interface SignInResponse
{
  accessToken: string;
  refreshToken: string;
}
