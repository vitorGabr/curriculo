import { Flex, Stack } from "styled-system/jsx";
import { Heading } from "./ui/heading";
import { Text } from "./ui/text";

type Props = {
	school: string;
	degree: string;
	start: string;
	end: string;
};

export function EducationCard({ school, degree, start, end }: Props) {
	return (
		<Stack gap="1">
			<Flex w="full" alignItems="center" justifyContent="space-between">
				<Heading as="h2" fontSize="md" fontWeight="bold">
					{school}
				</Heading>
				<Text fontSize="sm" color="fg.muted">
					{start} - {end ?? "Atualmente"}
				</Text>
			</Flex>
			<Text fontSize="sm" color="fg.default">
				{degree}
			</Text>
		</Stack>
	);
}
