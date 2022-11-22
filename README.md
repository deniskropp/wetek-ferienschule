# Wetek Ferienschule

- Front-end using React + Material UI
- with PHP at the backend (LAMP)


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
!! outdated, using Apache2 at the moment !!
    php -S 0.0.0.0:4000
