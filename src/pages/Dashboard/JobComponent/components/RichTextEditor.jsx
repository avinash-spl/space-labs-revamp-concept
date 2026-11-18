import React, { useRef, useEffect, useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatListBulleted,
  MdFormatUnderlined,
} from "react-icons/md";
import styles from "./RichTextEditor.module.css";

const RichTextEditor = ({ value, onChange, name, label, disabled = false }) => {
  const editorRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  // Set initial content on mount
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value || "";
    }
  }, []);

  // Update content when value prop changes
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== (value || "")) {
      editorRef.current.innerHTML = value || "";
    }
  }, [value]);

  const handleInput = () => {
    if (editorRef.current && onChange) {
      onChange({
        target: {
          name: name || label?.toLowerCase().replace(/\s+/g, ""),
          value: editorRef.current.innerHTML,
        },
      });
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
    handleInput();
  };

  return (
    <Box className={styles.richTextEditor}>
      <Box className={styles.toolbar}>
        <Tooltip title="Bold">
          <IconButton
            size="small"
            onClick={() => execCommand("bold")}
            className={styles.toolbarButton}
            disabled={disabled}
          >
            <MdFormatBold />
          </IconButton>
        </Tooltip>
        <Tooltip title="Italic">
          <IconButton
            size="small"
            onClick={() => execCommand("italic")}
            className={styles.toolbarButton}
            disabled={disabled}
          >
            <MdFormatItalic />
          </IconButton>
        </Tooltip>
        <Tooltip title="Underline">
          <IconButton
            size="small"
            onClick={() => execCommand("underline")}
            className={styles.toolbarButton}
            disabled={disabled}
          >
            <MdFormatUnderlined />
          </IconButton>
        </Tooltip>
        <Tooltip title="Bulleted list">
          <IconButton
            size="small"
            onClick={() => execCommand("insertUnorderedList")}
            className={styles.toolbarButton}
            disabled={disabled}
          >
            <MdFormatListBulleted />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        ref={editorRef}
        contentEditable={!disabled}
        onInput={handleInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`${styles.editor} ${isFocused ? styles.focused : ""} ${
          disabled ? styles.disabled : ""
        }`}
        suppressContentEditableWarning={true}
      />
    </Box>
  );
};

export default RichTextEditor;

