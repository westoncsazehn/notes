import moment from "moment";

import { NoteProps } from "../components";

export const getNotes = (): Promise<NoteProps[]> => {
  const notes: NoteProps[] = new Array(4).fill({}).map((_, index: number) => {
    const number: number = index + 1;
    return {
      date: moment().subtract(number, "days").toString(),
      id: number,
      title: `note title ${number}`,
      content: `note content ${number}`,
    };
  });
  return Promise.resolve(notes);
};
