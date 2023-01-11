export default function ChatWarpHead() {
  return (
    <>
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
    </>
  );
}
