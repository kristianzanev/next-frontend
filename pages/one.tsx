/* eslint-disable require-jsdoc */
import React from 'react';
import Header from 'next/head';
import Layout from '../components/layout';

export default function PageOne() {
  return (
    <>
      <Header>
        <title>Page 1</title>
      </Header>
      <Layout activeKey="one">
        <h1> Page 1 </h1>
      </Layout>
    </>
  );
}
