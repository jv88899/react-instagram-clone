import React from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { makeStyles } from "@material-ui/core";
import { useAddPostDialogStyles } from "../../styles";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

function AddPostDialog({ media, handleClose }) {
  const classes = useAddPostDialogStyles();
  const editor = React.useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = React.useState(initialValue);

  //   <Slate editor={editor} value={value} onChange={(value) => setValue(value)}>
  //     <Editable />
  //   </Slate>;

  return <span>addpostdialog</span>;
}

export default AddPostDialog;
