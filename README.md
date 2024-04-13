<h1 align="center" id="title">Tripma</h1>

<p align="center"><img src="https://socialify.git.ci/makkenzo/tripma/image?font=Inter&amp;language=1&amp;name=1&amp;owner=1&amp;pattern=Brick%20Wall&amp;stargazers=1&amp;theme=Light" alt="project-image"></p>

<p id="description">Tripma is a service for searching flights hotels. It is a PET project for learning Next.js TailwindCSS Prisma Jotai and other technologies.</p>

<h2>🛠️ Installation Steps:</h2>

<p>1. Clone repository</p>

```
git clone https://github.com/makkenzo/tripma.git
```

<p>2. Goto repos dir</p>

```
cd tripma
```

<p>3. Install dependencies</p>

```
pnpm i
```

<p>4. Set local variables in .env </p>

> (See example in */.env.example*)

```.env
DATABASE_URL="postgresql://..."

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

<p>5. Run in dev mode</p>

```
pnpm dev
```

<h2>💻 Built with</h2>

Technologies used in the project:

-   NextJS
-   Typescript
-   TailwindCSS
-   Prisma
-   Jotai
-   Clerk

<h2>🛡️ License:</h2>

This project is licensed under the MIT
