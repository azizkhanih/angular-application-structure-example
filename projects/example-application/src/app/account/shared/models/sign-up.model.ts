export class SignUpRequest
{
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  )
  {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}

export interface SignUpResponse
{
  firstName: string;
  lastName: string;
  email: string;
}
