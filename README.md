# Wetek Ferienschule

- Front-end using React + Material UI
- with PHP at the backend (LAMP)


- [Wetek Ferienschule](#wetek-ferienschule)
  - [Initial state (bootstrap)](#initial-state-bootstrap)
    - [./app](#app)
    - [./db](#db)
  - [Development state (runtime)](#development-state-runtime)
    - [./app](#app-1)
    - [./db](#db-1)
    - [./php](#php)





## Initial state (bootstrap)

### ./app
    npm install

### ./db
    dolt init
    dolt sql < doltdump.sql


## Development state (runtime)

### ./app
    PORT=8000 npm start

### ./db
    dolt sql-server -P 3334

### ./php
    php -S 0.0.0.0:4000
