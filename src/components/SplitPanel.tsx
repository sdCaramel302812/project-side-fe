interface SplitPanelProps {
  left: JSX.Element;
  right: JSX.Element;
}

function SplitPanel(props: SplitPanelProps) {
  return (
    <div style={{columns: 2}}>
      <div>
        {props.left}
      </div>
      <div>
        {props.right}
      </div>
    </div>
  );
}

export default SplitPanel;