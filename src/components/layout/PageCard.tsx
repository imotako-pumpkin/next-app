import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

export type PageCardProps = { title: string; children: ReactNode };

export const PageCard: FC<PageCardProps> = ({ title, children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 1000 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Card backgroundColor="whiteAlpha.500" mt={10} mr={5} mb={10} ml={200}>
          <CardHeader>
            <Heading size="md">{title}</Heading>
          </CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </motion.div>
    </>
  );
};
