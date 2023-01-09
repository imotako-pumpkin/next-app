import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { PageCard } from "../components/layout/PageCard";

export default function About() {
  return (
    <>
      <PageCard title="about">
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              システム開発支援、アプリ作成、Webサイト作成
            </Heading>
            <Flex align="center" justify="center" gap={2}>
              <Text fontSize="sm">
                フロントからバックエンドまでのシステムの開発も得意としております。
                自社アプリやWebサイト作成も実施。
              </Text>
              <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
            </Flex>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              健康サポート事業
            </Heading>
            <Flex align="center" justify="center" gap={2}>
              <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
              <Text fontSize="sm">
                みなさまの健康を、弊社のITテクノロジーを使ってサポートを実施していきます。
                万歩計アプリ【あるいて】
                パーソナルトレーナーマッチングアプリ【イマトレ】※開発中
                ※新規サービス開発中
              </Text>
            </Flex>
          </Box>
        </Stack>
      </PageCard>
    </>
  );
}
