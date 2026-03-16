from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from .db import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    telegram_id = Column(String, unique=True)
    username = Column(String)


class Problem(Base):
    __tablename__ = "problems"

    id = Column(Integer, primary_key=True)
    title = Column(String)
    difficulty = Column(String)
    leetcode_url = Column(String)