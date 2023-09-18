import fs from 'fs';
import os from 'os';

const capacitorConfigRaw = fs.readFileSync('./capacitor.config.json');
fs.copyFileSync('./capacitor.config.json', `./capacitor.config.json.timestamp-${Date.now()}`);
const config = JSON.parse(capacitorConfigRaw);

if (!config.server) config.server = {};
config.server.url = `http://${getIp()}:${getPort()}/`;
config.server.cleartext = true;

fs.writeFile('./capacitor.config.json', JSON.stringify(config), (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('\x1b[32m√\x1b[0m Successfully configured capacitor.config.json');
});

function getIp() {
	const ifaces = os.networkInterfaces();
	let ip = 'localhost';
	Object.keys(ifaces).forEach((ifname) => {
		let alias = 0;
		ifaces[ifname].forEach((iface) => {
			if ('IPv4' !== iface.family || iface.internal !== false) return;
			if (alias >= 1) ip = iface.address;
			else ip = iface.address;
			++alias;
		});
	});
	return ip;
}

function getPort() {
	const file = fs.readFileSync('vite.config.ts');
	const match = String(file).match(/port:\s*(\d+)/);
	return match && match[1] ? match[1] : 5173;
}
