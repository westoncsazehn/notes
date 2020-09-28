import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { Loader } from "./components";
import { LeftMenu } from "./components/left-menu";
import { Content } from "./components/content";
import { NoteProps } from "./components/types";
import { getNotes } from "./services/notes.service";

const StyledPage = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
`;

export const NotesListPage = () => {
  const defaultNote = {
    id: 0,
    content: "",
    date: "",
    title: "",
  };
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState<string>("");
  const [activeNoteID, setActiveNoteId] = useState<number>(0);
  const [notes, setNotes] = useState<NoteProps[]>();
  const [notesCopy, setNotesCopy] = useState<NoteProps[]>();
  const [editNote, setEditNote] = useState<NoteProps>(
    Object.assign({}, defaultNote)
  );

  const closeLoader = () => setTimeout(() => setIsLoading(false), 400);

  useEffect(() => {
    if (!notes) {
      getNotes().then((noteList: NoteProps[]) => {
        setNotes(noteList);
        setNotesCopy(noteList);
        closeLoader();
      });
    }
  }, [notes]);

  // add note
  const handleNewNoteEvent = (e: any) => {
    setActiveNoteId(0);
    setEditNote(defaultNote);
  };
  // search notes
  const handleSearchInput = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setQuery(value || "");
    const filteredNotes =
      notes && notes.slice().filter((note) => note?.title.includes(value));
    setNotesCopy(value === "" ? notes && notes.slice() : filteredNotes);
  };
  // set active note in view
  const handleActiveChange = (
    _: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id?: number
  ) => {
    setIsLoading(true);
    setActiveNoteId(id || 0);
    const newEditNote = Object.assign(
      {},
      notes?.slice().find((note) => note?.id === id) || defaultNote
    );
    setEditNote(newEditNote);
    closeLoader();
  };
  // delete note
  const handleDeleteNote = (_: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (activeNoteID) {
      setIsLoading(true);
      const newNotes = notesCopy
        ?.slice()
        .filter((note) => note?.id !== activeNoteID);
      setNotes(newNotes?.slice());
      setNotesCopy(newNotes?.slice());
      setActiveNoteId(0);
      setEditNote(defaultNote);
      closeLoader();
    }
  };
  // edit note > title change
  const handleTitleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { value = "" } = target;
    setEditNote(Object.assign({}, editNote, { title: value }));
  };
  // edit note > content change
  const handleContentChange = ({
    target,
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value = "" } = target;
    setEditNote(Object.assign({}, editNote, { content: value }));
  };
  const saveNote = () => {
    setIsLoading(true);
    let newNote;
    let newNotes;
    if (editNote && editNote.id && notes) {
      const editIndex: number = notes
        .slice()
        .findIndex((note: NoteProps) => note.id === editNote.id);
      newNote = Object.assign({}, editNote, {
        date: new Date().toString(),
      });
      newNotes = (notes && notes.slice()) || [];
      newNotes[editIndex] = newNote;
    } else {
      newNote = Object.assign({}, editNote, {
        id: new Date().getTime() * Math.floor(Math.random() * Math.floor(50)),
        date: new Date().toString(),
      });
      newNotes = (notes && notes.slice()) || [];
      newNotes.push(newNote);
    }
    setEditNote(newNote);
    setActiveNoteId((newNote && newNote.id) || 1);
    setNotes(newNotes);
    setNotesCopy(newNotes);
    closeLoader();
    return true;
  };
  // save by promise
  const handleSaveByPromise = (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    Promise.resolve(saveNote()).then(() => {
      console.log("success");
    });
  };
  // save by promise callback
  const handleSaveByCallback = async (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const response = await saveNote();
      if (response) {
        console.log("success");
      }
    } catch (error) {
      alert("error while saving");
    }
  };
  // save with error
  const handleSaveByError = async (
    _: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      const response = await Promise.reject(new Error("error"));
      console.log(response);
    } catch (error) {
      alert("error while saving");
    }
  };

  return (
    <StyledPage>
      <Loader {...{ isLoading }} />
      <LeftMenu
        {...{
          activeNoteID,
          handleActiveChange,
          handleSearchInput,
          handleNewNoteEvent,
          notes: notesCopy,
          query,
        }}
      />
      <Content
        {...{
          ...editNote,
          handleTitleChange,
          handleContentChange,
          handleSaveByPromise,
          handleSaveByCallback,
          handleSaveByError,
          handleDeleteNote,
        }}
      />
    </StyledPage>
  );
};
