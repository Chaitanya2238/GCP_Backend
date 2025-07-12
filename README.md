# GCP_Backend – Prisma + PostgreSQL Setup

A Node.js backend connected to a PostgreSQL database hosted on GCP (Google Cloud Platform) using Prisma ORM.

## 🔧 Tech Stack

- Node.js
- Prisma
- PostgreSQL (Cloud SQL)
- pgAdmin (for DB management)

---

## 🛠️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Chaitanya2238/GCP_Backend.git
cd GCP_Backend
2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file:

bash
Copy
Edit
cp .env.example .env
Edit the .env file with your actual DB credentials.

4. Push Prisma Schema to DB
bash
Copy
Edit
npx prisma db push
5. Run Seed/Test Script
bash
Copy
Edit
node test.js
📂 Prisma Models
User
Field	Type
id	Int
name	String
email	String

Project
Field	Type
id	Int
repoName	String
repoUrl	String
userId	Int

🤝 Contributing
Fork this repo

Create a feature branch

Push changes and open a PR

👤 Author
Chaitanya Gupta
GitHub: @Chaitanya2238

yaml
Copy
Edit

---

## ✅ 3. Add Collaborators on GitHub

1. Go to your repo:  
   👉 https://github.com/Chaitanya2238/GCP_Backend

2. Click **Settings** → **Collaborators**

3. Search for GitHub usernames/emails and invite them

4. They’ll get a notification to join

---

Once you’ve added `.env.example` and `README.md`, run:

```bash
git add .env.example README.md
git commit -m "Add env example and README"
git push