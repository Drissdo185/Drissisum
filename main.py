from bot import create_bot


def main():

    app = create_bot()

    print("Bot running...")

    app.run_polling()


if __name__ == "__main__":
    main()