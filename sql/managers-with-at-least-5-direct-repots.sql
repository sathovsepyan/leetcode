-- https://leetcode.com/problems/managers-with-at-least-5-direct-reports/
-- select name from Employee where id in(
--     select e.managerId from Employee e
--     where e.managerId is not NULL
--     group by e.managerId having count(*) >= 5
-- )
SELECT
  e1.name
FROM
  Employee e1
  INNER JOIN (
    SELECT
      e2.managerId
    FROM
      Employee e2
    GROUP BY
      managerId
    HAVING
      count(managerId) >= 5) AS t2 ON e1.id = t2.managerId
