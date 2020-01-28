
  --  create the database--

CREATE  sharity;


--use database to create tables

--Users table--
USE sharity;

CREATE TABLE USERS (
  userId INT NOT NULL AUTO_INCREMENT,
  firstName VARCHAR(50)NOT NULL,
  lastname  VARCHAR(50) NOT NULL,
  title VARCHAR(50)NOT NULL,
  email VARCHAR(50)NOT NULL,
  phone INT(20)NOT NULL,
  PRIMARY KEY (userId)
);

--address table--
USE sharity;

CREATE TABLE LocationAddress (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	userId INT NOT NULL,
	streetAddress VARCHAR(100) NOT NULL,
	city VARCHAR(50) NOT NULL,
	state VARCHAR(2) NOT NULL,
	zip  INT(10) NOT NULL,
  country VARCHAR(50) NOT NULL  
);

--vendor table--
USE sharity;

CREATE TABLE vendor (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  businessName VARCHAR(100)NOT NULL,
  businessWebsite  VARCHAR(100),
  userId INT,
  addressId INT,
  EIN  VARCHAR(20) NOT NULL,
  email VARCHAR(50)NOT NULL,
  phone VARCHAR(20) NOT NULL,
  businessType VARCHAR(50)NOT NULL,
  storageReqs BOOLEAN,
  dropoff BOOLEAN
  FOREIGN KEY (userId)
  REFERENCES USERS(userId)
  FOREIGN KEY (addressId)
  REFERENCES LocationAddress(id)
);

--BUyers table--
   
   USE sharity;
  
CREATE TABLE nonProfit (
  userId INT NOT NULL,
  nonProfitName VARCHAR(100) NOT NUll,
  URL  VARCHAR(100),
  taxNumber501C3 VARCHAR(20) not null,
  missionStatement  VARCHAR(200) NOT NULL,
  businessType VARCHAR(50)NOT NULL,
  storageReqs VARCHAR(50) NOT NULL
);


--table for inventory--
USE sharity;
   
CREATE TABLE Inventory (
  userId INT NOT NULL,
 foodItemDescription VARCHAR(100) NOT NUll,
  numberOfMeals  INTEGER (10),
  poundsOfProduce  INTEGER (10),
  poundsOfMeat  INTEGER (10),
  poundsOfCheeseandOtherDairy  INTEGER (10),
  poundsOfDryGoods  INTEGER (10),
  numberOfDozenEggs INTEGER (10),
  quartsOfLiquid  INTEGER (10),
  dollarValue INTEGER (10) NOT NULL,
  pickUpDate  VARCHAR(20) NOT NULL
 
);

--table for food request--
USE sharity;
   
CREATE TABLE FoodRequest (
  userId INT NOT NULL,
 foodItemDescription VARCHAR(100) NOT NUll,
  numberOfMeals  INTEGER (10),
  poundsOfProduce  INTEGER (10),
  poundsOfMeat  INTEGER (10),
  poundsOfCheeseandOtherDairy  INTEGER (10),
  poundsOfDryGoods  INTEGER (10),
  numberOfDozenEggs INTEGER (10),
  quartsOfLiquid  INTEGER (10),
  dollarValue INTEGER (10) NOT NULL,
  pickUpDate  VARCHAR(20) NOT NULL
 
);


