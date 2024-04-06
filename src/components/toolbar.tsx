"use client";

import { Flex } from "styled-system/jsx";
import { PrinterIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Toolbar() {
	const onPrint = () => {
		const bodyHeight = document.body.clientHeight;
		const printStyle = document.createElement("style");
		printStyle.innerHTML = `@media print { @page { size: 210mm ${bodyHeight}px; margin:8mm } }`;
		document.head.appendChild(printStyle);
		window.print();
	};

	return (
		<Flex
			id="toolbar"
			position="fixed"
			bottom="2"
			gap="8"
			left="50%"
			transform="translateX(-50%)"
			justifyContent="space-between"
			rounded={"full"}
			backdropFilter={"auto"}
			backdropBlur={"md"}
			bg={"bg.surface/80"}
			border={"1px solid"}
			borderColor={"border.subtle"}
			p={"1"}
			hideBelow={'md'}
		>
			<Button
				size="sm"
				type="button"
				variant="ghost"
				rounded={"full"}
				onClick={onPrint}
				className="print-button"
			>
				<PrinterIcon />
				Imprimir
			</Button>
		</Flex>
	);
}
