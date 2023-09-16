# sveltekit-capacitor

Template for building a SvelteKit SPA with Capacitor.

Includes the following:

- Typescript
- Barebone SvelteKit project using [`adapter-static`](https://kit.svelte.dev/docs/adapter-static)
- Custom scripts for ease of use

## Getting Started

> Use your favorite package manager (npm, pnpm, yarn, bun, etc.)

### Installing Dependencies

```
npm i
```

### Adding platforms

```
npm run add:android
```

```
npm run add:ios
```

### Removing platforms

```
npm run remove:android
```

```
npm run remove:ios
```

## Building

### Building for Android

```
npm run build:android
```

####  Building for IOS

```
npm run build:ios
```

## Platform IDE's

### Open in [Android Studio](https://developer.android.com/studio):

```
npm run open:android
```

### Open in [Xcode](https://developer.apple.com/xcode/):

```
npm run open:ios
```

## Live/Hot Reload

In order to enable live/hot reload you need to follow these steps:

### 1. Start the dev server with host flag

Start the dev server with the host flag:

```
npm run dev -- --host
```

Your dev server should now start and you should see a message like this:

```
  > - Local: http://localhost:<port>/
  > - Network: http://<ip>:<port>/
```

Copy the network url for the next step.

### 2. Configure Capacitor

Locate your `capacitor.config.ts` and set the `server.url` property to the network url from the previous step and set `server.cleartext` to `true`.

```ts
server: {
    url: /* dev server URL */,
    cleartext: true
}
```

### 3. Sync the config with capacitor

To ensure capacitor is using the latest config, run the following command:

```
npm run sync:cap
```

### 4. Run the app

Your live/hot reload is now ready, you can open your preferred platform IDE and run the app, any changes you make to the code will be reflected in the app without requiring you to restart it.

Keep in mind that the network url is dependant on your network so if you change networks you will need to repeat step 2. Because your IP is sensitive information, you should not commit the changes to your version control system.
