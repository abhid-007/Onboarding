import React from 'react';
import {Alert, Button, Card, Flex, Form, Input, Spin, Typography} from 'antd';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister = (values) => {
        console.log(values);
    };

  return( 
  <Card className='form-container'>
    <Flex>
    {/* Form */}
        <Flex vertical flex={1} className='form'>
        <Typography.Title level={3} strong className='title'>
            Create an Account
            </Typography.Title>
        <Typography.Text type='secondary' strong className="slogan">
        Welcome👋. Let's get you started
            </Typography.Text>
        <Form layout='vertical' onFinish={handleRegister} autoComplete='off' autoCorrect='off'>
            <Form.Item label="Full Name" name="name" rules= {[{
                required: true,
                message: 'Please enter your full name!'
                }]}>
                <Input size='large' placeholder='Enter your Full Name' />
            </Form.Item>
            <Form.Item label="Email" name="email" rules= {[
                {
                required: true,
                message: 'Please enter your email!'
                },
                {
                    type: 'email',
                    message: 'Please enter a valid email!',
                }
                ]}>
                <Input size='large' placeholder='Enter your Email' />
                </Form.Item>
                
                <Form.Item label="Password" name="password" rules= {[{
                    required: true,
                    message: 'Please enter your password!'
                    }]}>
                    <Input.Password size='large' placeholder='Enter your Password' />
                    </Form.Item>

                <Form.Item label="Confirm Password" name="passwordConfirm" rules= {[{
                    required: true,
                    message: 'Please re-enter your password!'
                    }]}>
                    <Input.Password size='large' placeholder='Confirm your Password' />
                </Form.Item>
                
                <Form.Item>
                    <Button size='large' type='primary' htmlType="submit" className='btn'>Create Account</Button>
                </Form.Item>
                <Form.Item>
                    <Link to='/login'>
                    <Button size='large' className='btn'>Already a User? Login</Button>
                    </Link>
                </Form.Item>
        </Form>
    </Flex>


    {/* Image */}
    <Flex></Flex>
    </Flex>
  </Card>
  );
};

export default Register