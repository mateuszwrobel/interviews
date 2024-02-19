import { components } from '@interviewspnpm/utils';
import { auth } from '@interviewspnpm/core';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const { Input, Label, Button } = components;
export function Auth() {
  const { signIn, isAuthenticated } = auth.useAuthMethods();
  const user = auth.useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && isAuthenticated()) {
      navigate('/');
    }
  }, [user]);

  if (isAuthenticated()) {
    return null;
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const email = form.elements.namedItem('e-mail') as HTMLInputElement;
    signIn({ email: email.value });
  };

  return (
    <div className="container mx-auto grid items-center gap-4 p-4">
      <form
        className="flex flex-col lg:flex-row items-center gap-4"
        onSubmit={handleSubmit}
      >
        <div className="grow flex items-center self-stretch lg:self-auto gap-4">
          <Label className="flex-shrink-0 m-0" htmlFor="e-mail">
            E-mail
          </Label>
          <Input
            id="e-mail"
            name="e-mail"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <Button className="self-stretch lg:self-auto" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
}
