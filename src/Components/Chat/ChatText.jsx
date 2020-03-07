import React from "react";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SendRoundedIcon from "@material-ui/icons/SendRounded";

export default function ChatText() {
  return (
    <div className="bottom-bar">
      <TextField
        id="outlined-basic"
        className="text"
        fullWidth
        placeholder="Type a message..."
        variant="filled"
        InputProps={{
          endAdornment: (
            <IconButton aria-label="search" color="inherit">
              <SendRoundedIcon className="icon" />
            </IconButton>
          ),
          style: { fontSize: 20 }
        }}
      />
    </div>
  );
}
