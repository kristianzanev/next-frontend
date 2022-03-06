import React from 'react';
import Header from 'next/head';
import Layout from '../components/layout';
import RegisterForm from '../components/auth/registerForm';

// eslint-disable-next-line require-jsdoc
export default function Register() {
  return (
    <>
      <Header>
        <title>Register</title>
      </Header>
      <Layout activeKey="register">
        <h1> Register Form</h1>
      <RegisterForm></RegisterForm>
      </Layout>
    </>
  );
}
