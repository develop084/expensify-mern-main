import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Card } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Register = () => {
  const onFinish = async (values) => {
    console.log(values);
    const res = await fetch("http://localhost:4000/auth/register", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      console.log("success");
    }
  };

  return (
    <>
      <Navbar />
      <Card type="inner" title="Register">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item name="username">
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item name="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item name="confirm">
            <Input
              name="confirmPassword"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
            Or <Link to="/login">login</Link>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};
export default Register;
