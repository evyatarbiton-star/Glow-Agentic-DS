/**
 * SVGR template for Glow DS icons.
 *
 * Each generated icon component:
 * - Accepts IconProps (size, color, className, ...rest)
 * - Uses resolveIconSize() for DS size tokens
 * - Defaults color to 'currentColor'
 * - Forwards all other SVG props
 */

const template = (variables, { tpl }) => {
  return tpl`
import type { IconProps } from '../../Icon.types'
import { resolveIconSize } from '../../Icon.types'

const ${variables.componentName} = ({ size = 'md', color = 'currentColor', ...props }: IconProps) => {
  const px = resolveIconSize(size)
  return ${variables.jsx}
}

export default ${variables.componentName}
`
}

module.exports = template
