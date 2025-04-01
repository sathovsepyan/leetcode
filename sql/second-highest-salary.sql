-- https://leetcode.com/problems/second-highest-salary/
SELECT
  coalesce( SELECT DISTINCT
      salary
    FROM Employee ORDER BY salary DESC LIMIT 1 offset 1) AS SecondHighestSalary
