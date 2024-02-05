import { Flex, Stack } from "styled-system/jsx";
import { Heading } from "./ui/heading";
import { Badge } from "./ui/badge";
import { Text } from "./ui/text";
import { Link } from "./ui/link";

type Props = {
	company: string;
	link: string;
	badges: readonly string[];
	title: string;
	start: string;
	end?: string;
	description: string;
};

export function JobCard({
	company,
	link,
	badges,
	title,
	start,
	end,
	description,
}: Props) {
	return (
		<Stack gap="1">
			<Stack gap="0">
				<Flex w="full" alignItems="center" justifyContent="space-between">
					<Flex alignItems="center" gap="2">
						<Link href={link ?? "#"} target="_blank" rel="noopener noreferrer">
							<Heading as="h2" fontSize="md" fontWeight="bold">
								{company}
							</Heading>
						</Link>
						{badges.map((badge) => (
							<Badge size="sm" key={badge}>
								{badge}
							</Badge>
						))}
					</Flex>
					<Text fontSize="sm" color="fg.muted">
						{start} - {end ?? "Atualmente"}
					</Text>
				</Flex>
				<Text fontSize="sm" color="fg.default">
					{title}
				</Text>
			</Stack>
			<Text fontSize="xs" color="fg.muted">
				{description}
			</Text>
		</Stack>
	);
}
