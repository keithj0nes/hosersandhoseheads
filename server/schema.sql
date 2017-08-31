
-- CREATE TABLES	=	=	=	=	=	=	=	=	=	=	=	=	= = = = = = = = =

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname TEXT,
  lastname TEXT,
  email TEXT,
  password TEXT,
  password_salt TEXT,
  admin BOOLEAN,
);


CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  post_title TEXT,
  post_body TEXT,
  post_img_url TEXT,
  draft BOOLEAN,
  news BOOLEAN,
  playoffs BOOLEAN,
  rules BOOLEAN,
  weekly_recaps BOOLEAN,
  user_id INTEGER REFERENCES users(id),
  date_posted TIMESTAMP,
  date_updated TIMESTAMP
);


-- INSERT DATA	=	=	=	=	=	=	=	=	=	=	=	=	= = = = = = = = = =
