import React from 'react';
import Header from 'next/head';
import Layout from '../components/layout';
import RegisterForm from '../components/auth/registerForm';

export default function Home() {
  return (
    <>
      <Header>
        <title>Register</title>
      </Header>
      <Layout activeKey="register">
        <h1> RegisterForm 2 </h1>
      <RegisterForm></RegisterForm>
      </Layout>
    </>
  );
}
