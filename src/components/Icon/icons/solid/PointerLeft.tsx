import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgPointerLeft = ({
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
        d="M12.995 2a1 1 0 0 1 1 1v17h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V3a1 1 0 0 1 1-1"
      />
      <path
        fill={color}
        d="M7.943 5.05C8.167 5 8.395 5 8.575 5h8.852c.253 0 .498 0 .707.017.228.019.498.063.77.201a2 2 0 0 1 .873.874c.139.271.183.541.201.77.017.208.017.454.017.706v2.864c0 .252 0 .498-.017.706a2 2 0 0 1-.2.77 2 2 0 0 1-.875.874 2 2 0 0 1-.77.201c-.208.017-.453.017-.706.017H8.575c-.18 0-.408.001-.632-.05a2 2 0 0 1-.556-.218c-.2-.116-.365-.27-.497-.394l-.036-.033-2.156-2.003c-.094-.087-.204-.189-.293-.287a1.5 1.5 0 0 1-.325-.53 1.5 1.5 0 0 1 0-.97 1.5 1.5 0 0 1 .325-.53c.09-.098.2-.2.293-.287l2.156-2.003.036-.033c.132-.123.298-.278.497-.394a2 2 0 0 1 .556-.218"
      />
    </svg>
  );
};
export default SvgPointerLeft;
