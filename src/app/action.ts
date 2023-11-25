'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function loginServerAction(prevState, formData) {
  const { email, password } = Object.fromEntries(formData);

  const response = await fetch(
    `${process.env.BACKEND_URL}/authManagement/auth/login`,
    {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    },
  );

  const bodyPayload = await response.json();

  if (!response.ok) {
    console.log(bodyPayload);
    return bodyPayload;
  }

  cookies().delete('accessToken');
  cookies().set('accessToken', bodyPayload.accessToken);

  redirect('/dashboard');
}
