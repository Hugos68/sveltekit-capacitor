import fs from 'fs';
const files = fs.readdirSync('./');
files.forEach((file) => {
    if (file.match(/capacitor\.config\.json\.timestamp-\d+/g)) {
        const cache = fs.readFileSync(`./${file}`);
        fs.writeFileSync('./capacitor.config.json', cache);
        fs.unlinkSync(file);
    }
});