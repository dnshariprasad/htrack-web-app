import styled from "styled-components";
import { format } from "date-fns";

export const CardDetail = styled.div`
  padding: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
  margin-left: 150px;
  margin-right: 150px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-height: 100%;
`;

export const Card = styled.div`
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column; /* Stack children vertically */
  justify-content: space-between; /* Push the button to the bottom */
  height: 100%; /* Ensure card takes consistent height */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  padding: 10px;
`;

export const NoteTitle = styled.h5`
  font-size: 1.5rem;
  line-height: 1.4;
  max-height: calc(1.4em * 1); /* Limit to 1 lines */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const LinkText = styled.a`
  font-size: 1rem; /* Adjust font size as needed */
  line-height: 1.5; /* Line height for proper spacing */
  max-height: calc(1.5em * 1); /* Limit to 1 line */
  overflow: hidden; /* Hide overflowing text */
  display: -webkit-box;
  -webkit-line-clamp: 1; /* Limit to 1 line */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; /* Add "..." at the end of truncated text */
  color: #007bff; /* Default link color */
  text-decoration: none; /* Remove underline */

  &:hover {
    text-decoration: underline; /* Add underline on hover for clarity */
  }
`;

export const ContentText = styled.p`
  font-size: 1rem; /* Adjust font size as needed */
  line-height: 1.5; /* Line height for proper spacing */
  max-height: calc(1.5em * 2); /* Limit to 3 lines */
  overflow: hidden; /* Hide overflowing text */
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 3 lines */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; /* Add "..." at the end of truncated text */
`;

export const ButtonContainer = styled.div`
  margin-top: auto; /* Push the button container to the bottom */
  display: flex;
  justify-content: flex-end; /* Align the button to the right */
  gap: 10px;
`;

export const TagList = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap; /* Wrap tags to the next line */
  overflow: hidden; /* Prevent overflow outside the card */
  max-height: 100px; /* Optional: Limit the height */
  padding-right: 5px; /* Space for scrollbar if needed */
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical; /* Define vertical orientation */
  max-height: calc(2.5rem * 2); /* Adjust based on line height and spacing */
`;

export const Tag = styled.span`
  background-color: #bbdefb;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.9rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between; /* Aligns content to the left and right */
  margin-bottom: 15px; /* Space between header and card content */
`;

export const DateTime = styled.span`
  font-size: 0.8rem;
  color: #90959a; /* Gray color */
`;

export const CategoryTag = styled.span`
  background-color: #64b5f6;
  color: white;
  padding: 3px 8px;
  border-radius: 15px;
  font-size: 0.9rem;
  text-align: center;
`;

export const StyledButton = styled.button<{ variant?: string }>`
  background-color: ${(props) =>
    props.variant === "primary" ? "#007bff" : "#6c757d"};
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#0056b3" : "#5a6268"};
  }

  &:disabled {
    background-color: #d6d6d6;
    cursor: not-allowed;
  }
`;
