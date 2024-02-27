import { RESUME_DATA } from "@/assets/data/resume-data";
import { Icon } from "./ui/icon";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Stack } from "styled-system/jsx";
import { flex } from "styled-system/patterns";
import React, { JSXElementConstructor, ReactElement, ReactNode } from "react";

type Props = {
	contact: (typeof RESUME_DATA)["contact"];
};

export function SocialContacts({ contact }: Props) {
	return (
		<Stack gap="2">
            <Contact 
                label={contact.email}
                url={`mailto:${contact.email}`}
                icon={<MailIcon />}
            />
            <Contact
                label={contact.tel}
                url={`tel:${contact.tel}`}
                icon={<PhoneIcon />}
            />
			{contact.social.map((item) => (
                <Contact 
                    icon={<item.icon />}
                    label={item.url}
                    url={item.url}
                    key={item.name}
                />
				
			))}
		</Stack>
	);
}

const Contact = ({
	label,
	url,
	icon,
}: {
	url: string;
	icon: ReactElement<any, string | JSXElementConstructor<any>>
	label: string;
}) => {
	return (
		<a
			href={url}
			key={url}
			className={flex({
				alignItems: "center",
				gap: "2",
				fontSize: "sm",
				color: "fg.muted",
			})}
		>
			<Icon color="fg.muted" size="sm">
				{icon}
			</Icon>
			{label}
		</a>
	);
};
