import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgMegaphone = ({
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
      <path fill={color} d="M19 11.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0" />
      <path
        fill={color}
        fillRule="evenodd"
        d="m5.98 13.804.736 3.675A.649.649 0 0 0 8 17.35V14h2v3.351a2.649 2.649 0 0 1-5.246.52l-.734-3.675z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M21 7.509c0-2.704-2.934-4.386-5.267-3.021l-3.899 2.28A9 9 0 0 1 7.29 8H5.5a3.5 3.5 0 0 0 0 7h1.786a9 9 0 0 1 4.55 1.235l3.894 2.282c2.334 1.368 5.27-.315 5.27-3.02zm-4.257-1.295A1.5 1.5 0 0 1 19 7.509v7.989a1.5 1.5 0 0 1-2.258 1.294l-3.895-2.282A11 11 0 0 0 11 13.646v-4.29a11 11 0 0 0 1.844-.861zM9 9.866A11 11 0 0 1 7.29 10H5.5a1.5 1.5 0 1 0 0 3h1.786q.865 0 1.714.134z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMegaphone;
