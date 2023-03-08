import "./Create.css";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Create = () => {
    return (
        <div className="create-post-container container">
            <h2>Create New Post</h2>

            <form className="create-post-form">
                <label>
                    Title
                    <input />
                </label>

                <label>
                    Content
                    <textarea />
                </label>

                <label>
                    Author
                    <select>
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