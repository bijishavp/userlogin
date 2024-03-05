import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Toast } from 'react-bootstrap';
import { addUserdetails, getUserdetails } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Functional component for Registration
const Register = () => {

  const[allusers,getAlluser]=useState([])
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: ""
  })
  const navigate = useNavigate();


  const userLogin = () => {
    // Perform registration logic here
    // ...

    // Redirect to OTP page
    navigate('/user');

  };

  const setInput = (e) => {

    // console.log(e.target.value);
    const { name, value } = e.target

    setUserDetails({ ...userDetails, [name]: value })
  }
  // console.log(userDetails);
  console.log(userDetails);



  // make it asynch ..it has an api inside addvideo
  const handleAdd = async () => {
    const { username, email, password } = userDetails;
  
    // Basic validation
    if (!username.trim() || !email.trim() || !password.trim()) {
      toast.warning("Please fill out all fields");
      return;
    }
  
    // Additional validation (you can customize this based on your requirements)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.warning("Invalid email format");
      return;
    }
  
    // Check if the email already exists in allusers
    const emailExists = allusers.some((user) => user.email === email);
    if (emailExists) {
      toast.warning("Email already exists. Please use a different email.");
      return;
    }
  
    // Check password strength or other validations as needed
  
    // Proceed with registration
    try {
      const response = await addUserdetails(userDetails);
      console.log(response.data);
      alert('Successfully Registered')
      navigate('/user');
      
    } catch (error) {
      console.error("Registration failed:", error.message);
      toast.error("Registration failed. Please try again later.");
    }
  };
  
  useEffect(() => {
    // call bck fn body
    getalluserData()
   
  }, [])
  const getalluserData = async () => {

    let response = await getUserdetails()

    //console.log(response.data);
    // this value is needed in other components/videocard component here.. so need to hold and share

    //// to share this use setAllvideos state
    getAlluser(response.data);
  }
  console.log(allusers);
  

  return (
    <>
      <Container style={styles.container}>
        <h2 style={styles.heading}>Register Now</h2>
        <Form style={styles.form}>
          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.label}>Name:</Form.Label>
            <Form.Control
              type="text"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              name='username'
              onChange={setInput}
              style={styles.input}
            />
          </Form.Group>
          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.label}>Email:</Form.Label>
            <Form.Control
              type="email"
              name='email'
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              onChange={setInput}
              style={styles.input}
            />
          </Form.Group>
          <Form.Group style={styles.formGroup}>
            <Form.Label style={styles.label}>Password:</Form.Label>
            <Form.Control
              type="password"
              name='password'
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              onChange={setInput}
              style={styles.input}
            />
          </Form.Group>
          <Button variant="success" onClick={handleAdd} style={styles.button}>
            Register
          </Button>
          <Button style={styles.button} variant="link" onClick={userLogin}>Already Registered? Login</Button>
        </Form>
      </Container>
      <ToastContainer />
    </>
  );
};

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

export default Register;
