import React, { useState, useInsertionEffect } from "react";

// Utility: Generate unique className based on props (like a hash)
const generateClassName = (props: { bg: string; color: string }) => {
  return `box-${btoa(props.bg + props.color).replace(/=/g, "")}`;
};

const useDynamicStyle = (props: { bg: string; color: string }) => {
  const className = generateClassName(props);

  useInsertionEffect(() => {
    const styleId = `style-${className}`;
    // Avoid adding style if it already exists
    if (document.getElementById(styleId)) return;

    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .${className} {
        background-color: ${props.bg};
        color: ${props.color};
        padding: 1rem;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease-in-out;
      }

      .${className}:hover {
        transform: scale(1.03);
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Cleanup not always necessary in this case, as we're deduplicating
      // But good for SSR or unmount scenarios
      const existing = document.getElementById(styleId);
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, [className, props.bg, props.color]);

  return className;
};

const StyledBox = ({ bg, color, children }: { bg: string; color: string; children: React.ReactNode }) => {
  const className = useDynamicStyle({ bg, color });

  return <div className={className}>{children}</div>;
};

const UseInsertionEffectLiveExample = () => {
  const [bg, setBg] = useState("#1e3a8a");
  const [textColor, setTextColor] = useState("#ffffff");

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Complex useInsertionEffect Example</h2>

      <div className="flex gap-4 items-center">
        <label>Background: <input type="color" value={bg} onChange={e => setBg(e.target.value)} /></label>
        <label>Text Color: <input type="color" value={textColor} onChange={e => setTextColor(e.target.value)} /></label>
      </div>

      <StyledBox bg={bg} color={textColor}>
        <p>This box is styled with dynamically injected CSS using <strong>useInsertionEffect</strong>.</p>
        <p>Try changing the background and text color!</p>
      </StyledBox>
    </div>
  );
};

export default UseInsertionEffectLiveExample;
