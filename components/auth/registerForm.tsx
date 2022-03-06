/* eslint-disable new-cap */
import React from 'react';
import { Button, ButtonToolbar, FlexboxGrid, Form, Schema } from 'rsuite';
import { StringType } from 'schema-typed';
// import Cookies from 'universal-cookie';
import BasicModal from '../modal/basicModal';
const model = Schema.Model({
  username: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.'),
  password: StringType().isRequired('This field is required.'),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, 'The two passwords do not match')
    .isRequired('This field is required.')
});

const TextField = React.forwardRef((props: any, ref: any) => {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-4`} ref={ref}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
});

TextField.displayName = 'TextField'

const RegisterForm: React.FunctionComponent = () => {
  const formRef = React.useRef<any>();
  // eslint-disable-next-line no-unused-vars
  const [formError, setFormError] = React.useState<any>({});
  const [formValue, setFormValue] = React.useState<any>({
    username: '',
    email: '',
    password: '',
    verifyPassword: ''
  });
  const [open, setModalOpen] = React.useState(false);
  // const handleModalOpen = () => setModalOpen(true);
  const onModalClose = () => setModalOpen(false);

  const handleSubmit = async () => {

    if (!formRef.current.check()) {
      throw new Error('Form Error');
    }

    const { username, password, email } = formValue;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, email })
  };

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/auth/register`, requestOptions);

    if(response.ok) {
      setModalOpen(true)
    }

    // const { token } = await response.json();
    // const cookies = new Cookies();
    // TODO: change secure prop to true when we have https 
    // cookies.set('token', token, { path: '/', httpOnly: true, sameSite: 'strict', secure: false });
    // console.warn(cookies.get('token'), token)
  } catch (error) {
    throw new Error(`${error}`);
  }
    console.log(formValue, 'Form Value');
  };

  const handleCheckEmail = () => {
    formRef.current.checkForField('email', (checkResult: any) => {
      console.log(checkResult);
    });
  };
  return (
    <>
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={12}>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <TextField name="username" label="Username" />
          <TextField name="email" label="Email" />
          <TextField name="password" label="Password" type="password" autoComplete="off" />
          <TextField
            name="verifyPassword"
            label="Verify password"
            type="password"
            autoComplete="off"
          />

          <ButtonToolbar>
            <Button appearance="primary" onClick={handleSubmit}>
              Submit
            </Button>

            <Button onClick={handleCheckEmail}>Check Email</Button>
          </ButtonToolbar>
        </Form>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12}>
      </FlexboxGrid.Item>
    </FlexboxGrid>
    <BasicModal 
      title = 'User registration successful' 
      paragraph = 'Email verification send. Look for the verification email in your inbox (also spam / junk) and click the link in that email. A confirmation message will appear in your web browser.' 
      buttonText='Ok' 
      onClose = {onModalClose}
      onAccept = {onModalClose}
      open = {open}
  ></BasicModal>
  </>
  );
};



export default RegisterForm;
