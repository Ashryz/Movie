import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function SignUpForm() {

    // state & setState to get field value
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rePassword: '',
        address: '',
        phone: '',
        check: ''
        
    })
   
    const dataChange = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.value.length);
        console.log(e.target.checked);
        if (e.target.name == 'firstName') {
            setData({
                ...data,
                firstName: e.target.value
            })
            setErrors({
                ...errors,
                firstNameError:e.target.value.length == 0 ? "This Field is Required" : 
                !firstNameRegex.test(e.target.value) && "This name Not Invalid, pls match the Format(ex.tarek) "
            })
        } else if (e.target.name == 'lastName') {
            setData({
                ...data,
                lastName: e.target.value
            })
            setErrors({
                ...errors,
                lastNameError:e.target.value.length == 0 ? "This Field is Required" : 
                !LastNameRegex.test(e.target.value) && "This name Not Invalid, pls match the Format(ex.tarek) "
            })
        } else if (e.target.name == 'email') {
            setData({
                ...data,
                email: e.target.value
            })
            setErrors({
                ...errors,
                emailError:e.target.value.length == 0 ? "This Field is Required" : 
                !emailRegex.test(e.target.value) && "This email Not Invalid, pls match the Format(ex.tarek@gmail.com) "
            })
        } else if (e.target.name == 'password') {
            setData({
                ...data,
                password: e.target.value
            })
            setErrors({
                ...errors,
                passwordError:e.target.value.length == 0 ? "This Field is Required" : 
                !passwordRegex.test(e.target.value) && " at least 8 char "
                
            })
        } else if (e.target.name == 'rePassword') {
            setData({
                ...data,
                rePassword: e.target.value
            })
            setErrors({
                ...errors,
                rePasswordError:e.target.value.length == 0 ? "This Field is Required" :
                e.target.value != data.password &&"Password not Matched"
                
                
               
            })

          
        } else if (e.target.name == 'address') {
            setData({
                ...data,
                address: e.target.value
            })
            setErrors({
                ...errors,
                addressError:e.target.value.length == 0 && "This Field is Required" 
               
            })

        } else if (e.target.name == 'phone'){
            setData({
                ...data,
                phone: e.target.value
            })
            setErrors({
                ...errors,
                phoneError:e.target.value.length == 0 ? "This Field is Required" : 
                !phoneRejex.test(e.target.value) && "invalid phone number "
            })
        }else if (e.target.name == 'check'){
            setData({
                ...data,
                check: e.target.checked
            })
            setErrors({
                checkError:e.target.checked == false && "pls check the box"
            })
        
        }


    }

//========================================
//handel error
// errors required & invalid
const [errors, setErrors] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: '',
    rePasswordError: '',
    addressError: '',
    phoneError: '',
    checkError: ''

  })

  const firstNameRegex =/^[a-zA-Z]{3,}$/;
  const LastNameRegex =/^[a-zA-Z]{3,}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =/^[a-zA-Z0-9._%+-]{8,}$/;
  const phoneRejex = /^01[0-9][0-9]{8}$/





    return (
        <Form className="row g-3 w-50 m-auto flex-column justify-content-center align-items-center shadow p-4 rounded-5 mt-5">
            <h1 className='mb-5'>Register</h1>
            <Row className="mb-3 text-start">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" placeholder="Enter First Name" onChange={(e) => dataChange(e)} isInvalid={!!errors.firstNameError} isValid={!errors.firstNameError && data.firstName} />
                    <Form.Control.Feedback type="invalid">{errors.firstNameError}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">{errors.firstNameError}</Form.Control.Feedback>

                </Form.Group>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" placeholder="Enter Lasr Name" onChange={(e) => dataChange(e)} isInvalid={!!errors.lastNameError} isValid={!errors.lastNameError && data.lastName}/>
                   
                    <Form.Control.Feedback type="invalid">{errors.lastNameError}</Form.Control.Feedback>

                
                </Form.Group>

            </Row>
            <Row className="mb-3 text-start">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" onChange={(e) => dataChange(e)} isInvalid={!!errors.emailError} isValid={!errors.emailError && data.email} />
                   
                    <Form.Control.Feedback type="invalid">{errors.emailError}</Form.Control.Feedback>

                </Form.Group>
            </Row>
            <Row className="mb-3 text-start">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter password" onChange={(e) => dataChange(e)} isInvalid={!!errors.passwordError} isValid={!errors.passwordError && data.password}/>
                   
                    <Form.Control.Feedback type="invalid">{errors.passwordError}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Re-Password</Form.Label>
                    <Form.Control name="rePassword" type="password" placeholder="Enter Password" onChange={(e) => dataChange(e)} isInvalid={!!errors.rePasswordError} isValid={data.password == data.rePassword && data.rePassword >= 8} />
                    <Form.Control.Feedback type="invalid">{errors.rePasswordError}</Form.Control.Feedback>
                    <Form.Control.Feedback type="valid">Matched</Form.Control.Feedback>

                </Form.Group>
        
            </Row>
            <Row className="mb-3 text-start">
                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" name='address' onChange={(e) => dataChange(e)} isInvalid={!!errors.addressError} isValid={!errors.addressError && data.address}/>
                    <Form.Control.Feedback type="invalid">{errors.addressError}</Form.Control.Feedback>

                </Form.Group>
            </Row>
            <Row className="mb-3 text-start">
                <Form.Group className="mb-3" as={Col} controlId="formGridCity">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control placeholder='+20' name='phone' onChange={(e) => dataChange(e)} isInvalid={!!errors.phoneError} isValid={!errors.phoneError && data.phone}/>
                    <Form.Control.Feedback type="invalid">{errors.phoneError}</Form.Control.Feedback>

                </Form.Group>
            </Row>
            <Row className="mb-3 text-start">
                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check name='check' type="checkbox" onChange={(e) => dataChange(e)}  label="By signing up, you agree to the Terms of Service ,Privacy Policy and including Cookie Use" />
                    <span className="text-danger">{errors.checkError}</span>
                </Form.Group>
            </Row>
         
            <Button variant="primary" type="submit" className="my-3 w-25 m-auto rounded-5">
                Submit
            </Button>
        </Form>
    );
}

export default SignUpForm;
