export default function Sidebar() {
  return (
    <>
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
          <img className="down-arrow" src="/images/angle_down-48_46776.png" />
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
          <img className="down-arrow" src="/images/angle_down-48_46776.png" />
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
    </>
  );
}
