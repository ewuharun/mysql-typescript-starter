CREATE TABLE IF NOT EXISTS `tutorials` (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published boolean DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;