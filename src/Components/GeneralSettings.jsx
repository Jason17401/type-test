import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import '../Styles/SectionSettings.css';

var savedGeneralSettings = [
    { language: { value: "English", label: "English" }}
];

const languages = [
    { value: "English", label: "English" },
    { value: "Chinese", label: "Chinese" },
    { value: "Hindi", label: "Hindi" },
    { value: "Spanish", label: "Spanish" },
    { value: "French", label: "French" }
];

console.log(savedGeneralSettings[0]["language"]);

function GeneralSettings() {
    const {
        control: control2
    } = useForm();

    const [selectedLanguage, setLanguage] = useState(savedGeneralSettings[0]["language"]);

    const handleChangeLanguage = (event) => {
        console.log(event);
        setLanguage(event);
    };

    return (
        <div className="sectionSettings">
            <form key={2}>
                <div className="formField">
                    <label><strong>Language</strong></label>
                    <div className="info">
                        <span className="desc">Select the site's display language.</span>
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
                                        onChange={(event) => {
                                            field.onChange(event);
                                            handleChangeLanguage(event);
                                        }}
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