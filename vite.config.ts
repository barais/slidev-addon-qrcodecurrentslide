import { defineConfig } from "vite";

export default defineConfig({
	optimizeDeps: {
		include: ["slidev-addon-qrcodecurrentslide > qr-code-styling"],
	},
});
