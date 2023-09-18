import fs from 'fs';

const capacitorConfigRaw = fs.readFileSync('./capacitor.config.json');
const config = JSON.parse(capacitorConfigRaw);

delete config.server.url;
delete config.server.cleartext;
if (Object.getOwnPropertyNames(config.server).length === 0) delete config.server;

fs.writeFile('./capacitor.config.json', JSON.stringify(config, null, '\t'), (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log('\x1b[32m√\x1b[0m Successfully cleaned up!');
});
