import React, { useEffect, useState } from "react";
import "./chat.css";

function Chat({ socket, username, room }) {
  const [message, setMessage] = useState("");
  const [messageContent, setMessageContent] = useState([]);

  useEffect(() => {
    socket.on("get_message", (data) => {
      console.log(data);
      setMessageContent((content) => [...content, data]);
      data.stopPropagation();
    });
  }, [socket]);

  const sendMessage = async (e) => {
    if (message !== "") {
      const messageData = {
        room,
        username,
        message,
      };
      await socket.emit("set_message", messageData);
      setMessageContent((content) => [...content, messageData]);
      e.stopPropagation();
    }
  };
  const inputOnChange = (e) => {
    setMessage(e.target.value);
  };
  const resetInput = () => {
    setMessage("");
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
      resetInput();
    }
  };

  return (
    <>
      <body>
        <div className="container">
          <div className="side-bar2">
            <div className="side-bar2-icons">
              <div className="side-border">
                <img src="/images/copy-two-paper-sheets-interface-symbol_icon-icons.com_73283.png" />
              </div>
              <img src="/images/magnifier_105027.png" />
              <img src="/images/source_branch_icon_135166.png" />
              <img src="/images/debug_icon_215819.png" />
              <img src="/images/mbriextension_99593.png" />

              <div className="side-bar-2-icons-end">
                <img src="/images/account_avatar_face_man_people_profile_user_icon_123197.png" />
                <img src="/images/1904675-configuration-edit-gear-options-preferences-setting-settings_122525.png " />
              </div>
            </div>
          </div>
          <div className="side-bar">
            <div className="side-header-box">
              <span id="explorer">EXPLORER</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                className="dot"
                src="/images/3844444-dot-menu-more-option_110318.png"
              />
            </div>
            <div className="down-arrow-box">
              <img
                className="down-arrow"
                src="/images/angle_down-48_46776.png"
              />
              <span id="open-editors">OPEN EDITORS</span>
            </div>
            <div className="css">
              <div className="side-css-box">
                <div className="css-box">
                  <img src="/images/vscode+icons+type+css-1324451270074695333.png" />
                  <span id="side-index_css">index.css </span>
                </div>
              </div>
              <div className="html-box-side">
                <span>X</span> &nbsp; &nbsp;
                <img src="/images/vscode+icons+type+html-1324451320119191066.png" />
                <span>index.html </span>
              </div>
            </div>
            <div className="open-folder-box">
              <img
                className="down-arrow"
                src="/images/angle_down-48_46776.png"
              />
              <span id="my_project">myProject</span>
              <div className="css">
                <div className="side-css-box">
                  <div className="css-box">
                    <img src="/images/vscode+icons+type+css-1324451270074695333.png" />
                    <span id="side-index_css">index.css </span>
                  </div>
                </div>
                <div className="html-box-side">
                  <span>X</span> &nbsp; &nbsp;
                  <img src="/images/vscode+icons+type+html-1324451320119191066.png" />
                  <span>index.html </span>
                </div>
                <div className="js">
                  <div className="js-box">
                    <img src="/images/javascript_original_logo_icon_146455.png" />
                    <span id="js-side-span">index.js </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-warp">
            <div className="head-container">
              <div className="html-box">
                <img src="/images/vscode+icons+type+html-1324451320119191066.png" />
                <span>index.html &nbsp;&nbsp;&nbsp;X </span>
              </div>
              <div className="css">
                <div className="css-box">
                  <img src="/images/vscode+icons+type+css-1324451270074695333.png" />
                  <span>index.css </span>
                </div>
              </div>
              <div className="js">
                <div className="js-box">
                  <img src="/images/javascript_original_logo_icon_146455.png" />
                  <span>index.js </span>
                </div>
              </div>
            </div>
            <div className="breadcrumbs">
              <div className="breadcrumbs-html-box">
                <img src="/images/vscode+icons+type+html-1324451320119191066.png" />
                <span id="breadcrumbs-html-span">index.html&nbsp;> </span>
              </div>
              <div className="box-box">
                <img src="/images/box-1329858287838217104.png" />
                <span>&nbsp;html ></span>&nbsp;&nbsp;
                <img src="/images/box-1329858287838217104.png" />
                <span>&nbsp;body ></span>&nbsp;&nbsp;
                <img src="/images/box-1329858287838217104.png" />
                <span>&nbsp;div.container</span>
              </div>
            </div>
            <div className="chating-wrap">
              <div className="chat-list">
                {/* <div>
                  <span id="chat-list-lt">&lt;</span>
                  <span id="chat-list-div">div</span>{" "}
                  <span id="chat-list-class">class</span>
                  <span id="chat-list-equal">=</span>
                  <span id="chat-list-quot"> &quot;</span>
                  <span id="chat-list-username">username</span>
                  <span id="chat-list-quot"> &quot;</span>
                  <span id="chat-list-gt">&gt;</span>
                </div>
                <div>
                  <span id="chat-list-lt">&lt;</span>
                  <span id="chat-list-div">span</span>
                  <span id="chat-list-gt">&gt;</span>
                  <span id="chat-list-content">내용</span>
                  <span id="chat-list-lt">&lt;/</span>
                  <span id="chat-list-div">span</span>
                  <span id="chat-list-gt">&gt;</span>
                </div> */}
                <div className="chat-body">
                  {messageContent.map((result) => {
                    return (
                      <>
                        <div>
                          <span id="chat-list-lt">&lt;</span>
                          <span id="chat-list-div">div</span>{" "}
                          <span id="chat-list-class">class</span>
                          <span id="chat-list-equal">=</span>
                          <span id="chat-list-quot"> &quot;</span>
                          <span id="chat-list-username">{result.username}</span>
                          <span id="chat-list-quot">&quot;</span>
                          <span id="chat-list-gt">&gt;</span>
                        </div>
                        <div>
                          <span id="chat-list-lt">&lt;</span>
                          <span id="chat-list-div">span</span>
                          <span id="chat-list-gt">&gt;</span>
                          <span id="chat-list-content">{result.message}</span>
                          <span id="chat-list-lt">&lt;/</span>
                          <span id="chat-list-div">span</span>
                          <span id="chat-list-gt">&gt;</span>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="terminal">
            <div className="terminal-head">
              <span>PROBLEMS</span>
              <span>OUTPUT</span>
              <span>DEBUG CONSOLE</span>
              <span id="terminal-span">TERMINAL</span>
              <div className="terminal-head-options">
                <img
                  src="/images/arrows-square-right_98018.png"
                  className="arrow-right"
                />
                <span id="bash">bash</span>
                <img
                  src="/images/add-plus-button_icon-icons.com_72878.png"
                  className="plus-button"
                />
                <img
                  src="/images/angle_down-48_46776.png"
                  className="angle_down"
                />
                <img
                  className="leyout"
                  src="/images/layout_columns_icon_151270.png"
                />
                <img
                  className="biggarbagebin"
                  src="/images/biggarbagebin_121980.png"
                />
                <img className="angle_up" src="/images/angle_up-48_45774.png" />
                <span id="terminal-x">X</span>
              </div>
            </div>

            <div className="chat-input">
              <div className="defalut-text">
                <span>The default interactive shell is now zsh.</span>
                <span>
                  To update your account to use zsh, please run `chsh -s
                  /bin/zsh`.
                </span>
                <span>
                  For more details, please visit
                  https://support.apple.com/kb/HT208050.
                </span>
                <span>
                  macui-MacBook-Air:myProject mac${" "}
                  <input
                    className="input"
                    type="text"
                    value={message}
                    onChange={inputOnChange}
                    onKeyPress={handleOnKeyPress}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Chat;
