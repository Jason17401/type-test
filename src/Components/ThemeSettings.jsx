import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import '../Styles/SectionSettings.css';

var savedThemeSettings = [
    { colourScheme: "Template" },
    { template: "Default" },
    { custom: ["#EDEDED", "FFFFFF","#00C2FF", "00A6DB", "#343434", "#00CE00", "008800"]}
];

const colourSchemes = ["Template", "Custom"];

const colourSchemeTemplates = [
    { name: "Default", colours: "", row: 1 },
    { name: "Dark", colours: "", row: 1 },
    { name: "Greenery", colours: "", row: 1 },
    { name: "Aquamarine", colours: "", row: 1 }
];

// const colourSchemeCustoms = [
//     { name: "Background", colour: "#EDEDED"},
//     { name: "Foreground", colour: "#FFFFFF"},
//     { name: "Main", colour: "#00C2FF"},
//     { name: "Sub-main", colour: "#00A6DB"},
//     { name: "Text", colour: "#343434"},
//     { name: "Button", colour: "#00CE00"},
//     { name: "Sub-button", colour: "#008B00"}
// ]

const colourSchemeCustoms = [
    { name: "Background", colour: "#EDEDED", row: 1},
    { name: "Foreground", colour: "#FFFFFF", row: 1},
    { name: "Main", colour: "#00C2FF", row: 2},
    { name: "Sub-main", colour: "#00A6DB", row: 2},
    { name: "Text", colour: "#343434", row: 3},
    { name: "Button", colour: "#00CE00", row: 3},
    { name: "Sub-button", colour: "#008B00", row: 4}
]

console.log(savedThemeSettings[0]["colourScheme"]);
console.log(savedThemeSettings[1]["template"]);

function ThemeSettings() {
    const {
        register: register3,
        control: control3
    } = useForm();

    const [selectedColourScheme, setColourScheme] = useState(savedThemeSettings[0]["colourScheme"]);
    const [selectedTemplate, setTemplate] = useState(savedThemeSettings[1]["template"]);

    const handleChangeColourScheme = (event) => {
        console.log(event.target.value);
        setColourScheme(event.target.value);
    };

    const handleChangeTemplate = (event) => {
        console.log(event.target.value);
        setTemplate(event.target.value);
    };

    const handleChangeCustom = (event, name) => {
        console.log(name, event.target.value)
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
                                {colourSchemes[0]}
                                <input
                                    type="radio"
                                    name="colourScheme"
                                    value={colourSchemes[0]}
                                    id="colourSchemeTemplate"
                                    defaultChecked={selectedColourScheme === colourSchemes[0]}
                                    {...register3("colourScheme")}
                                    onChange={(event) => {
                                        register3("colourScheme").onChange(event);
                                        handleChangeColourScheme(event);
                                    }}
                                />
                                <span className="radioButtonBackground"></span>
                            </label>
                            <label className="radioButton" htmlFor="colourSchemeCustom">
                                {colourSchemes[1]}
                                <input
                                    type="radio"
                                    name="colourScheme"
                                    value={colourSchemes[1]}
                                    id="colourSchemeCustom"
                                    defaultChecked={selectedColourScheme === colourSchemes[1]}
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
                {selectedColourScheme === colourSchemes[0] && (
                    <div className="formField">
                        <br />
                        <div className="info">
                            {colourSchemeTemplates.map((template) => (
                                <label className="radioButton" htmlFor={"template" + template.name}>
                                    {template.name}
                                    <input
                                        type="radio"
                                        name="colourSchemeTemplate"
                                        value={template.name}
                                        id={"template" + template.name}
                                        defaultChecked={selectedTemplate === template.name}
                                        {...register3("colourSchemeTemplate")}
                                        onChange={(event) => {
                                            register3("colourSchemeTemplate").onChange(event);
                                            handleChangeTemplate(event);
                                        }}
                                    />
                                    <span className="radioButtonBackground"></span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
                {selectedColourScheme === colourSchemes[1] && (
                    <div className="info columnTwo">
                        <div className="formField noBottomMargin">
                            <br />
                            <label className="noTopMargin"><strong>{colourSchemeCustoms[0]["name"]}</strong></label>
                            <Controller
                                name={"custom" + colourSchemeCustoms[0]["name"]}
                                control={control3}
                                defaultValue={colourSchemeCustoms[0]["colour"]}
                                rules={{pattern: {
                                    value: /^#([a-f0-9]{6}|[a-f0-9]{3})$/
                                }}}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        onChange={(event) => {
                                            field.onChange(event);
                                            handleChangeCustom(event, colourSchemeCustoms[0]["name"]);
                                        }}
                                    />
                                )}
                            />
                        </div>
                        <div className="formField">
                            <br />
                            <label className="noTopMargin"><strong>{colourSchemeCustoms[1]["name"]}</strong></label>
                            <Controller
                                name={"custom" + colourSchemeCustoms[1]["name"]}
                                control={control3}
                                defaultValue={colourSchemeCustoms[1]["colour"]}
                                rules={{pattern: {
                                    value: /^#([a-f0-9]{6}|[a-f0-9]{3})$/
                                }}}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        type="text"
                                        onChange={(event) => {
                                            field.onChange(event);
                                            handleChangeCustom(event, colourSchemeCustoms[1]["name"]);
                                        }}
                                    />
                                )}
                            />
                        </div>
                    </div>
                )}
            </form>
        </div>
    )
}

export default ThemeSettings;