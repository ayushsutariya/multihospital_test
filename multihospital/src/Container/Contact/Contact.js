import React from 'react';
import { Form, Formik, useFormik } from 'formik';
import * as yup from 'yup';

function Contact(props) {

    // let history = useHistory();


    let schema = yup.object().shape({
        name: yup.string().required("Please enter your name "),
        email: yup.string().email("Please enter a valid email").required("Please enter your email"),
        subject: yup.string().required("Please enter the subject "),
        message: yup.string().required("Please enter the message"),
    });

    const SubmitData = (values) => {
        const Localdata = JSON.parse(localStorage.getItem("contact"));

        if(Localdata === null){
            localStorage.setItem("contact" , JSON.stringify([Localdata]))
        } else{
            Localdata.push(values)
            localStorage.setItem("contact" , JSON.stringify(values))
        }
    }

    const formik = useFormik({
        validationSchema: schema,
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        },
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));

            SubmitData(values);

            resetForm();
        },
    });
    console.log(formik.errors);
    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                        luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
                </div>
            </div>
            <Formik value={formik}>
                <Form onSubmit={formik.handleSubmit}>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt" />
                                        <h4>Location:</h4>
                                        <p> F-505, Inovative Plazza New Delhi, India</p>
                                    </div>
                                    <div className="email">
                                        <i className="bi bi-envelope" />
                                        <h4>Email:</h4>
                                        <p>cityhospital@example.com</p>
                                    </div>
                                    <div className="phone">
                                        <i className="bi bi-phone" />
                                        <h4>Call:</h4>
                                        <p>+91 9988776655</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 mt-5 mt-lg-0">
                                <form action method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required
                                                onChange={formik.handleChange}
                                                value={formik.values.name}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.name && formik.touched.name ? <p className='error'>{formik.errors.name}</p> : null}
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required
                                                onChange={formik.handleChange}
                                                value={formik.values.email}
                                                onBlur={formik.handleBlur}
                                            />
                                            {formik.errors.email && formik.touched.email ? <p className='error'>{formik.errors.email}</p> : null}
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required
                                            onChange={formik.handleChange}
                                            value={formik.values.subject}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.subject && formik.touched.subject ? <p className='error'>{formik.errors.subject}</p> : null}
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""}
                                            onChange={formik.handleChange}
                                            value={formik.values.message}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.message && formik.touched.message ? <p className='error'>{formik.errors.message}</p> : null}
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Form>
            </Formik>
        </section>

    );
}

export default Contact;