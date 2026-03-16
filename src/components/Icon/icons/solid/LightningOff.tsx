import type { IconProps } from "../../Icon.types";
import { resolveIconSize } from "../../Icon.types";
const SvgLightningOff = ({
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
        d="m8.25 8.25-4.03 5.133A1 1 0 0 0 5.007 15H10l-.63 5.897c-.106.999 1.161 1.514 1.781.724l4.605-5.865zM16.427 13.049a1 1 0 0 0 1.511-.073l1.852-2.359A1 1 0 0 0 19.003 9H14l.63-5.886c.106-.998-1.161-1.514-1.781-.724l-2.435 3.102a1 1 0 0 0 1.573 1.235l.283-.36-.173 1.622a1 1 0 0 0 .27.796l1.814 1.905a1 1 0 0 0 .724.31h2.042l-.582.741a1 1 0 0 0 .062 1.308"
      />
      <path
        fill={color}
        fillRule="evenodd"
        d="M2.293 2.293a1 1 0 0 1 1.414 0l18 18a1 1 0 0 1-1.414 1.414l-18-18a1 1 0 0 1 0-1.414"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgLightningOff;
