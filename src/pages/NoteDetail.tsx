import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import { RootState } from "../redux/store";
import { deleteNote } from "../redux/notesSlice";
import {
  NoteTitle,
  LinkText,
  ContentText,
  ButtonContainer,
  TagList,
  Tag,
  Header,
  DateTime,
  CategoryTag,
  StyledButton,
  CardDetail,
} from "../styles/NoteStyles"; // Import styled components

const NoteDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = useSelector((state: RootState) =>
    state.notes.notes.find((note) => note.id === id)
  );
  const dispatch = useDispatch();
  if (!note) {
    return <div>Note not found!</div>;
  }
  if (!note) {
    return <div>Note not found!</div>;
  }

  const handleDelete = () => {
    dispatch(deleteNote(note.id)); // Dispatch delete action
    navigate("/"); // Redirect to the note list after deletion
  };

  const handleEdit = () => {
    navigate(`/edit/${note.id}`); // Navigate to the edit screen for the note
  };
  return (
    <CardDetail>
      <Header>
        <DateTime>{format(note.createdAt, "MMM dd, yyyy hh:mm a")}</DateTime>
        <CategoryTag>{note.category}</CategoryTag>
      </Header>
      <NoteTitle>{note.title}</NoteTitle>
      {note.content && <ContentText>{note.content}</ContentText>}
      {note.link && (
        <LinkText href={note.link} target="_blank" rel="noopener noreferrer">
          {note.link}
        </LinkText>
      )}
      {note.tags.length > 0 && (
        <TagList>
          {note.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagList>
      )}
      <ButtonContainer>
        <StyledButton variant="primary" disabled={false} onClick={handleEdit}>
          Edit
        </StyledButton>
        <StyledButton variant="primary" disabled={false} onClick={handleDelete}>
          Delete
        </StyledButton>
      </ButtonContainer>
    </CardDetail>
  );
};

export default NoteDetail;
