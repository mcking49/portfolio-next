import { SocialIcon as Icon, type SocialIconProps } from 'react-social-icons'

const SocialIcon = (props: SocialIconProps) => {
  return (
    <Icon {...props} fgColor="gray" bgColor="transparent" target="_blank" />
  )
}

export default SocialIcon
