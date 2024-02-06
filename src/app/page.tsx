import { RESUME_DATA } from "@/assets/data/resume-data";
import { JobCard } from "@/components/job-card";
import { ProjectCard } from "@/components/project-card";
import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { Icon } from "@/components/ui/icon";
import { IconButton } from "@/components/ui/icon-button";
import { Text } from "@/components/ui/text";
import { MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";
import { css } from "styled-system/css";
import { Container, Stack, Flex, Grid } from "styled-system/jsx";

export default function Home() {
	const {
		name,
		about,
		avatarUrl,
		location,
		skills,
		summary,
		projects,
		work,
		contact,
	} = RESUME_DATA;

	return (
		<main
			className={css({
				background: "bg.surface",
				display: "flex",
				flexDirection: "column",
			})}
		>
			<Container p={["4", "10", "16"]} maxW="3xl">
				<Stack gap="8">
					<Flex gap="8" justifyContent="space-between" alignItems="flex-start">
						<Stack gap="2" maxW="60%">
							<Heading fontSize={"2xl"} fontWeight={"900"}>
								{name}
							</Heading>
							<Stack gap="1">
								<Text fontSize={"sm"} color="fg.muted">
									{about}
								</Text>
								<Text fontSize={"xs"} color="fg.muted">
									{location}
								</Text>
							</Stack>
							<Flex gap="2">
								<IconButton size="xs" variant="outline" asChild>
									<a href={`mailto:${contact.email}`}>
										<Icon color="fg.muted">
											<MailIcon size={24} />
										</Icon>
									</a>
								</IconButton>
								<IconButton size="xs" variant="outline" asChild>
									<a href={`tel:${contact.tel}`}>
										<Icon color="fg.muted">
											<PhoneIcon />
										</Icon>
									</a>
								</IconButton>
								{contact.social.map((item) => (
									<IconButton
										size="xs"
										variant="outline"
										asChild
										key={item.name}
									>
										<a href={item.url}>
											<Icon color="fg.muted" size="lg">
												<item.icon />
											</Icon>
										</a>
									</IconButton>
								))}
							</Flex>
						</Stack>
						<Image
							src={avatarUrl}
							alt={name}
							width={110}
							height={110}
							className={css({
								rounded: "l2",
							})}
						/>
					</Flex>
					<Stack>
						<Heading as="h1" fontSize="2xl" fontWeight="bold">
							Sobre
						</Heading>
						<Text as="p" fontSize="sm" color="fg.muted">
							{summary}
						</Text>
					</Stack>
					<Stack>
						<Heading as="h1" fontSize="2xl" fontWeight="bold">
							Experiências Profissionais
						</Heading>
						<Stack gap="4">
							{work.map((job) => {
								return <JobCard key={job.title} {...job} />;
							})}
						</Stack>
					</Stack>
					<Stack>
						<Heading as="h1" fontSize="2xl" fontWeight="bold">
							Habilidades
						</Heading>
						<Flex flexWrap="wrap" gap="2">
							{skills.map((skill) => (
								<Badge key={skill} variant="solid" size="sm">
									{skill}
								</Badge>
							))}
						</Flex>
					</Stack>
					<Stack>
						<Heading as="h1" fontSize="2xl" fontWeight="bold">
							Projetos
						</Heading>
						<Grid columns={[1, 2, 3]} gap={"3"}>
							{projects.map((project) => {
								return (
									<ProjectCard
										key={project.title}
										title={project.title}
										description={project.description}
										tags={project.techStack}
										link={"link" in project ? project.link.href : undefined}
									/>
								);
							})}
						</Grid>
					</Stack>
				</Stack>
			</Container>
			{/* <Toolbar /> */}
		</main>
	);
}
