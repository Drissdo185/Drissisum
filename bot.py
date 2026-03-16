from telegram.ext import Application, CommandHandler
from config import BOT_TOKEN
from app.handlers.help_handler import help_command

def create_bot():

    app = Application.builder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("help", help_command))

    return app