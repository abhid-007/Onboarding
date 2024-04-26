import React from 'react'
import {Alert, Button, Card, Flex, Form, Input, Spin, Typography} from 'antd';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = async (values) => {
        console.log(values);
    };

  return( 
  <Card className='form-container'>
    <Flex>
    {/* Form */}
        <Flex vertical flex={1} className='form'>
        <Typography.Title level={3} strong className='title'>
            Sign In to your Account
            </Typography.Title>
        <Typography.Text type='secondary' strong className="slogan">
        Welcome back👋. 
            </Typography.Text>
        <Form layout='vertical' onFinish={handleLogin} autoComplete='off' autoCorrect='off'>
           
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

                
                <Form.Item>
                    <Button size='large' type='primary' htmlType="submit" className='btn'>Log In</Button>
                </Form.Item>
                <Form.Item>
                    <Link to='/'>
                    <Button size='large' className='btn'>New here? Sign up</Button>
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

export default Login