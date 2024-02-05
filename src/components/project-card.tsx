import { Box, Flex, Stack } from "styled-system/jsx";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";
import { Badge } from "./ui/badge";
import { Link } from "./ui/link";

type Props = {
	title: string;
	description: string;
	tags: readonly string[];
	link?: string;
};

export function ProjectCard({ title, description, tags, link }: Props) {
	return (
		<Stack
			gap="4"
			key={title}
			borderWidth="1"
			borderColor="border.subtle"
			rounded="l2"
			p="3"
			h="full"
			justifyContent="space-between"
			alignItems="flex-start"
		>
			<Stack gap="1">
				<Link href={link} target="_blank" rel="noopener noreferrer">
					<Flex alignItems={"center"} gap="2">
						<Heading as="h2" fontSize="md" fontWeight="bold">
							{title}
						</Heading>
						<Box w="1" h="1" rounded="full" bg="cyan.8" />
					</Flex>
				</Link>
				<Text fontSize="xs" color="fg.muted">
					{description}
				</Text>
			</Stack>
			<Flex flexWrap="wrap" gap="1">
				{tags.map((stack) => (
					<Badge key={stack} size="sm" variant="subtle" fontSize="x-small">
						{stack}
					</Badge>
				))}
			</Flex>
		</Stack>
	);
}
