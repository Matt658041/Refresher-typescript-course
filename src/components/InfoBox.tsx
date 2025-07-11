import type { ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props as HintBoxProps;
  if (mode === "hint") {
    return (
      <aside className="info-box infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }
    const { severity } = props as WarningBoxProps;
    
  return (
    <aside className={`info-box infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}

export default InfoBox;
