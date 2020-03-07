import React from "react";

export default function ChatMessages() {
  return (
    <div>
      <div class="bubbleWrapper">
        <div class="inlineContainer own">
          <div class="ownBubble own">Hi Doc!</div>
        </div>
        <span class="own">08:55</span>
      </div>
      <div class="bubbleWrapper">
        <div class="inlineContainer">
          <div class="otherBubble other">What's wrong?</div>
        </div>
      </div>
      <span class="other">10:13</span>
      <div class="bubbleWrapper">
        <div class="inlineContainer own">
          <div class="ownBubble own">I have a pain in my lower back.</div>
        </div>
        <span class="own">11:07</span>
      </div>
      <div class="bubbleWrapper">
        <div class="inlineContainer">
          <div class="otherBubble other">Is it a perpetual pain?</div>
        </div>
        <span class="other">11:11</span>
      </div>
    </div>
  );
}
