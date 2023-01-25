import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import '../Styles/Forms.css';

const categories = [
    {value: "Query", label: "Query"},
    {value: "Feedback", label: "Feedback"},
    {value: "Bug report", label: "Bug report"},
    {value: "Other", label: "Other"}
];

function ContactForm() {
    const [submitMessage, setSubmitMessage] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setSubmitMessage("Contact form submitted successfully!");
        reset();
    };

    return (
        <div className="contactForm">
            <form onSubmit={ handleSubmit(onSubmit) } key={ 1 }>
                <div className="formField">
                    <label>Your Name (The name you wish we address you with)</label>
                    <input
                        type="text"
                        name="name"
                        { ...register("name") }
                    />
                </div>
                <div className="formField">
                    <label>Email Address<span className="asterisk">*</span></label>
                    <input
                        type="text"
                        name="email"
                        { ...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Email is not valid."
                            }
                        })}
                    />
                    { errors.email && <p className="errorMessage">{ errors.email.message }</p> }
                </div>
                <div className="formField">
                    <label>Select Category<span className="asterisk">*</span></label>
                    <Controller
                        name="category"
                        control={ control }
                        rules={{ required: "Category selection is required." }}
                        render={({ field }) => (
                            <Select { ...field } options={ categories } />
                        )}
                    />
                    { errors.category && <p className="errorMessage">{ errors.category.message }</p>}
                </div>
                <div className="formField">
                    <label>Description<span className="asterisk">*</span></label>
                    <textarea
                        type="text"
                        name="description"
                        { ...register("description", {
                            required: "Description is required.",
                            maxLength: {
                                value: 200,
                                message: "Description should be within 200 words long."
                            }
                        })}
                    />
                    { errors.description && <p className="errorMessage">{ errors.description.message }</p>}
                </div>
                <div className="formField">
                    <label></label>
                    <button type="submit">Submit Form</button>
                </div>
                { submitMessage && <p className="message">{ submitMessage }</p>}
            </form>
        </div>
    );
}

export default ContactForm;