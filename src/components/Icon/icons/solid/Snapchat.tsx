import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgSnapchat = ({
  size = "md",
  color = "currentColor",
  ...props
}: IconProps) => {
  const px = resolveIconSize(size);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={px}
      height={px}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        d="M12 2C6.5 2 6.5 8 6.5 8v1l-.81-.203a1.654 1.654 0 0 0-1.223 3.041l1.53.874c.31.178.503.514.396.857-.118.38-.367.905-.893 1.431C4 16.5 2 16 2 17c0 .67 1.12 1.34 1.861 1.709.415.207.808.46 1.136.788l.12.12a3.02 3.02 0 0 0 2.133.883c.8 0 1.562.337 2.248.749.625.375 1.5.751 2.502.751s1.877-.376 2.502-.751c.686-.412 1.448-.749 2.248-.749s1.568-.318 2.134-.884l.119-.119c.328-.328.72-.581 1.136-.788.74-.37 1.861-1.04 1.861-1.709 0-1-2-.5-3.5-2-.526-.526-.775-1.051-.893-1.431-.107-.343.085-.679.397-.857l1.529-.874a1.654 1.654 0 0 0-1.222-3.04L17.5 9V8s0-6-5.5-6"
      />
    </svg>
  );
};
export default SvgSnapchat;
