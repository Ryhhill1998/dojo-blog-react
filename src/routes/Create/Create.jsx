import "./Create.css";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";

const defaultFormFields = {
    title: "",
    content: "",
    author: "Mario"
};

const Create = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);

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
        console.log(title, content, author);
    };

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

                <button>Add <FontAwesomeIcon icon={faPlus} className="close-button icon" /></button>
            </form>
        </div>
    );
};

export default Create;