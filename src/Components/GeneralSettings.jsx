import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import '../Styles/GeneralSettings.css';

const languages = [
    {value: "English", label: "English"},
    {value: "Chinese", label: "Chinese"},
    {value: "Hindi", label: "Hindi"},
    {value: "Spanish", label: "Spanish"},
    {value: "French", label: "French"}
]

function GeneralSettings() {
    const {
        control: control2,
        handleSubmit: handleSubmit2
    } = useForm();

    const onSubmit2 = (data) => {
        console.log(data);
    };

    return (
        <div>
            <div className="generalSettings">
                <form key={ 2 }>
                    <div className="formField">
                        <label htmlFor="language"><strong>Language</strong></label>
                        <div className="info">
                            <span>Select the site's display language.</span>
                            <Controller
                                name="language"
                                id="language"
                                control={ control2 }
                                defaultValue={ languages[0] }
                                render={({ field }) => (
                                    <div style={{ width: "200px" }}>
                                        <Select
                                            { ...field }
                                            options={ languages }
                                            menuPortalTarget={ document.body }
                                            onChange={ handleSubmit2(onSubmit2) }
                                        />
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GeneralSettings;