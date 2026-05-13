# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

Single-page React storytelling website ("Inside the Annex"). No backend, no database, no API — all data is static in `src/data/storyData.js`.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (Vite on port 5173) |
| Lint | `npm run lint` |
| Build | `npm run build` |

### Notes

- No test framework is configured — there are no test scripts or test files.
- The app is entirely front-end; the only service to run is the Vite dev server.
- Use `npm run dev -- --host 0.0.0.0` when testing with browser automation to allow external access.
- All application code lives on the `cursor/anne-frank-storytelling-site-fb18` branch; `main` contains only a stub README.
