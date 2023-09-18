<img width="175px" src="https://github.com/Hugos68/sveltekit-capacitor/assets/63101006/3b8324ff-f27d-48a3-a74d-f7aabb2f530e" />
<img width="200px" src="https://github.com/Hugos68/sveltekit-capacitor/assets/63101006/e748ecc6-2a2d-4dd5-95c2-4ff4cf8a307b" />

# sveltekit-capacitor

Template for building a SvelteKit SPA with Capacitor.

Includes the following:

- Typescript
- Seemless integration with SvelteKit

## Getting Started

> Use your favorite package manager (npm, pnpm, yarn, bun, etc.)

### Installing Dependencies

```
npm install
```

## Building

```
npm run build
```

## Live/Hot Reload

In order to enable live/hot reload you need to follow these steps:

### 1. Getting your host URL

Run the following command to start and host the dev server:

```
npm run dev --host
```

Your dev server should now start and you should see a message like this:

```
  > - Local: http://localhost:<port>/
  > - Network: http://<ip>:<port>/
```

Copy the network url before moving on to the next step.

### 2. Configure the Capacitor configuration

Locate your `capacitor.config.ts` and set the `server.url` property to the network url from the previous step and set `server.cleartext` to `true`.

```ts
const config: CapacitorConfig = {
	// ...
	server: {
		url: /* dev server URL */,
		cleartext: true
	}
};
```

### 3. Syncing the Capacitor configuration

To ensure capacitor is using the latest config, run the following command:

```
npx cap sync
```

### 4. Run the app

Your live/hot reload is now ready, you can open your preferred platform IDE and run the app, any changes you make to the code will be reflected in the app without requiring you to restart it.

Keep in mind that the network url is dependant on your network so if you change networks you will need to repeat step 2. Because your IP is sensitive information, you should not commit the changed configuration to your version control system.

## Questions

For further questions about Capacitor you can refer to the [Capacitor Documentation](https://capacitorjs.com/docs).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
