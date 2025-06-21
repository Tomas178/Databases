ALTER TABLE ratings
        ADD user_reviews INT;

ALTER TABLE ratings
     RENAME user_reviews
         TO tomas;

ALTER TABLE ratings
       DROP tomas;