# Being Fit 🏋️‍♂️

**Being Fit** is a simple and efficient full-stack application to manage gym memberships and trainers. Built with modern technologies to provide seamless user and admin experiences.

## ✨ Features

- User registration & login (NextAuth.js)
- View available membership plans
- Admin dashboard to:
  - Add/edit/delete trainers
  - Assign membership plans to users
  - View active/inactive members

## 🧰 Tech Stack

### Frontend:
- [Next.js](https://nextjs.org/) – React-based framework for frontend
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling

### Backend:
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/) – Type-safe DB access

### Database:
- [PostgreSQL](https://www.postgresql.org/)

### DevOps:
- [Docker](https://www.docker.com/) – Containerization
- [GitHub Actions](https://github.com/features/actions) – CI/CD
- [Turborepo](https://turbo.build/) – Monorepo management
- [pnpm](https://pnpm.io/) – Fast, disk-efficient package manager

## 🛠️ Getting Started

 **Clone the repo**
  ```bash
# 1. Clone the repository
git clone https://github.com/your-username/creda.git
cd creda

# 2. Install dependencies
pnpm install

# 3. Set Up Environment Variables
NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
BACKEND_API_URL=http://localhost:4000
DATABASE_URL=postgresql://user:password@localhost:5432/beingfit
PORT=4000

# 4. Run Database Migrations
cd apps/backend
npx prisma migrate dev

# 5. Start the Development Server
pnpm dev

```
❤️ Made with precision by
**YashRawatTechnology** ||
Turning ideas into real-world systems.
