-- Write your PostgreSQL query statement below
SELECT
  t1.id
FROM
  Weather t1
  JOIN Weather t2 ON t1.recordDate - 1 = t2.recordDate
    AND t1.temperature > t2.temperature
