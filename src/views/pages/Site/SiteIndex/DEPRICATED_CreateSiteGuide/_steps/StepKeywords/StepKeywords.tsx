import { useEffect, useState } from 'react';
import useForm from "hooks/useForm";

import Input from "atoms/Input/Input";
import useGuide from '../../_logic/useGuide';


const createBlobData = {
    description: "",
    keywords: "",
    money_keywords: "",
    domain: null, //if selected: domain.com
}


function StepKeywords() {
    const { setSiteKeywords } = useGuide();

    const form = useForm(null, {
        description: "",
        keywords: "",
        money_keywords: "",
        domainChecked: "ai",
        domain: null,
    });
    const formValues = form.values;

    useEffect(() => {
        setSiteKeywords(formValues)
    }, [formValues])

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === "ai") {
            form.handleChange({
                target: {
                    name: "domainChecked",
                    value: "ai"
                }
            });
            form.handleChange({
                target: {
                    name: "domain",
                    value: null
                }
            });
        } else {
            form.handleChange({
                target: {
                    name: "domainChecked",
                    value: e.target.value === "custom" ? "custom" : "ai"
                }
            });
        }
    };

    return (
        <div className="overflow-auto">
            <div className="mb-4 space-y-6">
                <Input
                    label="Keywords"
                    className="w-full"
                    placeholder="Keywords"
                    name="keywords"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => form.handleChange(e)}
                    value={formValues.keywords}
                />
                <Input
                    label="Money Keywords"
                    className="w-full"
                    placeholder="Money Keywords"
                    name="money_keywords"
                    onChange={(e: any) => form.handleChange(e)}
                    value={formValues.money_keywords}
                />

                <div className="grid lg:grid-cols-2 gap-4">
                    <div className="flex items-center pl-4 border border-gray-300 rounded">
                        <input
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                            type="radio"
                            // name="domainChecked"
                            id="ai"
                            value="ai"
                            checked={formValues.domainChecked === "ai"}
                            onChange={(e) => handleRadioChange(e)}
                        />
                        <label
                            htmlFor="ai"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
                        >
                            Let AI find and register my domain
                        </label>
                    </div>
                    <div className="flex items-center pl-4 border border-gray-300 rounded">
                        <input
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                            type="radio"
                            id="custom"
                            value="custom"
                            checked={formValues.domainChecked === "custom"}
                            onChange={(e) => handleRadioChange(e)}
                        />
                        <label
                            htmlFor="custom"
                            className="w-full py-4 ml-2 text-sm font-medium text-gray-900"
                        >
                            Register specific domain
                        </label>
                    </div>
                </div>

                {formValues.domainChecked === "custom" && (
                    <Input
                        label="Domain"
                        className="w-full"
                        placeholder="Domain"
                        name="domain"
                        onChange={(e) => form.handleChange(e)}
                        value={formValues.domain}
                    />
                )}

                <Input
                    as="textarea"
                    label="Description"
                    className="w-full min-h-[150px]"
                    placeholder="Persona Description"
                    name="description"
                    onChange={(e: any) => form.handleChange(e)}
                    value={formValues.description}
                />
            </div>
        </div>
    );
}

export default StepKeywords;
