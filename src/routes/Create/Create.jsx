import "./Create.css";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

const defaultFormFields = {
    title: "",
    content: "",
    author: "Mario"
};

const Create = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    const {title, content, author} = formFields;

    const handleFieldChange = ({target}) => {
        const {name, value} = target;

        setFormFields(formFields => {
            const updatedFields = {...formFields};
            updatedFields[name] = value;
            return updatedFields;
        });
    };

    const handleFormSubmitted = (e) => {
        e.preventDefault();
        setIsPending(true);

        fetch("http://localhost:8001/posts", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formFields)
        })
            .then(() => {
                console.log("New blog added");
                setIsPending(false);
            })
            .catch(error => setError(error));
    };

    useEffect(() => {
        if (isPending) {
            console.log("loading...");
        } else {
            setFormFields(defaultFormFields);
        }
    }, [isPending]);

    return (
        <div className="create-post-container container">
            <h2>Create New Post</h2>

            <form className="create-post-form" onSubmit={handleFormSubmitted}>
                <label>
                    Title
                    <input type="text" name="title" value={title} onChange={handleFieldChange} required />
                </label>

                <label>
                    Content
                    <textarea name="content" rows="8" value={content} onChange={handleFieldChange} required />
                </label>

                <label>
                    Author
                    <select name="author" value={author} onChange={handleFieldChange} required>
                        <option>Mario</option>
                        <option>Luigi</option>
                        <option>Yoshi</option>
                    </select>
                </label>

                {!isPending &&
                <button type="submit" >
                    Add <FontAwesomeIcon icon={faPlus} className="close-button icon"/>
                </button>}

                {isPending && <button>Loading...</button>}
            </form>
        </div>
    );
};

export default Create;