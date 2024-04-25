import React from 'react';
import {Card, Flex, Typography} from 'antd';

const Register = () => {
  return( 
  <Card className='form container'>
    <FLex>
    {/* Form */}
    <FLex>
        <Typography.Title level={3} strong className='title'>Create an Account</Typography.Title>
        <Typography.Text type='secondary' strong className="slogan">Join for exclusive access!</Typography.Text>
    </FLex>


    {/* Image */}
    <FLex></FLex>
    </FLex>
  </Card>
  );
};

export default Register