import React from 'react';
import Header from 'next/head';
import Layout from '../components/layout';
// import RegisterForm from '../components/auth/registerForm';
import BasicModal from '../components/modal/basicModal';

// eslint-disable-next-line require-jsdoc
export default function Test() {
  const [open, setOpen] = React.useState(true);
  // const handleOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <Header>
        <title>Modal test</title>
      </Header>
      <Layout activeKey="test">
        <h1>Modal test</h1>
        <BasicModal 
          title = 'Title of modal' 
          paragraph = 'Some description here!' 
          buttonText='Ok' 
          onClose = {onClose}
          onAccept = {onClose}
          open = {open}
        ></BasicModal>
      </Layout>
    </>
  );
}
