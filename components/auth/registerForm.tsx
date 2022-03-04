/* eslint-disable new-cap */
import React from 'react';
import { Button, ButtonToolbar, FlexboxGrid, Form, Schema } from 'rsuite';
import { StringType } from 'schema-typed';

const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
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
    name: '',
    email: '',
    password: '',
    verifyPassword: ''
  });

  const handleSubmit = () => {
    if (!formRef.current.check()) {
      console.error('Form Error');
      return;
    }
    console.log(formValue, 'Form Value');
  };

  const handleCheckEmail = () => {
    formRef.current.checkForField('email', (checkResult: any) => {
      console.log(checkResult);
    });
  };
  return (
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={12}>
        <Form
          ref={formRef}
          onChange={setFormValue}
          onCheck={setFormError}
          formValue={formValue}
          model={model}
        >
          <TextField name="name" label="Username" />
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
  );
};



export default RegisterForm;
