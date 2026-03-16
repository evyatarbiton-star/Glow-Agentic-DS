import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgQuestionMarkCrFr = ({
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
        d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
        clipRule="evenodd"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M11.133 9.5a1 1 0 1 1-1.73-1A3 3 0 0 1 15 10c0 1.098-.673 1.994-1.5 2.5-.664.406-.25 1.5-1.502 1.5a1 1 0 0 1-.995-1.104c.028-.529.264-.96.52-1.272.271-.33.628-.6.9-.762 1.517-.902-.333-2.747-1.29-1.361m.865 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgQuestionMarkCrFr;
