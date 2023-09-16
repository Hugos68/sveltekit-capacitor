import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'example.sveltekit.capacitor',
	appName: 'sveltekit-capacitor',
	webDir: 'build',
	server: {
		androidScheme: 'https'
	}
};

export default config;
