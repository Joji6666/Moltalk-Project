export default function Terminal() {
  return (
    <>
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
          <img src="/images/angle_down-48_46776.png" className="angle_down" />
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
    </>
  );
}
