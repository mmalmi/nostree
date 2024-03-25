import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'irisdb',
      // The file name for the generated bundle (entry point of your library)
      fileName: (format) => `irisdb.${format}.js`,
    },
    rollupOptions: {
      // Externalize dependencies so they're not bundled into your library
      external: [],
      output: {
        // Provide globals here if necessary
        globals: {},
      },
    },
    outDir: 'dist',
  },
  test: {
    environment: 'jsdom',
  },
});
