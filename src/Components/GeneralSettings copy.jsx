import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from "react-select";
import '../Styles/GeneralSettings.css';

const languages = [
    {value: "English", label: "English"},
    {value: "Chinese", label: "Chinese"},
    {value: "Hindi", label: "Hindi"},
    {value: "Spanish", label: "Spanish"},
    {value: "French", lable: "French"}
]

function GeneralSettings(props) {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h1 id={ props.info.href }>{ props.info.name }</h1>
            <table>
                <tr className="titleRow">
                    <th><strong>Language</strong></th>
                </tr>
                <tr className="settingRow">
                    <td width="60%">Select the site's display language.</td>
                    <td width="40%">
                        <div className="dropDownMenu">
                            <form onChange={ handleSubmit(onSubmit) }>
                                <div className="formField">
                                    <Controller
                                        name="language"
                                        control={ control }
                                        render={({ field }) => (
                                            <Select { ...field } defaultValue={ languages[0] } options={ languages }/>
                                        )}
                                    />
                                </div>
                            </form>
                        </div>
                    </td>
                </tr>
            </table>
            <p>h<br/>h<br/>h<br/></p>
        </div>
    )
}

export default GeneralSettings;