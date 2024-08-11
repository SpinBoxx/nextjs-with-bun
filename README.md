# Next.js Project with Bun

A web application built with Next.js using Bun as the JavaScript runtime and package manager.

- [Next.js Project with Bun](#nextjs-project-with-bun)
  - [Quick Start](#quick-start)
  - [Technologies](#technologies)
  - [Database](#database)
  - [License](#license)


## Quick Start

1. Clone: `git clone https://github.com/SpinBoxx/nextjs-with-bun.git`
2. Install: `bun install`
3. Develop: `bun run dev`
4. Build: `bun run build`
5. Start: `bun run start`
6. Test: `bun test`

## Technologies

- Next.js
- Bun
- React
- TypeScript

## Database

This projet use [Prisma](https://www.prisma.io/) as ORM.

To connect this project to your remote database, you just need to specify your environment secret keys :

- `DATABASE_URL`
- `DIRECT_URL`

After this we added 3 new scripts to 
 - generate models after install (usefull when deploy) => `postinstall`
 - to push => `prisma:push`
 - open db admin => `prisma:studio`

> Y'll need the dotenv package installed globally (if you use .env.local) to prefix your script with `dotenv -e .env.local --`

## License

MIT