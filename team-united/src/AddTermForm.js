
import React from "react";
import useForm from "./useForm"
import validate from "./ValidateForm"

function AddTermForm() {
    const { handleChange, handleSubmit, values, errors } = useForm(submit, validate)

    function submit() {

        alert("submitted successfully")
    }
    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <h1>Enter new concept</h1>
                <div>
                    <label htmlFor="terms"> Name</label>
                    <div>
                        <input className={`${errors.name} && "input-error" `} type="name" name="name" placeholder="Terminology.."
                            value={values.name}
                            onChange={handleChange}
                            required />
                    </div>
                </div>

                {errors.name && <span className="errors">{errors.name}</span>}

                <div>
                    <label htmlFor="description" > Description </label>
                    <div>
                        <input className="description" type="description" name="description" placeholder="Description.."
                            value={values.description} onChange={handleChange}
                        />
                    </div>
                </div>

                {errors.description && <span className="errors">{errors.description}</span>}

                <div>
                    <label htmlFor="link"> Link</label>
                    <div>
                        <input className="link" type="url" name="link1" placeholder="Link.." value={values.link1} onChange={handleChange}
                        />
                    </div>
                </div>

                {errors.link1 && <span className="errors">{errors.link1}</span>}

                <div>
                    <label htmlFor="Link">Link</label>
                    <div>
                        <input className="link " type="url" name="link2" placeholder="Link.." value={values.link2} onChange={handleChange} />
                    </div>
                </div>
                {errors.link2 && <span className="errors">{errors.link2}</span>}

                <div>
                    <input className="submit" type="submit" value="Submit" />
                </div>

            </form>
        </>
    )
}

export default AddTermForm