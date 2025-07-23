import * as React from "react"

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return (
    <span
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        margin: '-1px',
        border: '0',
        padding: '0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
      }}
    >
      {children}
    </span>
  );
};

export { VisuallyHidden };
