DROP TABLE IF EXISTS urls;

CREATE TABLE urls (
  id int(11) NOT NULL AUTO_INCREMENT,
  longUrl varchar(255) NOT NULL,
  shortUrl varchar(255) NOT NULL,
  code varchar(255) NOT NULL,
  createdAt datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY code (code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;