import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";

export default defineConfig({
	preflight: true,
	presets: [
		"@pandacss/preset-base",
		createPreset({
			accentColor: "neutral",
			grayColor: "slate",
			borderRadius: "lg",
		}),
	],
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],
	theme: {
		extend: {
			semanticTokens: {
				colors: {
					bg: {
						surface: {
							value: { base: "white", _dark: "{colors.gray.1}" },
						},
					},
				},
			},
		},
	},
	exclude: [],
	outdir: "styled-system",
	jsxFramework: "react",
	outExtension: "js",
	lightningcss: true,
});
