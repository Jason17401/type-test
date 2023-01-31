import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../Styles/SectionSettings.css';

var savedThemeSettings = [
    { colourScheme: "Template" }
];

const colourScheme = ["Template", "Custom"];

console.log(savedThemeSettings[0]["colourScheme"]);

function ThemeSettings() {
    const {
        register: register3
    } = useForm();

    const [selectedColourScheme, setColourScheme] = useState(savedThemeSettings[0]["colourScheme"]);

    const onSubmit3 = (data) => {
        console.log(data);
    };

    const handleChangeColourScheme = (event) => {
        console.log(event.target.value);
        setColourScheme(event.target.value);
    };

    return (
        <div className="sectionSettings">
            <form key={3}>
                <div className="formField">
                    <p><strong>Colour Scheme</strong></p>
                    <div className="info">
                        <span className="desc">Select the site's colour scheme for all components.</span>
                        <div className="radioButtons">
                            <label className="radioButton" htmlFor="colourSchemeTemplate">
                                {colourScheme[0]}
                                <input
                                    type="radio"
                                    name="colourScheme"
                                    value={colourScheme[0]}
                                    id="colourSchemeTemplate"
                                    defaultChecked={selectedColourScheme === colourScheme[0]}
                                    {...register3("colourScheme")}
                                    onChange={(event) => {
                                        register3("colourScheme").onChange(event);
                                        handleChangeColourScheme(event);
                                    }}
                                />
                                <span className="radioButtonBackground"></span>
                            </label>
                            <label className="radioButton" htmlFor="colourSchemeCustom">
                                {colourScheme[1]}
                                <input
                                    type="radio"
                                    name="colourScheme"
                                    value={colourScheme[1]}
                                    id="colourSchemeCustom"
                                    defaultChecked={selectedColourScheme === colourScheme[1]}
                                    {...register3("colourScheme")}
                                    onChange={(event) => {
                                        register3("colourScheme").onChange(event);
                                        handleChangeColourScheme(event);
                                    }}
                                />
                                <span className="radioButtonBackground"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ThemeSettings;