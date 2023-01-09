import { FC, ReactNode } from 'react'
import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export type PageCardProps = { children: ReactNode; title: string }

export const PageCard: FC<PageCardProps> = ({ children, title }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}
      >
        <Card backgroundColor="gray.50" mt={10} mr={5} mb={10} ml={200}>
          <CardHeader>
            <Heading size="md">{title}</Heading>
          </CardHeader>

          <CardBody>{children}</CardBody>
        </Card>
      </motion.div>
    </>
  )
}
