import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import '../Styles/GeneralSettings.css';

const languages = [
    { value: "English", label: "English" },
    { value: "Chinese", label: "Chinese" },
    { value: "Hindi", label: "Hindi" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" }
]

function GeneralSettings() {
    const {
        control: control2,
        handleSubmit: handleSubmit2,
        setValue: setValue2
    } = useForm();

    const onSubmit2 = (data) => {
        console.log(data.language);
    };

    const handleChange2 = (change) => {
        setValue2("language", change, {
            shouldDirty: true
        });
    };

    return (
        <div className="generalSettings">
            <form key={2} onSubmit={handleSubmit2(onSubmit2)}>
                <div className="formField">
                    <label><strong>Language</strong></label>
                    <div className="info">
                        <span>Select the site's display language.</span>
                        <Controller
                            name="language"
                            control={control2}
                            defaultValue={ languages[0] }
                            render={({ field }) => (
                                <div style={{ width: "200px" }}>
                                    <Select
                                        { ...field }
                                        defaultValue={ languages[0] }
                                        options={languages}
                                        menuPortalTarget={document.body}
                                        onChange={ handleChange2 }
                                    />
                                </div>
                            )}
                        />
                    </div>
                </div>
                <div className="formField">
                    <label></label>
                    <button type="submit">Submit Form</button>
                </div>
            </form>
        </div>
    )
}

export default GeneralSettings;