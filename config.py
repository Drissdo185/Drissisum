import os
from dotenv import load_dotenv

load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql://user:password@localhost/dbname")

DAILY_NEW_PROBLEMS = 2
DAILY_REVIEW_PROBLEMS = 2

REMIND_INTERVAL = 60  # minutes
