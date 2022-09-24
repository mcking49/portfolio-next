import { HTMLMotionProps, motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'
interface Props {
  imageProps: ImageProps
  motionProps?: HTMLMotionProps<'div'>
}

const MotionImage = ({
  imageProps: { alt, ...restImageProps },
  motionProps,
}: Props) => {
  return (
    <motion.div {...motionProps}>
      <Image alt={alt} {...restImageProps} />
    </motion.div>
  )
}

export default MotionImage
