import React from "react";
import { useSelector } from "react-redux";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { calculateTimeDifferenceFormat } from "../TimeUtil";
import {
  Card,
  GridContainer,
  NoteTitle,
  LinkText,
  ContentText,
  TagList,
  Tag,
  Header,
  DateTime,
  CategoryTag,
  DateContainer,
} from "../styles/NoteStyles"; // Import styled components

const NoteList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);

  return (
    <div>
      <GridContainer>
        {notes.map((note) => (
          <Link
            to={`/note/${note.id}`}
            key={note.id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Card key={note.id}>
              <Header>
                <DateTime>
                  {format(note.createdAt, "MMM dd, yyyy hh:mm a")}
                </DateTime>
                <CategoryTag>{note.category}</CategoryTag>
              </Header>
              <NoteTitle>{note.title}</NoteTitle>
              {note.content && <ContentText>{note.content}</ContentText>}
              {note.link && (
                <LinkText
                  href={note.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {note.link}
                </LinkText>
              )}
              {note.startDate && note.endDate && (
                <DateContainer>
                  <label>
                    {note.startDate} - {note.endDate}
                  </label>
                  <label>
                    {calculateTimeDifferenceFormat(
                      note.startDate,
                      note.endDate
                    )}
                  </label>
                </DateContainer>
              )}
              {note.tags.length > 0 && (
                <TagList>
                  {note.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagList>
              )}
            </Card>
          </Link>
        ))}
      </GridContainer>
    </div>
  );
};

export default NoteList;
