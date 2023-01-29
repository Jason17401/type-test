import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import '../Styles/GeneralSettings.css';

var savedSettings = [
    { language: { value: "English", label: "English" }}
];

const languages = [
    { value: "English", label: "English" },
    { value: "Chinese", label: "Chinese" },
    { value: "Hindi", label: "Hindi" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" }
];

console.log(savedSettings[0]["language"]);

function GeneralSettings() {
    const {
        control: control2
    } = useForm();

    const [selectedLanguage, setLanguage] = useState(savedSettings[0]["language"]);

    const handleChangeLanguage = (event) => {
        console.log(event);
        setLanguage(event);
    };

    return (
        <div className="generalSettings">
            <form key={2}>
                <div className="formField">
                    <label><strong>Language</strong></label>
                    <div className="info">
                        <span>Select the site's display language.</span>
                        <Controller
                            name="language"
                            control={ control2 }
                            render={({ field }) => (
                                <div style={{ width: "200px" }}>
                                    <Select
                                        { ...field }
                                        value={ selectedLanguage }
                                        options={ languages }
                                        menuPortalTarget={ document.body }
                                        onChange={ handleChangeLanguage }
                                    />
                                </div>
                            )}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default GeneralSettings;