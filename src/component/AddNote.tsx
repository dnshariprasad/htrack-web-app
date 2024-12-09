import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "../redux/notesSlice";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { RootState } from "../redux/store";

const FormWrapper = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
`;

const AddNote: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Move useParams to the top level
  const noteToEdit = useSelector((state: RootState) =>
    id ? state.notes.notes.find((note) => note.id === id) : null
  );

  const [title, setTitle] = useState(noteToEdit?.title || "");
  const [content, setContent] = useState(noteToEdit?.content || "");
  const [link, setLink] = useState(noteToEdit?.link || "");
  const [category, setCategory] = useState(noteToEdit?.category || "");
  const [tags, setTags] = useState(noteToEdit?.tags.join(", ") || "");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      const tagList = tags.split(",").map((tag) => tag.trim());
      if (id) {
        dispatch(
          updateNote({
            id,
            title,
            content,
            link,
            category,
            tags: tagList,
            createdAt: noteToEdit?.createdAt || Date.now(),
          })
        );
      } else {
        dispatch(
          addNote({
            id: uuidv4(),
            title: title,
            link: link,
            content: content,
            category: category,
            tags: tagList,
            createdAt: Date.now(),
          })
        );
      }
      navigate("/");
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Type
          </label>
          <select
            id="category"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="Link">Link</option>
            <option value="Date">Date</option>
            <option value="Location">Location</option>
            <option value="Text">Text</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            className="form-control"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>

        {category === "Link" && (
          <div className="mb-3">
            <label htmlFor="link" className="form-label">
              Link
            </label>
            <input
              type="text"
              id="link"
              className="form-control"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            id="content"
            className="form-control"
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update Note" : "Add Note"}
        </button>
      </form>
    </FormWrapper>
  );
};

export default AddNote;
