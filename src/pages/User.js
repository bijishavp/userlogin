import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { getUserdetails } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function User() {
  const [allusers, getAlluser] = useState([]);
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Redirect to registration page
    navigate('/');
  };

  const userLogin = () => {
    const { email, password } = loginDetails;
    const user = allusers.find(user => user.email === email && user.password === password);
  
    if (user) {
      toast("Login successful");
  
      // Pass the email as a parameter to the dashboard
      navigate(`/dashboard?email=${email}`);
    } else {
      toast.error("Login failed");
    }
  };
  
  useEffect(() => {
    // Fetch all user data when the component mounts
    getalluserData();
  }, []);

  const getalluserData = async () => {
    try {
      const response = await getUserdetails();
      getAlluser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  return (
    <>
      <Container style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <Form style={styles.form}>
          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.label}>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={loginDetails.email}
              onChange={handleInputChange}
              style={styles.input}
            />
          </Form.Group>
          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.label}>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={loginDetails.password}
              onChange={handleInputChange}
              style={styles.input}
            />
          </Form.Group>
          <Button variant="success" onClick={userLogin} style={styles.button}>
            Login
          </Button>
          <Button variant="link" onClick={handleNavigate} style={styles.button}>
            New User?
          </Button>
        </Form>
      </Container>
      <ToastContainer/>
    </>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '100px',
    padding: '50px',
    boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.5)',
    borderRadius: '8px',
  },
  heading: {
    textAlign: 'center',
    color: '#fff',
  },
  form: {
    marginTop: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '8px',
    color: '#fff',
  },
  input: {
    fontSize: '16px',
  },
  button: {
    marginTop: '15px',
    width: '100%',
  },
};

export default User;
