# SUDO backend

Express API server for SUDO applicant submissions.

## API

### `GET /health`

Returns API and database health.

### `POST /api/applicants`

Creates an applicant in the existing MySQL `applicant` table.

The current database schema supports these columns:

- `student_number`
- `name`
- `phone`
- `email`
- `motivation`
- `introduction`

For compatibility with the existing frontend draft, the API also accepts
`studentId`, `major`, `part`, `projects`, and `portfolio`. When `introduction`
is not provided, those extra frontend fields are combined into the
`introduction` column.

Example request:

```json
{
  "name": "Hong Gil Dong",
  "studentId": "2312345",
  "major": "AI Applied Science",
  "phone": "010-0000-0000",
  "email": "example@hansung.ac.kr",
  "part": "backend",
  "motivation": "I want to build useful services.",
  "projects": "No previous project experience.",
  "portfolio": "https://github.com/example"
}
```

## Run with the existing DB compose

Start the MySQL container first:

```bash
cd ../db
docker compose up -d
```

Then start the backend:

```bash
cd ../backend
docker compose up --build
```

The backend will listen on `http://localhost:3000`.

Create `.env` from `.env.example` only when you need to override the defaults.

## Run locally against the Docker DB

If the DB container is running with `13306:3306`, the app can run from the host:

```bash
npm install
npm run dev
```

Without `.env`, local defaults are `DB_HOST=127.0.0.1` and `DB_PORT=13306`.
