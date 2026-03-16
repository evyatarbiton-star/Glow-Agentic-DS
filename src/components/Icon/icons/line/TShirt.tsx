import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgTShirt = ({
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
        fillRule="evenodd"
        d="M5 6a3 3 0 0 1 3-3h1.5a.5.5 0 0 1 .5.5V5a2 2 0 1 0 4 0V3.5a.5.5 0 0 1 .5-.5H16a3 3 0 0 1 3 3v1c0 .746.145 1.192.288 1.452.13.239.309.492.535.81l.017.024c.232.326.514.723.733 1.143.228.436.427.968.427 1.571v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6c0-.603.2-1.135.427-1.571.22-.42.501-.817.733-1.143l.017-.024c.226-.318.405-.571.536-.81C4.855 8.192 5 7.746 5 7zm3-1a1 1 0 0 0-1 1v1c0 1.003-.195 1.796-.534 2.414-.192.35-.436.693-.643.984l-.016.022c-.252.355-.457.647-.607.934-.147.281-.2.486-.2.646v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6c0-.16-.053-.365-.2-.646-.15-.287-.355-.58-.607-.934l-.016-.022c-.207-.291-.45-.633-.643-.984C17.195 8.796 17 8.004 17 7V6a1 1 0 0 0-1-1 4 4 0 0 1-8 0"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 11a1 1 0 0 1 1 1v3a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2v-2a1 1 0 1 1 0-2z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTShirt;
