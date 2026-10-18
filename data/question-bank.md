# 3-1 Archive Question Bank

## CSE-301 · 2016 · Term final · Question 1

a. "Logical data independence is more difficult than physical data independence"- in light of the above mentioned statement explain the differences between physical and logical data independence. What are the five main functions of a database administrator?
[a: 10 marks (5+5=10)]

b. "A database system is partitioned into modules that deals with each of the responsibilities of the overall system";- according to this statement draw the database system structure and briefly discuss components of "Query processor" and "Storage Manager" of a Database Management System (DBMS).
[b: 15 marks (5+5+5=15)]

c. Explain two reasons why we may choose to define a view? What is "Materialized views"? "Modifications are generally not permitted on view relations, except in limited cases"- Justify the above mentioned statement.
[c: 10 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 1.


## CSE-301 · 2016 · Term final · Question 2

a. Briefly discuss about weak Entity Sets [ Hints: definition, identifying entity set, existence dependence, identifying relationship, discriminator, primary key of weak entity set, descriptive attributes, E-R diagram of weak entity sets and tabular representation of weak entity sets]. We can convert any weak entity set by simply adding appropriate attributes; Why, then, do we have weak entity sets?
[a: 10 marks (8+2=10)]

b. Explain with examples two different methods of transforming an E-R diagram that includes generalization to a tabular form. Explain the distinctions between the terms Primary Key, Candidate Key, Super Key.
[b: 10 marks (5+5=10)]

c. Draw the E-R diagram of a design of a generalization- specification hierarchy for a motor-vehicles sales company. The company sells motorcycles, passenger cars, vans and buses. Justify your placement of attributes at each level of the hierarchy. Explain why they should not be placed at a higher or lower level.
[c: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 1.


## CSE-301 · 2016 · Term final · Question 3

Consider a database system of a banking enterprise that has the following relation schemas:

a. Branch-Schema= ( branch-name, branch-city, assets)

b. Account-Schema= ( branch-name, account-no, balance)

c. Customer-Schema=(customer-name, customer-street, customer-city)

d. Depositor-Schema= ( customer_name, account-no)

e. Loan-Schema= (branch-name, loan-no, amount)

f. Borrower-Schema=(customer-name, loan-no) The corresponding relations are branch, account, customer, depositor, loan and borrower respectively.

a. Refer to above information of a banking enterprise write the following queries using relational operators ( correct symbols must be used):
[a: 20 marks (5×4=20)]

1) Using Cartesian Product Operation find the name of all customers who have a loan at the Mirpur branch,
[a(1): 4 marks]

2) Using rename operation find the largest account balance in the bank.
[a(2): 4 marks]

3) Use update operation to account relation for payment of interest in such a way that accounts with balance over 500 receives 6 percent interest, whereas all others receive 5 percent.
[a(3): 4 marks]

4) Using natural join and union operation find the name of all branches with customers who have an account or a loan or both in the bank and who live in Dhaka city.
[a(4): 4 marks]

5) Find all customers who have an account at all the branches in Dhaka city ( Use division operation)
[a(5): 4 marks]

b. Refer to above information of a banking enterprise write the following queries using SQL:
[b: 15 marks (5×3=15)]

1) Define a view to be called "all-customer", consisting of branch names and the names of all customers who have either an account or a loan at that branch.
[b(1): 5 marks]

2) Find the average loan amount for each customer who live in Dhaka city and has maximum four loans.
[b(2): 5 marks]

3) Find the name of all branches that have assets greater than that of each branch in Dhaka.
[b(3): 5 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 2.


## CSE-301 · 2016 · Term final · Question 4

a. What is the formal definition of 'Extraneous Attributes'? How can we test efficiently if an attribute in extraneous [Let R be the relation schema, and let F be the given set of functional dependencies that hold on R]?
[a: 6 marks]

b. Define Boyce-Codd Normal form (BCNF) and Third Normal Form (3NF). "Not every BCNF decomposition is dependency preserving"- Justify the statement using an illustration.
[b: 10 marks (6+4=10)]

c. For relational schema, R=(A,B,C,D,E) the set of functional dependencies are {A → BC, CD → E, B → D, E → A}
[c: 19 marks (5+5+9=19)]

1) List the candidate Keys for R.
[c(1): 5 marks]

2) Compute the canonical cover Fc.
[c(2): 5 marks]

3) Test whether the decomposition R₁=(A,B,C) and R₂=(A,D,E) is a lossless-join decomposition. Test whether the decomposition R₁=(A,B,C) and R₃=(C,D,E) is a loss-less join decomposition.
[c(3): 9 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 2.


## CSE-301 · 2016 · Term final · Question 5

a. Write down the properties of B tree and B⁺ (B PLUS) Tree. Compare between Binary Trees and Adel'son-vel'skii and Landis (AVL) Tree for indexing.
[a: 16 marks (5+5+6=16)]

b. A B tree of order 3 contains 13 keys of records. the keys of the records are P,Y,A,Q,F,W,J,T,B,L,M,D,U. Draw the tree showing
[b: 12 marks (3×4=12)]

where each record would appear (Hints: root has key of record(M) and two non-terminal nodes have key of records (D,J) and (Q,U) respectively. Draw it also as it appears after each operation in the following sequence (Draw diagram only, no explanation is required.) :

1) Insert record with key X
[b(1): 3 marks]

2) Delete record with key Q
[b(2): 3 marks]

3) Delete record with key M
[b(3): 3 marks]

4) Insert record with key C
[b(4): 3 marks]

c. A B⁺ (B PLUS) tree of order 3 contains 07 keys of records. The keys of the records are a,e,l,n,r,s and u. Draw the tree (Hints: root has keys (l,r); the terminal node can hold two or three records and index nodes one or two keys). Insert new key of record v in the tree. (Draw diagram only, no explanation is required).
[c: 7 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 3.


## CSE-301 · 2016 · Term final · Question 6

a. "Ensuring consistency in spite of concurrent execution of transactions requires extra work"- in contradiction to it still we adopt concurrent execution of transactions. Explain two good reasons for allowing concurrency.
[a: 4 marks]

b. i) Explain with example the distinction between the terms 'serial schedule' and 'serializable schedule'.
[b: 16 marks (6+5+5=16); b(i): 6 marks]

ii) What do you understand by 'conflict equivalence' and 'schedule equivalence'?
[b(ii): 5 marks]

iii) What are the conditions of two different schedules to be view equivalent?
[b(iii): 5 marks]

c. Current values of account A and B be TK 5000 and TK 9000. Transaction T₀ transfers TK 1500 from account A to account B and transaction T₁ transfers 10% of the balance of account A to account B. Two concurrent schedules for T₀ and T₁ are shown below. Explain which of them is 'conflict serializable' and which is not and why?
[c: 15 marks]

Schedule 1

| T₀ | T₁ |
| --- | --- |
| read(A); A := A − 1500; write(A) |  |
|  | read(A); temp := A × 0.1; A := A − temp; write(A) |
| read(B); B := B⁺ 1500; write(B) |  |
|  | read(B); B := B⁺ temp; write(B) |

Schedule 2

| T₀ | T₁ |
| --- | --- |
| read(A); A := A − 1500 |  |
|  | read(A); temp := A × 0.1; A := A − temp; write(A); read(B) |
| write(A); read(B); B := B⁺ 150; write(B) |  |
|  | B := B⁺ temp; write(B) |

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 3.

Notes: In Schedule 2, the printed increment of B is 150, although the scenario says 1500. This source discrepancy is retained.

## CSE-301 · 2016 · Term final · Question 7

a. Why is Index Authorization needed? What do you understand by 'Notion of Roles', 'Audit Trails' and 'Cascading of the Revoke'?
[a: 9 marks (3+6=9)]

b. Mention two requirements that must be met while designing a 'Trigger mechanism'. Why do we need to use Triggers? When should we not use Triggers?
[b: 9 marks (3+3+3=9)]

c. Define with example the concepts of 'Aggregation'. How 'Aggregation' can be represented in a table.
[c: 7 marks (4+3=7)]

d. Tree protocol is a simple Graph base protocol. Discuss Tree locking protocol. Compare between 'Two Phase Locking Protocol' and 'Tree Locking Protocol'.
[d: 10 marks (5+5=10)]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 4.


## CSE-301 · 2016 · Term final · Question 8

a. Discuss different phases and Timestamps of 'Validation-Based Protocol'. Illustrate two conditions of 'Validation Test' with example.
[a: 10 marks (6+4=10)]

b. Discuss 'Timestamp-Ordering Protocol' [Hints: W-timestamp, R- timestamp, Ti issues read(Q), Ti issues write (Q)]. 'Thomas Write Rule is a modification to the Timestamp-ordering protocol'- compare between 'Basic Timestamp-ordering Protocol' and 'Thomas' Write Rule'
[b: 11 marks (6+5=11)]

c. Define 'Transaction Deadlock' with the help of a 'wait for' graph. Compare between 'Wait Die' and 'Wound Die' scheme for deadlock prevention. Discuss three actions need to be taken for 'Recovery from Deadlock'.
[c: 14 marks (4+5+5=14)]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 4.

Notes: The paper prints “Wound Die”; this refers to the wound-wait comparison. The quoted wording is retained.

## CSE-301 · 2017 · Term final · Question 1

a. List five responsibilities of a database management system. For each responsibility, explain the problems that would arise if the responsibility were not discharged.
[a: 10 marks]

b. Consider that in a PASCAL like language, we define a record as follows:
[b: 10 marks (5+5=10)]

```pascal
type customer = record
  Customer_name: String;
  Social_Security: String;
  Customer_street: String;
  Customer_city: String;
end;
```

Using this record as an example, illustrate the difference between 'the three levels of data abstraction'. What are the differences between 'Data Definition Language (DDL)' and 'Data Manipulation Language (DML)'?

c. Consider a database of MIST for the scheduling of classrooms for final exams. There are certain courses for which examinations have to be taken. For each day, examinations of a number of courses may be taken in a particular room. Examination of all students of a particular course has to be taken in a single day. But sitting arrangement of students for that course may spread into different rooms, and in each room, examination of more than one course may be taken. A number of teachers are assigned at most to one room. At any particular day, a teacher can be assigned at most to one room. The database system should be able to answer the following queries. List teachers supervising a particular room. List rooms where examination of no course is taken. List of courses for which examination has been taken at a particular date. Now construct a schema diagram (Entity Relationship (E-R) diagram) for the scheduling of classrooms for final exams of MIST. Mention all assumptions that you make about mapping constraints. [Hints: This database may maintain data about the following entities: (i) exam, with attributes exam id and time; (ii) course, with attributes course _ name, department, and course_code (iii) section; with attributes section _ number and enrollment, and dependent as a weak entity set on course (iv) room, with attributes room number, capacity, and building.]
[c: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 1.


## CSE-301 · 2017 · Term final · Question 2

a. "One limitation of E-R model is that it cannot express relationships among relationships." — How to solve this problem? Explain with suitable example.
[a: 8 marks]

b. Define the concept of 'Specialization/ Generalization' with suitable example. Explain different types of design constraints on a particular 'Generalization'. Discuss how 'Generalization' can be represented in a table.
[b: 17 marks]

c. (i) We can convert any weak entity set to an strong entity set by simply adding appropriate attributes.- why, then do we have weak entity sets?
[c: 10 marks (5+5=10); c(i): 5 marks]

(ii) "The table for the relationship set linking a weak entity set to its corresponding strong entity set is redundant and does not need to be present in a tabular representation of an E-R diagram." Justify the above mentioned statement.
[c(ii): 5 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 2.


## CSE-301 · 2017 · Term final · Question 3

a. Consider the following relational database schemes:
[a: 18 marks (4×4.5=18)]

employee (employee_name, street, city)

works (employee_name, company_name, salary)

company (company_name, city)

manages (employee_name,manager_name) Give an expression(s) in the 'relational algebra' for each request:

(i) Give all managers in this database a 10 percent salary raise, unless the salary would be greater than $100,000. In such cases, give only a 3 percent raise.
[a(i): 4.5 marks]

(ii) Find the company with the smallest payroll
[a(ii): 4.5 marks]

(iii) Find those companies whose employees earn a higher salary, on average than the average salary at "First Bank Ltd". 
[a(iii): 4.5 marks]

(iv) Assume the companies may be located in several cities. Find all companies located in every city in which 'Small Bank Corporation' is located.
[a(iv): 4.5 marks]

b. The schemas for a Bank are: Branch _ schema (branch_name, assets, branch_city) Customer_schema = (Customer_name, Customer _ city) Deposit schema = (branch_name, account_no, Customer_name, balance) Do the following operations using SQL;
[b: 17 marks (4×4.25=17)]

i) Find all customers who do not have any branch in their cities.
[b(i): 4.25 marks]

ii) Find all customers who do have account in different branches.
[b(ii): 4.25 marks]

iii) Subtract $10 from deposit balances which are less than average balance.
[b(iii): 4.25 marks]

iv) Create a view showing all branch names and total deposits in that branch.
[b(iv): 4.25 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 2.


## CSE-301 · 2017 · Term final · Question 4

a. Let, two relations r(R) and s(S) be given with S ⊂ R. Prove that r ÷ s = π[R−S](r) − π[R−S]((π[R−S](r) × s) − π[R−S,S](r))
[a: 7 marks]

b. Write a short note on the following:
[b: 14 marks (7+7=14)]

(i) "With" clause operation on SQL with example
[b(i): 7 marks]

(ii) "Granting of privileges" (for authorization)
[b(ii): 7 marks]

c. Mention two requirements that must be met while designing a 'Trigger mechanism'. When should we not use 'Triggers'?
[c: 6 marks]

d. 'Domain Constraints and Referential Integrity Constraints are special forms of Assertions'- verify this statement. SQL allows a
[d: 8 marks (5+3=8)]

foreign Key dependency to refer to the same relation, as in the following example:

```sql
Create table manager
(employee_name char(20) not null,
 manager_name char(20) not null,
 primary key employee_name,
 foreign key (manager_name)
 references manager on delete cascade)
```

Here, employee_name is a key to the table manager, meaning that each employee has at most one manager. The foreign-key clause requires that every manager also be an employee. Explain exactly what happens when a tuple in the relation manager is deleted.

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 2, 3.

Notes: Projection subscripts in the printed division identity are represented in brackets, including the source’s final π[R−S,S](r) term.

## CSE-301 · 2017 · Term final · Question 5

a. Discuss 'Canonical Cover' (Hints: definition, properties and algorithm). "A decomposition having the property F′⁺ = F⁺ is a dependency-preserving decomposition" - Justify the statement (assume their standard meaning).
[a: 12 marks (6+6=12)]

b. Explain with example 'Third Normal Form (3NF)' Compare BCNF' and '3NF'.
[b: 10 marks (5+5=10)]

c. For relational schema R= (A, B, C, D, E) the set of functional dependencies are {A → BC, CD → E, B → D, E → A}
[c: 13 marks (6.5+6.5=13)]

(i) Test whether R is in 'Boyce-Codd Normal Form' (BCNF). If not then give a lossless-join decomposition of R in BCNF.
[c(i): 6.5 marks]

(ii) Test whether R is in 'Third Normal Form (3NF)'. If not then give a lossless-join dependency preserving decomposition of R in 3NF.
[c(ii): 6.5 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 3.


## CSE-301 · 2017 · Term final · Question 6

a. Write down properties of 'B*' (B steric) Tree of order M. Compare 'B' Tree and 'B⁺ (B plus) Tree for indexing.
[a: 10 marks (5+5=10)]

b. Differentiate between the following:
[b: 8 marks (4+4=8)]

(i) 'Dense Index' and 'Sparse Index'
[b(i): 4 marks]

(ii) 'Primary Index' and 'Secondary Index'
[b(ii): 4 marks]

c. A B-tree of order 5 (M=5) contains 19 keys of records. The keys of the records are 1,3,4,5,6,7,9,11,12,14,15,16,17,19,20, 21,22,23 and 24. Draw the tree (Hints: At the moment the tree has root and terminal nodes (leaf) only. The root has keys of records 6, 14 17 and 21). Insert the key of record 2 and 8 one after another to the tree (Draw the diagram only, no explanations is required).
[c: 10 marks (4+6=10)]

d. A B⁺ (B plus) tree of order 3 (M=3) contains 8 keys of records. The keys of the records are a, e, l, n, r, s, u and v. Draw the tree. (Hints: root has Keys(r); the terminal nodes can hold two or three records and index (Non terminal) nodes one or two keys). Delete key of record v from the tree (Draw the diagram only, no explanations is required).
[d: 7 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 3, 4.


## CSE-301 · 2017 · Term final · Question 7

a. 'Database-system implementers have paid much more attention to the 'ACID' properties than have file system implementers'- Why might this be the case? Explain the "Shadow Copy" scheme of recovery-management component of a database.
[a: 11 marks (5+6=11)]

b. i) "Every View serializable schedule is also conflict serializable, but there are conflict serializable schedules that are not view serializable". Explain with example.
[b: 17 marks (6+5+6=17); b(i): 6 marks]

ii) Since every conflict- serializable schedule is view serializable, why do we emphasize conflict serializability rather than view serializability?
[b(ii): 5 marks]

iii) "Blind writes appear in any view- serializable schedule that is not conflict- serializable." — Justify this statement with an example.
[b(iii): 6 marks]

c. What is a "Recoverable Schedule"? Why is a recoverability of schedules desirable? Are there any circumstances under which it would be desirable to allow non-recoverable schedules? Explain your answer.
[c: 7 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 4.


## CSE-301 · 2017 · Term final · Question 8

a. What is 'Starvation of Transaction'? Discuss refinement of basic two phase locking protocol with 'Lock Conversion'.
[a: 8 marks (4+4=8)]

b. "Validation-Based Protocol is called the optimistic concurrency control scheme" - Justify this statement in the light of advantages of the said protocol. "Thomas Write Rule makes use of view serializability by, in effect, deleting obsolete write operations from the transactions that issue them" Justify this statement with the help of mock transaction schedule.
[b: 10 marks (5+5=10)]

c. Discuss different 'Deadlock Prevention Protocols'. What are the limitations of "Time out Based schemes" for deadlock prevention? Explain "Selection of a victim" as an action Recovery from Deadlock.
[c: 17 marks (9+3+4=17)]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 4.

Notes: The source prints 9+3+4=17 for part (c), although the addends total 16. The printed allocation is retained.

## CSE-301 · 2018 · Term final · Question 1

a. You have been asked to design an employee tracking database for a company. They want to track information about employees, the employee's job history, and their certifications. Employee information includes first name, middle name, last name, social security number, address, city, state, zip, home phone and email address. Job history would include job title, job description, pay grade, pay range, salary and date of promotion. For certifications, they want certification type and date achieved. An employee can have multiple jobs over time, (i.e., Analyst, Sr. Analyst, QA Administrator). Employees can also earn certifications necessary for their jobs. Draw an ER diagram for this application. Be sure to mark the multiplicity of each relationship of the diagrams. Decide key attributes and identify them on the diagram. Please state all assumptions you make in your answer.
[a: 20 marks]

b. "In-fact it is always possible to replace a non-binary (n — ary, for n > 2) relationship set by a number of distinct binary relationship sets" In light of the above statement replace the abstract ternary (n=3) relationship set R, relating entity sets A, B and C into number of distinct binary relationship sets. Which are the considerations should be applied while choosing the primary key of a relation? Discuss with example how the multi-valued attribute problem of a database design can be solved.
[b: 15 marks (5+5+5=15)]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 1.


## CSE-301 · 2018 · Term final · Question 2

a. Consider a database system for a business enterprise that has the following relation schemas: Product_schema = (pid, name, price, category, year, maker Cid) Purchase _ schema = (buyer_ssn, seller_ssn, store, pid) Company _ schema = (Cid, name, stock price, country) Person_schema = (ssn, name, phone number, city) Note:
[a: 20 marks (4×5=20)]

• In purchase: buyer ssn, seller ssn are foreign keys in Person, pid is foreign key in Product;

• In Product: maker cid is a foreign key in Company; Write SQL statements to answer the following queries:

(1) Find the total number of people in any city separately who buy telephone products (Assume, there are multiple cities in a country)
[a(1): 4 marks]

(2) Find products (and their manufacturers) that are more expensive than all products made by the same manufacturer before 1972.
[a(2): 4 marks]

(3) Find names of people who brought products of country A and did not buy products of country B.
[a(3): 4 marks]

(4) Find names of the products (and their manufacturers) whose prices are less than the average product price of that company.
[a(4): 4 marks]

(5) Find the average stock price of the companies for each countries with an average price more than 1000 US Dollars.
[a(5): 4 marks]

b. Consider the following relational schema:
[b: 15 marks (4×3.75=15)]

EMPLOYEE (EMPLOYEE ID, LAST_NAME, FIRST_NAME, CITY, PHONE, HIRE DATE, JOB ID, SALARY, DEPARTMENT, MANAGER’S_Employee_ID)

JOB (JOB_ID, JOB TITLE, MIN SALARY, MAX SALARY)

DEPARTMENT (DEPARTMENT ID, DEPARTMENT NAME, LOCATION) For the schema above, write down the Relational Algebra expression for the following:

i. List the average salary and department name of each department.
[b(i): 3.75 marks]

ii. Increase all salaries more than 10,000 by 5% and less than 10,000 by 4%.
[b(ii): 3.75 marks]

iii. Delete all employees from EMPLOYEE table who earn less than 1000 as salary.
[b(iii): 3.75 marks]

iv. Find the name (first name and last name) of the employees along with manager_name who live in Dhaka city and hired after 1990. (Use Rename operator)
[b(iv): 3.75 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 1, 2.


## CSE-301 · 2018 · Term final · Question 3

a. "A database system is partitioned into modules that deals with each of the responsibilities of the overall system", - according to this statement draw the database system structure and briefly discuss different components of 'Query Processor' and 'Storage Manager' of a Database Management System (DBMS).
[a: 15 marks (5+5+5=15)]

b. Explain two reasons why we may choose to define a view, What is "Materialized Views"? "Modifications are generally not permitted on view relations except in limited cases." — Justify the statement.
[b: 10 marks]

c. Distinguish among the following joining methods:
[c: 10 marks]

(1) Natural Join.

(2) Join Using,

(3) Join on,

(4) Outer Join.

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 2.


## CSE-301 · 2018 · Term final · Question 4

a. Explain what is meant by 'Repeatation of Information" and "Inability to Represent Information"? Explain why each of these properties may indicate a Bad Relational Database Design. Why and when certain functional dependencies are called 'Trivial Functional Dependencies'?
[a: 10 marks (7+3=10)]

b. For relational schema R = (A, B, C, D, E) the set of functional dependencies are {A → BC, CD → E, B → D, E → A}
[b: 15 marks (5+5+5=15)]

(1) List the candidate keys for R.
[b(1): 5 marks]

(2) Compute the canonical cover F_c
[b(2): 5 marks]

(3) Test whether the decomposition R₁ = (A, B, C) and R₂ = (C, D, E) is a loss less join decomposition,
[b(3): 5 marks]

c. What is the formal definition of 'Extraneous Attributes'? How can we test efficiently if an attribute is extraneous [Let R be the relation schema and let F be the given set of functional dependencies that hold on R]? "Not every BCNF decomposition is dependency preserving" — justify the statement using an illustration.
[c: 10 marks (6+4=10)]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 2, 3.


## CSE-301 · 2018 · Term final · Question 5

a. Why 'Roles' are used for assigning privilege to users? Create three users Rezwan, Shahidul and Shihab and assign them ALTER, DROP, INSERT, SELECT, INDEX and DELETE privileges respectively on Student and Faculty tables. Do this by assigning the users a role of "Admin" then transfer these privileges to another role named "Super Admin". Finally, revoke Drop and INDEX privileges from "Admin" judiciously.
[a: 10 marks]

b. Distinguish among 'Striping', 'Mirroring' and 'Redundancy' technique used in 'Redundant Arrays of Independent Disks (RAID)' techniques. "The choice between RAID level 1 to RAID level 5 is harder to make"— Justify the statement mentioning applications where RAID level 1 and RAID level 5 may be the best choice. Draw two diagrams of two different types of nested/hybrid RAID level 10 (RAID level 1+0 and RAID level 0+1).
[b: 15 marks (6+5+4=15)]

c. Discuss different phases and time-stamps of 'Validation Based Protocol' , Illustrate two conditions of 'Validation Test' with example,
[c: 10 marks (6+4=10)]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 3.


## CSE-301 · 2018 · Term final · Question 6

a. Write down the properties of B tree and B⁺ (B plus) tree.
[a: 10 marks (5+5=10)]

b. A B-tree of order 3 contains 13 keys of records. The keys of the three records are P, Y, A, Q, F, W, J , T, B, L, M, D, U. Draw the tree showing where each record would appear (Hint: root has the key of record (M) and two non-terminal nodes have key of records (D, J) and (Q,U) respectively). Draw the tree also as it appears after each operation in the following sequence (Draw the diagram only, no explanation is required):
[b: 12 marks (3×4=12)]

(1) Insert record with key X.
[b(1): 3 marks]

(2) Delete record with key Q.
[b(2): 3 marks]

(3) Delete record with key M.
[b(3): 3 marks]

(4) Insert record with key C.
[b(4): 3 marks]

c. Compare between:
[c: 13 marks (9+4=13)]

(1) 'Binary' Trees', 'Adel' Son — Vel'skii and Landis (AVL) Trees and 'B⁺' Trees for indexing.
[c(1): 9 marks]

(2) 'Static Index' and 'Dynamic Index',
[c(2): 4 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 3.


## CSE-301 · 2018 · Term final · Question 7

a. "Ensuring consistency in spite of concurrent execution of transaction requires extra work. Concurrent execution is more important when data must be fetched from (slow) disk or when transactions are long, and is less important when data is in memory and transactions are very short" — Justify why with all these contradictions still we adopt concurrent execution of transactions.
[a: 5 marks]

b. Explain with example the distinction between the terms 'Conflict equivalence' and 'Conflict Serializable' schedule. What are the conditions of two different schedules to be 'View Equivalent'? What is a cascade less schedule? Why is cascadelessness of schedules desirable? Are there any circumstances under which it would be desirable to allow non-cascadeless schedules? Explain your answer.
[b: 15 marks (5+5+5=15)]

c. Current values of account A and B are Tk 5000 and Tk 9000. Transaction T₀ transfer Tk 1500 from account A to account B and transaction T₁ transfers 10% of the balance of account A to account B. Two concurrent schedules for T₀ and T₁ are shown below. Explain which of them is 'Conflict Serializable' and which is not and why?
[c: 15 marks]

Schedule 1

| T₀ | T₁ |
| --- | --- |
| read(A); A := A − 1500; write(A) |  |
|  | read(A); temp := A × 0.1; A := A − temp; write(A) |
| read(B); B := B⁺ 1500; write(B) |  |
|  | read(B); B := B⁺ temp; write(B) |

Schedule 2

| T₀ | T₁ |
| --- | --- |
| read(A); A := A − 1500 |  |
|  | read(A); temp := A × 0.1; A := A − temp; write(A); read(B) |
| write(A); read(B); B := B⁺ 1500; write(B) |  |
|  | B := B⁺ temp; write(B) |

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 4.


## CSE-301 · 2018 · Term final · Question 8

a. Discuss the Tree locking Protocol. Compare between 'Two phase locking protocol' , 'Time stamp — ordering Protocol' and 'Tree- locking Protocol' in context of the following:
[a: 15 marks (6+9=15)]

(1) Conflict serializabilty,

(2) Deadlock,

(3) Starvation,

(4) Recoverability,

(5) Cascadelessness.

b. Discuss 'Time stamp — ordering Protocol'. [Hint: W — timestamp, R — timestamp, Ti issues read (Q), Ti issues
[b: 10 marks (5+5=10)]

write (Q)] How can we ensure 'Recoverability' and 'Cascadelessness' in Basic Timestamp — Ordering Protocol? 

c. Define 'Transaction Deadlock' with the help of a 'Wait for' graph. "There may be fewer rollbacks in the wound-wait scheme than that of wait-die scheme." — In light of this statement compare between 'Wait-die' and 'Wound-die' scheme for deadlock prevention.
[c: 10 marks (5+5=10)]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 4.


## CSE-301 · 2019 · Term final · Question 1

a. The schemas of a Hospital are:
[a: 20 marks (4×5=20)]

Patient(Patient_id, First_Name, Surname, Admission_Date, Doctor_id, Ward_No)

Disease(Disease_id, Name, Patient_id)

Ward(Ward_No, Ward_Name)

Doctor(Doctor_id, Surname, First_Name, No_of_Patient, Disease_id) For the schema above, write SQL to implement the following queries:

i) List the surnames of all the patients of 'Dr Rawnak'.
[a(i): 4 marks]

ii) List all the doctors who specialize in the diseases suffered by the patients whose Surname is 'Prithula'.
[a(ii): 4 marks]

iii) List the ward number and ward name of the ward/s which have the most patients.
[a(iii): 4 marks]

iv) Provide a list of all the patients who have not suffered any disease.
[a(iv): 4 marks]

v) Show the Doctor's name/s that has the third highest number of patients.
[a(v): 4 marks]

b. Briefly discuss about Weak Entity Sets [Hints: definition, identifying entity set, existence dependence, identifying relationship, discriminator, primary key of weak entity set, descriptive attributes, E-R diagram of weak entity sets and tabular representation of weak entity sets]. 'We can convert any weak entity set to a strong entity set by simply adding appropriate attributes'- Justify why, then, do we have weak entity sets?
[b: 10 marks (5+5=10)]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 1.


## CSE-301 · 2019 · Term final · Question 2

a. 'Logical data independence is more difficult than Physical data independence'- in light of the above mentioned statement explain the differences between Physical and Logical data independence. Distinguish between 'Data Definition Language' (DDL) and 'Data Manipulation Language' (DML). Contrast the advantages and disadvantages of storing derived attributes in tables.
[a: 12 marks (4+4+4=12)]

b. Consider the following information about MIST database. Professors have a National Identification Number (NID), a name, an age, a rank, and a research specialty, Projects have a project number, a sponsor name (e.g., Grameen Phone), a starting date, an ending date, and a budget. Graduate students have an NID, a name, an age, and a degree program (e.g., M.S or Ph.D). Each project is managed by one professor (Known as project's principal investigator). Each project is worked on by one or more professors (Known as the project's co-investigators). Professors can manage and/or work on multiple projects. Each project is worked on by one or more graduate students (Known as project's research assistants). When graduate students work on a project, a professor must supervise their work on the project. Graduate students can work on multiple projects, in which they will have a (potentially different) supervisor for each one. Departments have a department number, a department name and a main office. Departments have a professor (Known as Head of the Department) who runs the department. Professors work in one or more departments and for each department that they work in, a time percentage is associated with their job. Graduate students have one major department in which they are working on their degree. Each graduate student has another, more senior graduate student (Known as a student advisor) who advises him or her on what courses to take. Draw an Entity-Relationship (ER) diagram for this application to represent data requirements described above. Be sure to mark the multiplicity of each relationship of the diagram. Decide key attributes and identify them on the diagram. Please state all assumptions you make in your answer.
[b: 18 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 1, 3.


## CSE-301 · 2019 · Term final · Question 3

a. Consider the following relational database schemes:
[a: 14 marks (4×3.5=14)]

employee (employee_name, street, city)

works (employee_name, company_name, salary)

company (company_name, city)

manages (employee_name, manager_name) Give an expression in the relational algebra for each request:

i) Give all managers in this database a 10% salary raise.
[a(i): 3.5 marks]

ii) Delete all tuples in the works relation for employees of the company 'ABC Trade'.
[a(ii): 3.5 marks]

iii) Find the company with the lowest individual salary.
[a(iii): 3.5 marks]

iv) Find those companies whose employees earn a higher salary, on average, than the average salary at 'First Bank Ltd'.
[a(iv): 3.5 marks]

b. Let, two relations r(R) and s(S) be given with S ⊂ R. Prove that
[b: 6 marks]

r ÷ s = π[R−S](r) − π[R−S]((π[R−S](r) × s) − π[R−S,S](r))

c. Explain with examples two different methods of transforming an E-R diagram that includes generalization to a tabular form. Explain the distinctions between the terms Primary Key, Candidate Key and Super Key.
[c: 6 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 3.

Notes: Projection subscripts in the printed division identity are represented in brackets, including the source’s final π[R−S,S](r) term. The printed allocations are (a) 14, (b) 6 and (c) 6, totaling 26 although a complete question normally carries 30. No missing marks have been invented.

## CSE-301 · 2019 · Term final · Question 4

a. Mention two requirements that must be met while designing a 'Trigger mechanism'. Analyze why do we need to use Triggers and when should we not use 'Triggers'? Discuss four instances when trigger can be applied.
[a: 7 marks (2+3+2=7)]

b. Domain Constrains and Referential-Integrity Constraints are special forms of Assertions'- verify this statement. SQL allows a foreign-key dependency to refer to the same relation, as in the following example:
[b: 8 marks]

```sql
Create table manager
(employee_name char(20) not null,
 manager_name char(20) not null,
 primary key employee_name,
 foreign key (manager_name)
 references manager on delete cascade)
```

Here, employee_name is a key to the table manager, meaning that each employee has at most one manager. The foreign-key clause requires that every manager also be an employee, Explain exactly what happens when a tuple in the relation manager is deleted.

c. Why is Index Authorization needed? What do you understand by 'Notion of Roles', 'Audit Trails' and 'Cascading of the Revoke'?
[c: 8 marks]

d. Consider a view branch cust defined as follows:
[d: 7 marks]

```sql
create view branch_cust as
select branch_name, customer_name
from depositor, account
where depositor.account_number = account.account_number
```

Suppose that the view is materialized, that is, the view is computed and stored. Write active rules to maintain the view, that is, to keep it up to date on insertions to and deletions from depositor or account. Do not bother about updates.

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 3, 5.


## CSE-301 · 2019 · Term final · Question 5

a. Discuss 'Canonical Cover'. [Hint: definition, properties and algorithm], "A decomposition having the property F′⁺ = F⁺ is a dependency-preserving decomposition."- Justify the statement assuming their standard meaning.
[a: 10 marks (5+5=10)]

b. Explain with example 'Third Normal Form (3NF)', Compare between BCNF and 3NF.
[b: 9 marks (4+5=9)]

c. For relational scheme R=(A,B,C,D,E) the set of functional dependencies are F = {A → BC, CD → E, B → D, E → A}.
[c: 11 marks (5+6=11)]

i) Test whether R is in Boyce-Codd Normal Form (BCNF). If not, then give a loss less join decomposition of R in BCNF.
[c(i): 5 marks]

ii) Test whether R is in Third Normal Form (3NF). If not, then give loss less join dependency preserving decomposition of R in 3NF.
[c(ii): 6 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 5.


## CSE-301 · 2019 · Term final · Question 6

a. Since indices speed query processing, why might they not be kept on several search keys? Is it possible in general to have two
[a: 7 marks (4+3=7)]

primary indices on the same relation for different search keys? Explain your answer.

b. Write down the properties of B* (B Steric) Tree of order M. Compare between B-tree and B⁺ (B Plus) tree for indexing.
[b: 9 marks (5+4=9)]

c. A B⁺ (B Plus) tree of order 3 contains 7 keys of records. The keys of the records are a, e, l, n, r, s and u. Draw the tree. [Hint: root has
[c: 6 marks]

keys (l, r), the terminal nodes can hold two or three records and index nodes can hold one or two keys.] Insert new key of record v in the tree. (Draw diagram only, no explanation is required).

d. A B-tree of order 5 (M=5) contains 19 keys of records. The keys of the records are 1, 3, 4, 5, 6, 7, 9, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23 and 24. Draw the tree. [Hints: At the moment, the tree has root and terminal nodes (leaf) only. The root has keys of records 6, 14, 17 and 21] Insert the key of record 2 and 8 one after another to the tree. (Draw diagram only, no explanation is required.)
[d: 8 marks (3+5=8)]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 5, 7.


## CSE-301 · 2019 · Term final · Question 7

a. Database-system implementers paid much more attention to the ACID properties than have file-system implementers. Why might this be the case? During its execution, a transaction passes through several states, until it finally commit or aborts. List three possible sequences of states through which a transaction may pass. Explain why each state transition may occur.
[a: 10 marks (5+5=10)]

b. i) "Every view serializable schedule is also conflict serializable, but there are conflict serializable schedules that are not view serializable".- Analyze this statement with example.
[b: 15 marks (5+5+5=15); b(i): 5 marks]

ii) Since every conflict-serializable schedule is view serializable, why do we emphasize conflict serializability rather than view serializability?
[b(ii): 5 marks]

iii) "Blind writes appear in any view-serializable schedule that is not conflict-serializable".- Justify this statement with an example.
[b(iii): 5 marks]

c. What is 'Recoverable Schedule'? Why is recoverability of schedules desirable? Are there any circumstances under which it would be desirable to allow non-recoverable schedules? Explain your answer.
[c: 5 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 7.


## CSE-301 · 2019 · Term final · Question 8

a. For each of the following protocols, describe aspects of practical applications that would lead you to suggest using the protocol, and aspects that would suggest not using the protocols:
[a: 10 marks (5×2=10)]

i) Two-phase locking.
[a(i): 2 marks]

ii) Two-phase locking with multiple granularity locking.
[a(ii): 2 marks]

iii) The tree-based protocol.
[a(iii): 2 marks]

iv) Timestamp ordering based protocol.
[a(iv): 2 marks]

v) Validation-based protocol.
[a(v): 2 marks]

b. Analyze that in validation-based concurrency control scheme by choosing validation (T i), rather start (T i), as the timestamp of transaction Ti, we can expect better response time provided that conflict rates among transactions are indeed low. Under a modified version of the timestamp protocol, we require that a commit bit be tested to see whether a read request must wait. Explain how the commit bit can prevent cascading abort. Why is this test not necessary for write requests?
[b: 8 marks]

c. Under what conditions is it less expensive to avoid deadlock than to allow deadlocks to occur and to detect them? What are the limitations of 'Time out based schemes' for deadlock prevention? Explain 'Selection of a victim' as an action of recovery from deadlock.
[c: 12 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 7.


## CSE-301 · 2021 · Term final · Question 1

a. Consider a database for the registrar’s office of MIST. The database maintains data about the following entities:
[a: 15 marks]

(i) Courses, with attributes course code, title, credits, syllabus and prerequisites.

(ii) Course offerings, with attributes course code, year, semester, section number, instructor(s), timings and classroom.

(iii) Students, with attributes student’s roll number, name and program.

(iv) Instructors, with attributes identification number, name, department and designation.

Further, the enrollment of students in courses and grades awarded to students in each course they are enrolled for must be appropriately modeled.

Construct an “Entity Relationship Diagram” for the MIST registrar’s office. Mention all assumptions that you make about the mapping constraints. [15]

b. Construct a “Schema Diagram” for the registrar’s office of MIST you have designed in Question 1(a). Mention all assumptions that you make about the mapping constraints. [15]
[b: 15 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 1.


## CSE-301 · 2021 · Term final · Question 2

a. “Any schema that satisfies BCNF as well as satisfies 3NF.” Explain this statement with suitable examples. [10]
[a: 10 marks]

b. Current values of account A and B are TK10,000 and TK20,000 respectively. Transaction T₁ transfers TK5,000 from account A to account B and transaction T₂ transfers 10% of the balance of account A to account B. Two concurrent schedules for T₁ and T₂ are shown below. Which of them is “Conflict Serializable” and which is not? Justify your answer step by step. [20]
[b: 20 marks]

Schedule 1

| T₁ | T₂ |
| --- | --- |
| read(A); A := A − 5000; write(A) |  |
|  | read(A); temp := A × 0.1; A := A − temp; write(A) |
| read(B); B := B⁺ 5000; write(B) |  |
|  | read(B); B := B⁺ temp; write(B) |

Schedule 2

| T₁ | T₂ |
| --- | --- |
| read(A); A := A − 5000 |  |
|  | read(A); temp := A × 0.1; A := A − temp; write(A); read(B) |
| write(A); read(B); B := B⁺ 5000; write(B) |  |
|  | B := B⁺ temp; write(B) |

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 1, 2.


## CSE-301 · 2021 · Term final · Question 3

a. Describe the disadvantages of using file processing systems. [10]
[a: 10 marks]

b. “Cascading rollback is desirable in a schedule” — do you agree with this statement? Justify your answer with suitable examples. [10]
[b: 10 marks]

c. Identify if AG is the superkey of relation schema R or not. Use the following set F of functional dependencies for relation schema R=(A,B,C,G,H,I).
[c: 10 marks]

F = {A → B, A → C, CG → H, CG → I, B → H}. [10]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 2.


## CSE-301 · 2021 · Term final · Question 4

Marks allotted for Viva: 30. (Compulsory)

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 2.

Notes: This is a viva allocation, not a printed written question. No oral questions are supplied in the source.

## CSE-301 · 2021 · Term final · Question 5

a. Let two relations r(R) and s(S) be given with S ⊂ R. Prove that: [09]
[a: 9 marks]

r ÷ s = π[R−S](r) − π[R−S]((π[R−S](r) × s) − π[R−S,S](r))

b. Consider the following relational schema: [4 × 3.75 = 15]
[b: 15 marks (4×3.75=15)]

Employee(Employee-id, Last-name, First-name, city, phone, Hire-date, Job-id, Salary, Department, Manager’s_employee_id)

Job(Job_id, Job_title, Min_salary, Max_salary)

Department(Department_id, Department_name, Location)

For the schema above, write down the Relational Algebra expression for the following:

If the last digit of your roll number is odd, then proceed 1, 2, 3 and 5. If it is even, then proceed 1, 2, 4 and 6.

(1) List the average salary and department name of each department depending on department location.
[b(1): 3.75 marks]

(2) Increase all employees’ salary more than 10,000 by 5% and less than 10,000 by 3%.
[b(2): 3.75 marks]

(3) Delete all employees from Employee table who earn less than 1000 as salary. Use the assignment operator.
[b(3): 3.75 marks]

(4) Delete all employees from Employee table who earn less than among his/her department. Use the assignment operator.
[b(4): 3.75 marks]

(5) Find the name (first name and last name) of the employees along with manager name who live in Dhaka city and were hired after 2013. Use the Rename operator.
[b(5): 3.75 marks]

(6) Find all employees in the database who live in the same cities and contain the same mobile operator user as do their manager. Use the Rename operator.
[b(6): 3.75 marks]

c. A power failure that occurs while a disk block is being written could result in the block being only partially written. Assume that partially written blocks can be detected. An atomic block write is one where either the disk block is fully written or nothing is written (there are no partial writes). Suggest schemes for getting the effect of atomic block writes with the following RAID schemes. Your schemes should involve work on recovery from failure. [06]
[c: 6 marks]

(i) RAID level 1 (mirroring).

(ii) RAID level 5 (block-interleaved, distributed parity).

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 3.

Notes: Part b(4) is incomplete in the source (“earn less than among his/her department”); no missing criterion has been invented. The division identity is transcribed using bracketed projection subscripts. Part (b) assigns 3.75 marks to each of four selected queries (15 total), according to the printed roll-number instruction.

## CSE-301 · 2021 · Term final · Question 6

a. Write an assertion for the bank database to ensure that the assets value for the Perryridge branch is equal to the sum of all amounts lent by the Perryridge branch. [05]
[a: 5 marks]

b. “Domain Constraints” and “Integrity Constraints” are special forms of assertion — verify this statement. SQL allows a foreign-key dependency to refer to the same relation, as in the following example: [6+4=10]
[b: 10 marks (6+4=10)]

```sql
Create table manager
( employee_name Varchar2(20) not null,
  manager_name Varchar2(20) not null,
  Primary Key employee_name
  foreign Key (manager_name) references manager on delete cascade.
);
```

Here, employee_name is a key to the table manager, meaning that each employee has at most one manager. The foreign-key clause requires that every manager also be an employee. Explain exactly what happens when a tuple in the relation manager is deleted.

c. To draw an authorization graph, what key points should be considered? Draw an authorization graph using the following schema. Step-by-step action needs to be drawn. [2+3=5]
[c: 5 marks (2+3=5)]

(i) DBA grants authorization to U₁ with grant option.

(ii) DBA grants authorization to U₃ with grant option.

(iii) U₃ grants authorization to U₇.

(iv) DBA revokes authorization from U₃ with restrict option.

(v) DBA grants authorization to U₈ with grant option.

(vi) U₁ grants authorization to U₇.

If the last digit of your roll number is odd, proceed (vii) and (ix). If even, proceed (viii) and (x).

(vii) U₃ grants authorization to U₄.

(viii) U₈ grants authorization to U₉.

(ix) DBA revokes authorization from U₈ with cascading option.

(x) DBA revokes authorization from U₁ with cascading option.

d. Why are roles used for assigning privileges to users? Create three users Nafisa, Tania and Reza and assign them ALTER, INSERT, DROP, SELECT and DELETE privileges respectively on student and faculty tables. Assign the users a role of Admin and transfer these privileges to another role named Super Admin. Finally revoke DROP and INDEX privileges from Admin judiciously. Use SQL commands. [2+8=10]
[d: 10 marks (2+8=10)]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 4.

Notes: Part c(iii), the U₃-to-U₇ grant, is struck through in the scan and retained here for completeness.

## CSE-301 · 2021 · Term final · Question 7

a. The schema of a Hospital is: [20]
[a: 20 marks]

Patient(Patient_id, First_name, Surname, Admission_Date, Doctor_id, Ward_No)

Disease(Disease_id, Name, Patient_id)

Ward(Ward_No, Ward_name)

Doctor(Doctor_id, Surname, First_name, No_of_Patient, Disease_id)

For the schema above, write SQL to implement the following queries:

(i) List the surnames of all patients of “Dr. Afia”.

(ii) List all the doctors who have specialization in the diseases suffered by the patients having surname starting with “L”.

(iii) List the ward numbers and ward name of the ward/s which have the most patients.

(iv) Provide a list of all the patients who have not suffered from any disease.

(v) Show the Doctor’s name/s that has/have the third highest number of patients.

b. Mention two requirements to design a Trigger Mechanism. Analyze why we need to use triggers. Design a trigger for the following problem: In a student report database, student marks assessment is recorded. In such schema, create a trigger so that the total and average of specified marks are automatically inserted whenever a record is inserted. [2+3+5=10]
[b: 10 marks (2+3+5=10)]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 4, 5.


## CSE-301 · 2021 · Term final · Question 8

Marks allotted for Viva: 30. (Compulsory)

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 5.

Notes: This is a viva allocation, not a printed written question. No oral questions are supplied in the source.

## CSE-301 · 2022 · Term final · Question 1

a. Consider a database for the Real-Estate Agency. The database maintains data about the following information: [15]
[a: 15 marks]

Properties are rented by tenants. Each tenant is assigned a unique number by the agency. Data held about each tenant includes family name, first name, contact address, phone number and property rented. A tenant may rent more than one property at any given time.

Properties are owned by owners. Each property is assigned a unique building number. The agency only encourages a single owner for any of the properties it handles. The owner address and other information are recorded for each property. In addition, the lease period and bond are recorded for each property rented. An owner may own several properties. Regular property maintenance is also recorded. Maintenance costs are charged to the property owner.

Tenants pay accounts to the agency for each property they rent. These consist of date of payment, type of account and amount.

Now construct an Entity Relationship Diagram for the Real Estate Agency. Mention all assumptions that you make about mapping constraints.

b. Construct a Schema Diagram for the Real-Estate Agency that you have designed in Question 1(a). [15]
[b: 15 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 1.

Notes: Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity.

## CSE-301 · 2022 · Term final · Question 2

a. A concurrent schedule S for transactions T₁, T₂, T₃ and T₄ is given below. Using a precedence graph, determine whether the given schedule S is conflict serializable or not. [15]
[a: 15 marks]

Schedule S

| T₁ | T₂ | T₃ | T₄ |
| --- | --- | --- | --- |
|  |  |  | Read(A) |
|  | Read(A) |  |  |
|  |  | Read(A) |  |
| Write(B) |  |  |  |
|  | Write(A) |  |  |
|  |  | Read(B) |  |
|  | Write(B) |  |  |

b. Consider the following database, where the primary keys are underlined. Give an expression in relational algebra to express each of the following queries. [15]
[b: 15 marks]

```
Drivers(d_id [PK], d_name, gender, age)
Reserve(d_id [PK], c_id [PK], day [PK], cost)
Cars(c_id [PK], c_name, model, color, r_id)
Rental_Company(r_id [PK], r_name, revenue, rating)
Is_Member(d_id [PK], r_id [PK], join_date, member_type)
```

(i) Find the name of all drivers that are members of a rental company whose rating is greater than 7.

(ii) Find the rental company which has the largest number of members.

(iii) Update the members’ type to VIP for those drivers who were members of company ABC.

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 1, 2.

Notes: Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity.

## CSE-301 · 2022 · Term final · Question 3

a. “Cascadeless schedule is a serial schedule” — do you agree with this statement? Justify your answer with suitable examples. [12]
[a: 12 marks]

b. What are the differences between Sophisticated and Specialized users? [08]
[b: 8 marks]

c. “One limitation of the ER model is that it cannot express relationships among relationships.” How can this problem be solved? Explain with suitable examples. [10]
[c: 10 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 2.

Notes: Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity.

## CSE-301 · 2022 · Term final · Question 4

a. Which of the following two schedules (Schedule 1 and Schedule 2) is a recoverable schedule and why? Explain. [10]
[a: 10 marks]

Schedule 1

| T₁ | T₂ |
| --- | --- |
| read(A) |  |
| write(A) |  |
|  | read(A) |
|  | commit |
| write(A) |  |
| commit |  |

Schedule 2

| T₁ | T₂ |
| --- | --- |
| read(A) |  |
| write(A) |  |
|  | read(A) |
| write(A) |  |
| commit |  |
|  | commit |

b. Discuss the completeness constraint of specialization or generalization with suitable examples. [10]
[b: 10 marks]

c. What are the advantages of the three-tier database architecture over the two-tier architecture? [10]
[c: 10 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 2.

Notes: Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity.

## CSE-301 · 2022 · Term final · Question 5

a. Explain the distinction among superkey, candidate key and primary key with suitable examples. [10]
[a: 10 marks]

b. What is SQL injection? Give an example of how we can prevent it in JDBC or in any other language of your choice. [10]
[b: 10 marks]

c. When matching patterns in SQL for string operation, what are the matches for ‘___’ and ‘___*’? [05]
[c: 5 marks]

d. What is the benefit of creating an index? [05]
[d: 5 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 3.

Notes: Part c reproduces the underscore/asterisk patterns printed in the paper; it does not substitute the standard SQL wildcard %. Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity.

## CSE-301 · 2022 · Term final · Question 6

a. Why do we use foreign key constraints? What is the default behavior when a row in a table gets deleted, which is referred to by another table with a foreign key constraint? Can we change the default behavior for such cascading action? [10]
[a: 10 marks]

b. What is the difference between UNION and UNION ALL? [05]
[b: 5 marks]

c. Assume there is a view V, created with some (but not all) columns of a table T. There is a user U who has been granted access to V but not to T. Can that user query V? [05]
[c: 5 marks]

d. What is the difference between row-level and statement-level triggers? [10]
[d: 10 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 3.

Notes: Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity.

## CSE-301 · 2022 · Term final · Question 7

a. What is the difference between rank() and dense_rank() in aggregated function? [05]
[a: 5 marks]

b. Describe Boyce-Codd Normal Form (BCNF) and Third Normal Form (3NF). [10]
[b: 10 marks]

c. For the weather data below, write a query to find the city which has the second highest average temperature. [15]
[c: 15 marks]

| sensor_id | city | temperature |
| --- | --- | --- |
| 1 | Dhaka | 37 |
| 2 | Mumbai | 39 |
| 3 | Tokyo | 33 |
| 4 | Dubai | 42 |
| 5 | Mumbai | 38 |
| 6 | Tokyo | 32 |
| 7 | Paris | 27 |
| 8 | Hamburg | 26 |
| 9 | Seoul | 31 |

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 3.

Notes: Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity.

## CSE-301 · 2022 · Term final · Question 8

a. What is prefetching and data-caching for data servers/storage systems? [10]
[a: 10 marks]

b. In data mining, what are some common usages of regression? [10]
[b: 10 marks]

c. Consider the following Employee database where the primary keys are underlined. Give an expression in SQL for each of the following queries. [5+5=10]
[c: 10 marks (5+5=10)]

(i) Find the employee city with the lowest average salary.
[c(i): 5 marks]

(ii) Find employee name, salary, salary grade, and manager name for each employee, sorted by manager name, employee name.
[c(ii): 5 marks]

```
employee(emp_id [PK], emp_name, emp_city, emp_salary, emp_manager)
salary_grade(grade [PK], min_salary, max_salary)
```

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 3, 4.

Notes: Source filename: 2022. Printed examination heading: 2021 (July–August 2021). The archive uses the filename year for continuity. Part a (prefetching and data-caching) is struck through in the supplied scan. It is retained to include every printed prompt.

## CSE-301 · 2023 · Term final · Question 1

a. Analyze the scenario mentioned below and answer the questions that follow:
[a: 15 marks (8+7=15)]

i. A car insurance company maintains a database for its customers who may each own one or many cars. Each car and owner (customers) may be associated with zero to many recorded accidents. The insurance company maintains the following data:
[a(i): 8 marks]

1. Customer – customer_ID, Driving_License_No, Name, Address

2. Car – Registration_No, Make, Model, Year

3. Accident – Report_No, Location, Date

4. Amount paid for damage. Construct an ER Diagram for the Car Insurance Company.

ii. Propose a Schema for the above ER Diagram by constructing appropriate tables and clearly bringing out the relationships between them.
[a(ii): 7 marks]

b. Analyze the “Employee Schema” and construct an SQL query to identify departments with at least two SALESMEN in each grade. Return Department Name, Grade and Number of Employees. Support your answer with a logical explanation for the different steps of your query.
[b: 15 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 1.

Notes: The paper refers to Employee Schema and/or Sales Schema but does not supply those reference schemas in its three DBMS pages.

## CSE-301 · 2023 · Term final · Question 2

We know that a Database Management System (DBMS) refers to the technology for creating and managing databases. With that as a backdrop, answer the questions that follow:

a. List out the advantages of using the DBMS. [5]
[a: 5 marks]

b. Explain “Data Independence.” 5
[b: 5 marks]

c. Explain the “Three Tier Architecture.” Describe it with the help of a neat and labelled diagram.
[c: 10 marks]

d. List out the advantages of Normalisation. [5]
[d: 5 marks]

e. List out the criteria that need to be satisfied for a table to be in First Normal Form, Second Normal Form and Third Normal Form respectively.
[e: 5 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 1, 2.


## CSE-301 · 2023 · Term final · Question 3

Refer to the “Sales Schema” and answer the questions that follow:

a. Construct an SQL query to find those customers who are served by a salesperson and the salesperson earns commission in the range of 0.12 to 0.14 (Both inclusive) . Return cust_name as “Customer”, City as “City”, name of salesman as “Salesman” and commission as “Commission.”
[a: 8 marks]

b. Construct an SQL query to find all orders executed by the salesperson and ordered by the customer whose grade is greater than or equal to 200. Compute „purch_amt* commission‟ as “Commission_Amt”. Return ord_no, cust_name, commission as „Commission%‟ and calculated commission amount as „Commission_Amt.‟
[b: 8 marks]

c. Construct an SQL query to find those salespeople who generated orders for their customers but are not located in the same city. Return ord_no, cust_name, customer_id and salesman_id.
[c: 8 marks]

d. Construct an SQL query to locate the orders made by customers. Return order number and customer_name.
[d: 6 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 2.

Notes: The paper refers to Employee Schema and/or Sales Schema but does not supply those reference schemas in its three DBMS pages.

## CSE-301 · 2023 · Term final · Question 4

a. Consider the Exam Cell of an university. It records the marks that students get in different exams for different course offerings. Each student can take multiple course offerings and will require to take multiple exams for each course offering. The records maintained in the Exam Cell are as follows:
[a: 15 marks (8+7=15)]

1. Student – Student_ID, Name, Program

2. Course offering – Course_No, Semester, Year, Room_No, Timing

3. Exam – Exam_ID, Exam_Name, Place, time

4. Marks obtained by students in each exam.

i. Construct an ER diagram for the Exam Cell.
[a(i): 8 marks]

ii. Propose a Schema for the above ER diagram by constructing appropriate tables and clearly bringing out the relationships between them.
[a(ii): 7 marks]

b. Analyze the “Employee Schema” and construct an SQL query to find those employees of Grade 3 and 4 and work in the department of FINANCE or AUDIT and whose salary is more than the salary of ADELYN and experience is more than FRANK (That is, joined the office before FRANK). Return complete information about the employees entered by date on which hired. Support your answer with a logical explanation of the different steps of your query.
[b: 15 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 2, 3.

Notes: The paper refers to Employee Schema and/or Sales Schema but does not supply those reference schemas in its three DBMS pages.

## CSE-301 · 2023 · Term final · Question 5

a. “Schedules under Multiversion Timestamp Ordering protocol may not be possible under Timestamp Ordering Protocol” – Verify this statement using the schedule shown in Figure 5(a).
[a: 20 marks]

b. “Thomas write rule makes use of the view serializability by ignoring the obsolete write operations from the transactions that issue them” – Illustrate this statement with the help of a transaction schedule. Also explain why the obsolete write can be ignored with proper example.
[b: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 3.

Notes: Figure 5(a) is referenced in the question but is not present in the supplied DBMS paper. No replacement figure has been invented.

## CSE-301 · 2023 · Term final · Question 6

a. Describe the Multiple Granularity Scheme. Explain the purpose of introducing intention mode locks in this scheme. Also explain how the intension mode lock works.
[a: 12 marks]

b. Consider the transaction T4 and the database graph shown in Figure 6(b). Find out whether the transaction follows Graph-based protocol. State the advantages and disadvantages of this protocol as well.
[b: 10 marks]

c. Demonstrate the need for lock conversion in the two phase locking protocol using proper examples.
[c: 8 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 3.

Notes: Figure 6(b) is referenced in the question but is not present in the supplied DBMS paper. No replacement figure has been invented.

## CSE-301 · 2023 · Term final · Question 7

a. Deadlock is a potential evil associated with lock based protocol. Consider the partial schedule shown in figure 7(a). Find out whether the schedule has a deadlock using a wait-for graph. “One of the solutions to prevent starvation in deadlock recovery system is to never choose the oldest transaction in the deadlock set as the victim.” – justify this statement with proper example.
[a: 8 marks (4+4=8)]

b. Differentiate between the two deadlock prevention schemes – “Wound-Wait and Wait -Die” based on the number of rollbacks using proper schedules. Explain Whether starvation is possible under these two schemes.
[b: 10 marks]

c. Describe the ACID properties of transactions using a mock transaction.
[c: 12 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 3.

Notes: Figure 7(a) is referenced in the question but is not present in the supplied DBMS paper. No replacement figure has been invented.

## CSE-301 · 2023 · Term final · Question 8

a. Explain why bucket overflow occurs in hash file organization. Describe the open hashing and closed hashing scheme using proper examples.
[a: 10 marks]

b. Differentiate between B⁺ tree index file and B tree index file. [08]
[b: 8 marks]

c. Define the following terminologies:
[c: 12 marks]

i. Conflict serializability

ii. Recoverable schedule

iii. Non-clustering index

iv. Uniform and Random hash-function

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 3.


## CSE-301 · 2024 · Term final · Question 1

Analyse the schema given below and answer the questions that follow.

Table: Sales

| sale_id | product_id | quantity_sold | sale_date | total_price |
| --- | --- | --- | --- | --- |
| 1 | 101 | 5 | 2024-01-01 | 2500.00 |
| 2 | 102 | 3 | 2024-01-02 | 900.00 |
| 3 | 103 | 2 | 2024-01-02 | 60.00 |
| 4 | 104 | 4 | 2024-01-03 | 80.00 |
| 5 | 105 | 6 | 2024-01-03 | 90.00 |

Table: Products

| product_id | product_name | category | unit_price |
| --- | --- | --- | --- |
| 101 | Laptop | E1 | 500.00 |
| 102 | Smartphone | E2 | 300.00 |
| 103 | Headphones | E2 | 30.00 |
| 104 | Keyboard | E1 | 20.00 |
| 105 | Mouse | E1 | 15.00 |

a. Construct a query to calculate the total revenue generated from sales for each product CATEGORY. The output should have column headings CATEGORY and TOTAL_REVENUE. Explain the query you have constructed in NOT more than 50 words. [10]
[a: 10 marks]

b. Construct a query to list out the sales of products where the quantity sold is greater than the average quantity sold for all products. The output should have column headings SALE_ID, PRODUCT_NAME, UNIT_PRICE, QUANTITY_SOLD, SALE_DATE, TOTAL_PRICE. Explain the query you have constructed in NOT more than 50 words. [10]
[b: 10 marks]

c. Construct a query to list out the product_name, total price of that product and its percentage contribution towards total sale. Generate the list in decreasing order of the product’s percentage contribution. The output should have column headings PRODUCT_NAME, TOTAL_PRICE, PERCENTAGE_OF_TOTAL_SALES. Explain your query in NOT more than 50 words. [10]
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 1, 2.


## CSE-301 · 2024 · Term final · Question 2

A database management system stores data in such a way that it becomes easier to retrieve, manipulate and produce information. Keeping this in mind answer the questions that follow:

a. Explain what you understand by ACID properties in a DBMS. Make sure to name these properties, bring out the meaning of each property and also mention how the responsibilities for implementing these properties are managed.
[a: 8 marks]

b. With the help of a neat and labeled diagram explain the Three -tier architecture of a DBMS. Give a brief explanation for each of the three tiers clearly bringing out its requirements.
[b: 12 marks]

c. List out and briefly explain five advantages and five disadvantages of a DBMS.
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 2.


## CSE-301 · 2024 · Term final · Question 3

a. Relational Algebra is a widely used procedural query language. It collects instances of relations as inputs and gives occurrences of relations as outputs. Analyse the scheme given below and construct Relational Algebra expressions for the questions that follow:
[a: 15 marks]

branch (branch_name, branch_city, assets)

customer (customer_name, customer_street, customer_city)

account (account_number, branch_name, balance)

loan (loan_number, branch_name, amount)

depositor (customer_name, account_number)

borrower (customer_name, loan_number)

i) Find all loans above 2000.
[a(i): 3 marks]

ii) Find the loan number for each loan of an amount greater than 1500.
[a(ii): 3 marks]

iii) Find the names of all customers who have a loan, or an account, or both from the bank.
[a(iii): 3 marks]

iv) Find the names of all customers who have a loan AND an account at the bank.
[a(iv): 3 marks]

v) Find the names of all customers who have a loan at the “Gulshan” branch.
[a(v): 3 marks]

b. The relational model of a DBMS uses a collection of tables to represent both data and the relationships among these data. Keeping this in mind answer the questions that follow:-
[b: 15 marks]

i) What do you understand by CONSTRAINTS in a Relational Model?
[b(i): 3 marks]

ii) When are these constraints checked?
[b(ii): 2 marks]

iii) Explain any three TYPES of Constraints in Relational Database Model with examples.
[b(iii): 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 2, 3.


## CSE-301 · 2024 · Term final · Question 4

a. We know that Normalisation is the process of breaking down our data and storing them in different tables consistently. In view of the above, what are the conditions that must be satisfied for a relation to be in First Normal Form, Second Normal Form and Third Normal Form? Explain each with the help of examples. [15]
[a: 15 marks]

b. Study the Employees table given below which is in 1NF and answer the questions that follow:
[b: 15 marks]

| employee_id | name | job_code | job | state_code | home_state |
| --- | --- | --- | --- | --- | --- |
| E001 | Arif | J01 | Chef | 1204 | Dhaka |
| E001 | Arif | J02 | Waiter | 1204 | Dhaka |
| E002 | Deep | J02 | Waiter | 3101 | Sylhet |
| E002 | Deep | J03 | Guard | 3101 | Sylhet |
| E003 | Arif | J01 | Chef | 3101 | Sylhet |

(i) Normalise the above table to 2NF. Give suitable names to the newly created tables. Briefly justify your answer. [08]
[b(i): 8 marks]

(ii) Normalise the tables you have achieved in the previous step to 3NF. Give suitable names to the newly created tables. Briefly justify your answer. [07]
[b(ii): 7 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 3.


## CSE-301 · 2024 · Term final · Question 5

a. A concurrent schedule S with transactions T1,  T2, T3 and T4 are given below. By constructing a precedence graph, figure out whether the given schedule is conflict serializable.
[a: 15 marks]

Schedule S — Figure 5(a)

| T₁ | T₂ | T₃ | T₄ |
| --- | --- | --- | --- |
|  |  | Read(A) |  |
|  | Read(A) |  |  |
| Write(A) |  |  |  |
|  |  | Read(B) |  |
|  | Write(B) |  |  |
|  |  |  | Write(C) |
| Read(B) |  |  |  |
|  | Read(C) |  |  |
|  |  | Write(C) |  |
|  |  |  | Read(B) |

b. Discuss the “Consistency” and “Isolation”  properties of database system. Also, explain the “Shadow copy” scheme of the recovery management component of a database.
[b: 10 marks (4+6=10)]

c. “Every view serializable schedule is conflict serializable but every conflict serializable schedule is not view serializable” – Explain the statement with appropriate examples.
[c: 5 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 3, 4.


## CSE-301 · 2024 · Term final · Question 6

a. Discuss different “Deadlock Prevention Protocols”. To break the deadlock, what recovery actions need to be taken?
[a: 15 marks (10+5=15)]

b. In which situation, validation based protocol is best suited? Briefly explain the phases, timestamps for validation test and the conditions of validation based protocol.
[b: 10 marks]

c. “Strict two phase locking protocol always produces Recoverable and Cascadeless schedules”. – Justify the statement with necessary examples.
[c: 5 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 4.


## CSE-301 · 2024 · Term final · Question 7

a. The following  figure presents a B⁺ tree of order 5 (n=5). Perform deletion operation on the given tree in the following order: 20, 32, 11, 22, 21, 8, 27, 43 and 6.
[a: 15 marks]

Figure 7(a) — given tree, transcribed as a hierarchy:

```tree
Root [26]
├── Internal [8 | 18]
│   ├── Leaf [3 | 6]
│   ├── Leaf [8 | 11]
│   └── Leaf [18 | 20]
└── Internal [27 | 32]
    ├── Leaf [21 | 22]
    ├── Leaf [27 | 29]
    └── Leaf [32 | 43]
```

b. Define the concept of Hashing. Among the two types of hashing, which one do you think is better and why?
[b: 10 marks]

c. Differentiate between primary index and secondary index. [05]
[c: 5 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 4.

Notes: The root separator is printed as 26. This is retained exactly, even though the rightmost subtree begins with 21.

## CSE-301 · 2024 · Term final · Question 8

a. Define the terms “Cascading Rollback” and “Strict Schedule”. Also, explain their implications in the context of database transactions.
[a: 6 marks (3+3=6)]

b. “Every Cascadeless schedule is also recoverable ” – Justify this statement with appropriate example.
[b: 8 marks]

c. Discuss the steps involved in inserting file records into a dense index and provide relevant examples to illustrate your points.
[c: 10 marks]

d. During its execution, a transaction passes through several states until it finally commits or aborts. List three possible sequences of states through which a transaction may pass.
[d: 6 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 4.


## CSE-301 · 2025 · Term final · Question 1

A large university maintains records of its students, teachers courses and examinations. Initially these records were stored in separate paper files and later in simple spreadsheets. As the number of students and departments grew, problems such as data redundancy, inconsistency, difficulty in data retrieval and lack of security started to appear. Based on the scenario:

a. Define what a database is and explain its key characteristics. [5]
[a: 5 marks]

b. Describe the role of Database Management System (DBMS) in solving the issues mentioned in the scenario.
[b: 5 marks]

c. Compare the use of a DBMS with the traditional file based system the university initially used.
[c: 5 marks]

d. Discuss the advantages of using a DBMS in this case, focusing on data integrity, security, concurrency control, and ease of access in line with the ACID properties concepts for Transactions of University data.
[d: 7 marks]

e. Provide a justification for a suitable data model for this scenario comparing it with others and explain how an Entity-Relationship Diagram (ERD) may initiate the design for a strong university information system. You need to draw an ERD for further analysis.
[e: 8 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 1.


## CSE-301 · 2025 · Term final · Question 2

You are given the following database schema for an online bookstore:

• Books (BookID, Title, Author, Price, PublisherID)

• Publisher (PublisherID, PublisherName, Country)

• Customers (CustomerID, CustomerName, Email, City)

• Orders (OrderID, CustomerID, BookID, OrderDate, Quantity) Using the above schema, answer the following questions to demonstrate your understanding of basic SQL query construction:

a. Write an SQL query to display Title and Price of all books written by “Hafiz”.
[a: 6 marks]

b. Construct a query to list the names and emails of customers who live in “Dhaka”.
[b: 6 marks]

c. Write a query to display all books with their Title and Price, ordered by price in descending order.
[c: 6 marks]

d. Construct a query to display the CustomerName, Title of the book ordered, and the Quantity for all orders.
[d: 6 marks]

e. Construct a query to display the titles of books that are more expensive than the average price of all books.
[e: 6 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 1, 2.


## CSE-301 · 2025 · Term final · Question 3

A retail company maintains customers purchase information in a single table called Sales_Record, shown below:

Sales_Record (CustomerID, CustomerName, CustomerAddress, ProductID, ProductName, ProductCategory, Supplier Name, SupplierAddress, OrderID, OrderDate, Quantity, Price) As the company expands, several issues are noticed:

(i) Data redundancy

(ii) Update anomalies

(iii) Insertion anomalies

(iv) Deletion anomalies Based on the scenario, answer the followings:

a. Explain the concept of Normalization in database with its importance.
[a: 6 marks]

b. Compare among 1NF, 2NF, 3NF and BCNF.
[b: 6 marks]

c. Normalize the given sales record table step -by-step upto 3NF with their intermediate relations.
[c: 6 marks]

d. Illustrate how normalization resolves problem.
[d: 6 marks]

e. Identify 2 real world situations where normalization play role.
[e: 6 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 2.


## CSE-301 · 2025 · Term final · Question 4

A university database maintains following relation:

• Student (StudentID, StudentName, Department, Year)

• Course (CourseID, CourseName, Credits, Department)

• Enrollment (StudentID, CourseID, Grade)

• Faculty (FacultyID, FacultyName, Department) Using the above relational schema, answer the followings:

a. Explain the concepts of Relational Database with its key features, including relations, tuples, attributes, primary key and foreign key.
[a: 5 marks]

b. Define Relational Algebra and explain why it is important in relational database theory.
[b: 5 marks]

c. Write relational algebra expressions for the following queries:
[c: 20 marks (5×4=20)]

(i) Retrieve the names of all students who have enrolled in the course “Database”.
[c(i): 4 marks]

(ii) List the names of students who have received an “A” grade in any course.
[c(ii): 4 marks]

(iii) Find the names of all courses offered by “CSE” department.
[c(iii): 4 marks]

(iv) Retrieve the names of students along with the names of courses they are enrolled in.
[c(iv): 4 marks]

(v) Find the names of students who are enrolled in all courses offered by their departments.
[c(v): 4 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 2, 3.


## CSE-301 · 2025 · Term final · Question 5

a. Define “Shared lock” and “Exclusive lock”. Discuss their drawbacks with necessary examples.
[a: 10 marks]

b. In which situation validation based protocol is best suited? Briefly explain the phases, timestamps for validation test and the conditions of validation based protocol.
[b: 10 marks]

c. “Two phase locking protocol always creates a serial schedule”. Do you agree with this statement? Explain with proper examples.
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 3.


## CSE-301 · 2025 · Term final · Question 6

a. A concurrent schedule S with transactions T₁, T₂ and T₃ is given below. Determine whether schedule S is conflict serializable or view serializable. Show the steps clearly. [15]
[a: 15 marks]

Schedule S — Figure 6(a)

| T₁ | T₂ | T₃ |
| --- | --- | --- |
| Read(A) |  |  |
|  | Read(B) |  |
| Write(A) |  |  |
|  |  | Write(A) |
|  | Read(A) |  |
| Read(B) |  |  |
|  |  | Read(C) |
| Write(C) |  | Write(C) |
|  | Read(C) |  |
|  | Write(C) |  |

b. “Strict 2PL protocol always produces Recoverable and Cascadeless schedule.” Justify the statement with appropriate examples. [10]
[b: 10 marks]

c. Discuss the trade-off between dense index and sparse index. [5]
[c: 5 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 3.

Notes: T₁ and T₃ both have Write(C) in the same printed row. The row is preserved without imposing an order absent from the source.

## CSE-301 · 2025 · Term final · Question 7

a. A B⁺ tree of order 5 (n=5) stores the following 14 record keys, inserted in this order: 7, 10, 1, 23, 5, 15, 17, 9, 11, 39, 35, 8, 40, 25 Construct the resultant B⁺ tree with the keys given above.
[a: 15 marks]

b. Discuss the steps involved in inserting file records into a dense index and provide relevant examples to illustrate your point.
[b: 10 marks]

c. Differentiate between static hashing and dynamic hashing. [5]
[c: 5 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 3.


## CSE-301 · 2025 · Term final · Question 8

a. Discuss the different Deadlock Prevention Protocols, highlighting their principles, advantages, and limitations with examples.
[a: 10 marks]

b. Write short note on the following concepts: (any two)
[b: 10 marks (5×2=10)]

(i) Cascading Roll back
[b(i): 5 marks]

(ii) Starvation
[b(ii): 5 marks]

(iii) Lock Point
[b(iii): 5 marks]

c. Explain the procedure of finding a search key value K in a B⁺ tree. Also discuss the advantages of B⁺ tree over Binary tree.
[c: 10 marks (5+5=10)]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 3.

Notes: Part (b) assigns 5 marks per short note; answer any two of the three options (10 total).

## CSE-301 · 2026 · Class test 3 · Question 1

3NF vs. BCNF — University Course Assignment

Consider the relation used by a university to record course sections:

Assign-Schema(StudentID, CourseID, InstructorID, Room)

Business rules: A student can take many courses. An instructor teaches only one fixed course, always in one fixed room. The following functional dependencies hold on the Assign-Schema:

F = {(StudentID, CourseID) → InstructorID, InstructorID → CourseID, InstructorID → Room}

(a) Find all Candidate Keys of the Assign-Schema.
[a: shared 15-mark total]

(b) Check each FD against the Superkey rule. State whether the Assign-Schema is in 3NF and whether it is in BCNF, justifying with the formal definitions.
[b: shared 15-mark total]

(c) Consider the following instance of Assign-Schema:
[c: shared 15-mark total]

| StudentID | CourseID | InstructorID | Room |
| --- | --- | --- | --- |
| S01 | CSE301 | I01 | Room101 |
| S02 | CSE301 | I01 | Room101 |
| S03 | CSE301 | I01 | Room101 |
| S04 | CSE302 | I02 | Room102 |

Explain what information is unnecessarily repeated here and describe one resulting update anomaly. Then decompose the Assign-Schema into BCNF relations, stating each schema and its keys.

(d) Is your decomposition dependency-preserving for (StudentID, CourseID) → InstructorID? Justify using closures, and briefly explain what this implies for choosing BCNF vs. 3NF here.
[d: shared 15-mark total]

(e) Compare between BCNF and 3NF. Discuss how to overcome the limitations of these two forms of normalization.
[e: shared 15-mark total]

Hints and Guideline: Answers should connect each part’s reasoning (keys → normal form → redundancy → decomposition → dependency preservation), not just state definitions.

Total: 15 marks.
Source: Dbms ct mid question.pdf, pages 1.

Notes: The source assigns 15 marks to the whole question, without individual allocations for parts (a)–(e).

## CSE-301 · 2026 · Class test 3 · Question 2

Write SQL for creating a trigger called “overdraft-trigger” for the following situation:

Suppose that, instead of allowing negative account balances, the bank deals with overdrafts by setting the account balance to zero and creating a loan in the amount of the overdraft. The bank gives this loan a loan number identical to the account number of the overdrawn account. For this example, the condition for executing the trigger is an update to the account relation that results in a negative balance value.

Total: 5 marks.
Source: Dbms ct mid question.pdf, pages 1.


## CSE-301 · 2026 · Class test 3 · Group B · Question 1

Compare between Binary Trees and Adel’son-Vel’skii and Landis (AVL) Trees for indexing.

A B-tree of order 3 contains 14 keys of records. The keys of the records are 1, 2, 5, 7, 8, 10, 12, 13, 14, 18, 19, 21, 22 and 25. Draw the tree. Hints: root has key of record 12 and two non-terminal nodes have keys of records (5, 8) and (18, 22) respectively.

Insert new keys of records 16 and 4 one after another in the tree. Draw diagrams only; no explanation is required. [04+03+04=11]

Total: 11 marks.
Source: Dbms ct mid question.pdf, pages 2.

Notes: Printed heading: Class Test 3, Group B. A handwritten “CT=4” annotation is not used as the assessment label.

## CSE-301 · 2026 · Class test 3 · Group B · Question 2

“Every view serializable schedule is also conflict serializable, but there are conflict serializable schedules that are not view serializable.” Do you agree with this statement? Why? Explain with an example.

“Blind writes appear in any view-serializable schedule that is not conflict-serializable.” Justify this statement with an example. [04+05=09]

Total: 9 marks.
Source: Dbms ct mid question.pdf, pages 2.


## CSE-301 · 2026 · Class test 2 · Question 1

A database schema, along with primary key and foreign key dependencies, can be depicted pictorially by schema diagrams. Figure 1 shows the schema diagram for a banking enterprise.

Figure 1 — schema transcribed as text; [PK] identifies underlined primary keys, → identifies foreign-key references:

```
branch(branch-name [PK], branch-city, assets)
account(account-number [PK], branch-name → branch.branch-name, balance)
depositor(customer-name [PK] → customer.customer-name,
          account-number [PK] → account.account-number)
customer(customer-name [PK], customer-street, customer-city)
loan(loan-number [PK], branch-name → branch.branch-name, amount)
borrower(customer-name [PK] → customer.customer-name,
         loan-number [PK] → loan.loan-number)
```

a. Considering the above banking schema, briefly explain the Division (÷) Operation in relational algebra. State the type of query for which the division operation is particularly useful. Using the banking database schema, write a relational algebra expression to find the names of all customers who have an account at every branch located in Brooklyn. Explain why the Division operation is appropriate for this query. [10]
[a: 10 marks]

b. Considering the above banking schema, discuss the concept of Views. Write down the SQL statement for creating a View. Create a view consisting of branch names and the names of customers who have either an account or a loan at that branch. Assume that we want this view to be called all-customer. Using the view all-customer, find all customers of the Mirpur Branch. [10]
[b: 10 marks]

Total: 20 marks.
Source: Dbms ct mid question.pdf, pages 3.


## CSE-301 · 2026 · Midterm 1 · Question 1

The Scenario (read carefully)

City Care General Hospital wants a database for its core operations. Read the description below and design it — nothing here is purely decorative; every sentence contains something you are expected to model.

The hospital employs staff, each with a unique employee ID, a full name (first and last name), one or more contact phone numbers, and a salary. Every employee is either a doctor, for whom the hospital additionally records a specialization (e.g., Cardiology), or a nurse, for whom it records a shift (Morning/Evening/Night). The remaining employees are administrative staff, for whom the hospital records their designation (e.g., Accountant, Receptionist, Store Manager). A person cannot simultaneously be a doctor and a nurse, but every doctor, nurse, and administrative staff member is first and foremost an employee of the hospital, and shares all the general employee information described above. No employee is in two or more groups.

For emergency-contact purposes, the hospital also records each employee’s dependents — such as a spouse or child. A dependent has no existence of its own in the records; it is only ever known through the employee it belongs to, and the hospital only needs a dependent’s name and relationship to the employee (e.g., spouse, son).

Some doctors are still in training and are supervised by a senior doctor. The hospital wants to record which senior doctor supervises which junior doctor(s), along with the date supervision began. A senior doctor may supervise several junior doctors, but each junior doctor has only one supervisor.

Patients are registered with a unique patient ID, name, and date of birth. The hospital does not store a patient’s age directly — it should always be calculated from the date of birth on file.

When a doctor treats a patient, the hospital records the diagnosis and the date of that consultation. A patient is typically treated by more than one doctor, and a doctor treats many patients.

The hospital also tracks medicine prescriptions. When a doctor prescribes a medicine to a patient, the hospital must record the dosage, and the date the prescription was written. Note that the same doctor may prescribe the same medicine to the same patient again on a different date for a different reason — so knowing only “this doctor prescribes this medicine” or only “this patient takes this medicine” is not enough; the fact connects doctor, patient, and medicine together all at once.

Finally, some treatments are submitted to an insurance company for reimbursement. When this happens, the insurance company is not approving a doctor or a patient by themselves — it is approving one specific instance of a doctor having treated a patient. For each such approval, the hospital records a claim ID and the amount approved. Not every treatment is submitted for approval.

Task A — E-R Diagram
[Task A: shared 30-mark total]

Draw a complete E-R diagram for the scenario above. Your diagram will be marked on whether it correctly and clearly shows (if applicable):

1. Strong and weak entity keys/partial keys identified.

2. Correct identification and notation of composite, multivalued, and derived attributes.

3. A generalization/specialization hierarchy with the correct constraint (disjoint/overlapping, total/partial).

4. A recursive relationship with both roles clearly labeled.

5. A ternary relationship with its descriptive attribute(s) attached correctly.

6. An aggregation, used where a relationship itself needs to participate in another relationship.

Task B — Relational Schema Diagram
[Task B: shared 30-mark total]

Starting from your own E-R diagram, map it to a relational schema. Show every relation with its attributes, primary key underlined, and foreign keys marked. Pay particular attention to how you map the weak entity, the specialization, the recursive relationship, the ternary relationship, and the aggregation — these carry most of the marks.

Task C — Assumptions
[Task C: shared 30-mark total]

List, in short bullet points, any assumption you made to resolve ambiguity in the scenario.

Total: 30 marks.
Source: Dbms ct mid question.pdf, pages 4, 5.

Notes: This midterm prints 30 marks overall but does not assign separate marks to Tasks A, B and C.

## CSE-301 · 2026 · Midterm 1 · Group B · Question 1

The Scenario (Read and do Brain Storming carefully: 10 minutes)

Stitch Craft Apparel Ltd., a readymade garments manufacturer, wants a database for its core operations. Read the description below and design it — nothing here is purely decorative; every sentence contains something you are expected to model.

The company employs staff, each with a unique employee ID, a full name (first and last name), one or more contact phone numbers, a date of joining, and a salary. Every employee is either a tailor, for whom the company additionally records a machine specialization (e.g., Overlock, Flatlock), or a cutting master, for whom it records an area of specialization (e.g., Bulk Cutting, Pattern Cutting). The remaining employees are administrative staff, for whom the company records their designation (e.g., Accountant, Store Keeper). A person cannot simultaneously be a tailor and a cutting master, but every tailor, cutting master, and administrative staff member is first and foremost an employee, and shares all the general employee information above. No employee is in two or more groups. The company does not store how long someone has worked there directly — it should always be calculated from their date of joining.

Skill is passed down on the shop floor: an experienced tailor is often assigned to mentor a newly hired tailor during their first few months. The company wants to record which tailor mentors which other tailor(s), along with the date the mentorship began. One tailor may mentor several others, but a given tailor is mentored by only one person at a time.

Each customer order has a unique order ID and an order date. An order is never for just one thing — it always lists one or more line items, and a line item has no meaning or identity outside the order it belongs to (it is only ever referred to as “item 2 of order 1057”). Each line item specifies a size and a quantity.

The company stocks fabric, each identified by a fabric ID and a fabric name. When a cutting master cuts a specific fabric for a specific order line item, the company records the quantity cut (in meters) and the date it was cut. The same cutting master may cut the same fabric for the same line item again on a different date for a different batch, so the fact ties the cutting master, the fabric, and the order line item together all at once.

Tailors then stitch the cut pieces against specific order line items, and for each such instance the company records the quantity stitched and the date assigned. Not every stitching assignment is checked, but some are audited by external buyers (the brands the garments are made for), each identified by a buyer ID and name. When this happens, the buyer is not auditing a tailor or an order item individually — it is reviewing one specific instance of a particular tailor having stitched a particular line item. For each such audit, the company records an audit ID, the result (Pass/Fail), and the audit date.

Task A — E-R Diagram (18 marks; 25 minutes)
[Task A: 18 marks]

Draw a complete E-R diagram for the scenario above. Your diagram will be marked on whether it correctly and clearly shows (if applicable):

1. Strong and weak entity sets, with primary keys/partial keys identified.

2. Correct identification and notation of composite, multivalued, and derived attributes.

3. A generalization/specialization hierarchy with the correct constraint (disjoint/overlapping, total/partial) across all three employee types.

4. A recursive relationship with both roles clearly labeled.

5. A ternary relationship with its descriptive attribute(s) attached correctly.

6. An aggregation, used where a relationship itself needs to participate in another relationship.

Task B — Relational Schema Diagram (10 marks; 12 minutes)
[Task B: 10 marks]

Starting from your own E-R diagram, map it to a relational schema. Show every relation with its attributes, primary key underlined, and foreign keys marked. Pay particular attention to how you map the weak entity, the specialization, the recursive relationship, the ternary relationship, and the aggregation — these carry most of the marks.

Task C — Assumptions (2 marks; 3 minutes)
[Task C: 2 marks]

List, in short bullet points, any assumption you made to resolve ambiguity in the scenario.

Total: 30 marks.
Source: Dbms ct mid question.pdf, pages 6, 7.


## CSE-301 · 2026 · Class test 1 · Question 1

A modern DBMS is designed as a layered and modular software system to achieve data independence, security, concurrency, and efficient query processing. Assume you are designing the architecture of a university database management system that serves students, faculty members, application developers, and database administrators.

Using a clearly labeled “Database System Structural” diagram, explain how the major functional components of a DBMS cooperate to execute a database request. Furthermore, evaluate how different classes of users access the database through appropriate user interfaces and describe the end-to-end processing of a database query from user submission to data retrieval. Your explanation should include:

• The roles and interactions of the Storage Manager, Query Processor, and Disk Storage, and explain how each component contributes to efficient database operation.

• Explain the functions of each internal component of the Storage Manager.

• The functions of the Query Processor and how it processes SQL queries.

• Discuss the purpose of the data files, data dictionary, and indices.

• Compare the interactions of different types of database users with the DBMS through their respective interfaces.

• Demonstrate the complete data flow during the execution of a typical SQL query.

Total: 20 marks.
Source: Dbms ct mid question.pdf, pages 8.

Notes: No date is printed on Class Test 1. It is assigned to 2026 from the user’s description and its inclusion with the dated 2026 assessments.

## CSE-303 · 2016 · Term final · Question 1

a. Which stage in a compiler is most likely to save line numbers of identifiers in the symbol table? Is any other stage suitable for this purpose? Explain clearly.
[a: 11 marks (5+6=11)]

b. What is “panic mode” recovery in compiler?
[b: 7 marks]

c. Formulate regular definition for “number” tokens in a certain programming language. The numbers in this language consist of three parts in the same sequence as detailed below:
Integer part: Consists of any non-zero number of digits from 0 to 9. Cannot start with a 0, unless this 0 is the only digit in this part.
Decimal part: This part is optional. Consists of decimal point followed by any non-zero number of digits from 0 to 9. Cannot end with a 0. Thus, only a single zero in this part is not permitted.
Exponent part: This part is optional. Consists of character 'E' followed by an optional minus (-) sign, which is followed by any non-zero number of digits from 0 to 9.
A few valid numbers are: 123, 123.456, 0.456, 123.456E789, 123.456E-789, 123E789, 123E000.
A few invalid numbers are: 0123, 123.0, 123.456E+789
[c: 17 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 5.


## CSE-303 · 2016 · Term final · Question 2

a. What are sentinels? Describe where sentinels are used in buffer pairs in lexical analysis. How does the use of sentinels speed up the input process?
[a: 13 marks (3+3+7=13)]

b. “The token name influences parsing decisions, while the attribute value influences translation of token after the parse” — explain clearly with necessary examples.
[b: 7 marks]

c. The following table shows a subset of the unary and binary operators used by the C++ language. Corresponding token names are also shown in the table. The attribute value column has been intentionally left blank. Fill up the attribute value column where necessary. Draw a transition diagram which recognizes the tokens.
| Lexeme | Token Name | Attribute Value |
| --- | --- | --- |
| > | relop | |
| < | relop | |
| >= | relop | |
| <= | relop | |
| && | logop | |
| ~ | bitop | |
| & | bitop | |
| ^ | bitop | |
| << | bitop | |
| >> | bitop | |
[c: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 5, 6.


## CSE-303 · 2016 · Term final · Question 3

a. Eliminate left recursion from the following grammar:
```
S → Sc | Ta | b
T → Tc | Sd | d
U → Ua | Td | Sb | b
```
[a: 20 marks]

b. Comment with reasoning on whether the following grammars are LL(1) or not.
```
i) S → ABc, A → a | ε, B → b | ε
ii) S → ACB, A → a | B | ε, B → b | ε, C → c | ε
iii) S → X, X → aXBA | bAXB | c, A → a, B → a | ε
iv) A → C | ε, C → CE, C → ε, E → ε
v) S → S(S) | ε
```
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 6.


## CSE-303 · 2016 · Term final · Question 4

a. Answer the following questions for predictive parsing.
i) During construction of a parsing table M, for each production rule A → α of the grammar, if ε is in FIRST(α), we add A → α to M[A, b], for each terminal b in FOLLOW(A). Why? Explain clearly in light of the parsing mechanism.
ii) During a parsing, if w is the input that has been matched so far, and S is the start symbol for the corresponding grammar, with S*⇒ wαβγ, what will be the stack contents? Also comment on the nature of symbols in w and stack contents regarding being terminals/non-terminals.
iii) During parsing, if the input pointer is pointing to the symbol a, and the top stack symbol is X, with the entry M[X,a] being X → UVW, explain how the stack contents will be altered. Why?
[a: 20 marks (10+5+5=20)]

b. Left factor this grammar:
```
S → T : S | ε
T → UR
R → *T | ε
U → x | y | [S]
```
Hence, find the FIRST and FOLLOW sets for each non-terminal in the grammar obtained.
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 6.


## CSE-303 · 2016 · Term final · Question 5

a. Define S-attributed and L-attributed syntax directed definitions (SDD). Elaborate on each with necessary examples and counter-examples. How are attributes evaluated in each case?
[a: 20 marks]

b. Present the S-attributed syntax directed definition which constructs syntax trees for a simple expression grammar involving only the binary operators + and -. Then show the annotated parse tree and syntax tree for α − 4 + C.
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 7.

Notes: Part (b) expression uses printed Greek α and uppercase C: α − 4 + C.

## CSE-303 · 2016 · Term final · Question 6

a. Present the SDD that takes a simple declaration consisting of a basic type followed by a list of identifiers and stores the identifier types in a symbol table. Why is it imperative that inherited attributes are needed for this SDD? What is the deficiency (if any) of the SDD you have presented?
[a: 20 marks]

b. Show how the SDD in Question 6(a) will work on the declaration, float id1, id2, id3.
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 7.


## CSE-303 · 2016 · Term final · Question 7

a. Draw syntax tree for the expression: a + (a * a − a) * (a * a − a) * (a * a + a) − a. And hence, convert the syntax tree into a DAG. Consider usual precedence and associativity of operators.
[a: 15 marks]

b. Use value-number method to store the DAG in Question 7(a), in an array of records. Then, represent the same DAG using three address code. How can we speed up this value-number method construction? Explain.
[b: 20 marks (5+5+10=20)]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 7.


## CSE-303 · 2016 · Term final · Question 8

a. Present the syntax directed translation (SDT) scheme that computes types and their widths for basic and array types. Hence, show the parse tree for the type int [2][3].
[a: 20 marks]

b. Find out the three address code for the statement, n = g(f(a), a, b[i], a*2). Assume any missing information within reasonable limits. Do not use any unnecessary instruction.
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2016.pdf, pages 7.


## CSE-303 · 2017 · Term final · Question 1

a. Explain in detail the following statements.
i) “Java language processors combine compilation and interpretation”.
ii) “The front end of a compiler is concerned about the source language, while back end of compiler is concerned about the target machine. The intermediate representation, between the two, is concerned neither about the source language nor about the target language”.
[a: 15 marks (5+10=15)]

b. Explain clearly, with necessary justifications, the lexical errors (if any) that will occur for each of the following C/C++ statements. You need to consider both the cases where the lexical analyzer uses and does not use panic mode recovery strategy. Then provide the list of tokens that may be generated in both the cases. You may use your own token names.
```
i) int float double int float float;
ii) ; ) ( } { ) ) ) ) ) cse dhaka mist
iii) int 12345 cse, dhaka;
```
[b: 20 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 5.


## CSE-303 · 2017 · Term final · Question 2

a. After you learned defining tokens using regular definitions, some of your friends in haste, come up with the following definitions for identifiers and numbers:
```
i) id → letter (letter*|digit*)
ii) id → letter (letter digit)*
iii) id → letter* (letter|digit)*
iv) number → digit+ (. digit+) (E[+-]? digit+)?
v) number → digit+ (. digit)? (E+-? digit+)?
```
All of the above definitions are incorrect. Explain in each case what is wrong with the definition. Also for each case, show,
i) One example string which matches with both the correct and incorrect definition,
ii) One example string which is rejected by the correct definition but matches the incorrect definition.
If in some case any of the above mentioned examples is not possible you need to point out that as well. You may assume that letter and digit have been correctly defined.
[a: 20 marks]

b. Write a Yacc plus Lex program which calculates the value of an arithmetic expression which involves single line inputs only. The arithmetic expression comprises of numbers with decimal points, addition, subtraction, multiplication and division operators. Parentheses can be used in the expression. The expressions may also contain the sin, cos and tan trigonometric functions.
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 5, 6.


## CSE-303 · 2017 · Term final · Question 3

a. Explain in detail the relative advantages and disadvantages of having individual and class tokens for the operators.
[a: 10 marks]

b. Comment with reasoning on whether the following grammar is LL(1) or not.
```
S → ABc, A → a | ε, B → b | ε
```
[b: 5 marks]

c. Eliminate left-recursion from the following grammar:
```
S → Sc | Ta | Ub | b
T → Tc | Sd | d
U → Ua | Td | Sb | b
```
[c: 20 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 6.


## CSE-303 · 2017 · Term final · Question 4

a. Answer the following questions for predictive parsing.
i) During construction of a parsing table M, for each production table A → α of the grammar, if ε is in FIRST(α), we add A → α to M[A, b], for each terminal b is FOLLOW(A). Why? Explain clearly in light of the parsing mechanism.
ii) What does multiple entries in a parsing table mean? Is the corresponding grammar LL(1)?
iii) During parsing, of the input pointer is pointing to the symbol a, and the top stack symbol is X, with the entry M[X, a] being X → UVW, explain how the stack contents will be altered. Why?
[a: 20 marks (7+6+7=20)]

b. Construct procedure based recursive – descent parsers staring with each of the following grammars:
```
i) S → S(S)S | ε
ii) S → 0S1 | 01
```
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 6.

Notes: Source wording “production table”, “b is FOLLOW(A)”, “of the input pointer”, and “staring” retained.

## CSE-303 · 2017 · Term final · Question 5

a. Present the S-attributed syntax directed definition (SDD) which constructs syntax trees for a simple expression grammar involving only the binary operators + and -. Then show the annotated parse tree and syntax tree for a−4+c.
[a: 15 marks]

b. Show how the SDD in Question 5(a) changes when left recursion is eliminated from the corresponding grammar. Why is it imperative that we use inherited attributes here? Show the dependency graph for a−4+c.
[b: 20 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 7.


## CSE-303 · 2017 · Term final · Question 6

a. Construct syntax tree and hence DAG for the expression,
```
((x + y) − ((x + y) * (x − y))) + ((x + y) * (x − y).
```
Then store the DAG using value number method. Assume usual precedence and associativity of operations.
[a: 15 marks]

b. Find out the three address code for the statement, n = g(f(a), a, a * 2). Assume any missing information within reasonable limits. Do not use any unnecessary instruction.
[b: 10 marks]

c. Explain how control flow statements are handled in SSA.
[c: 10 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 7.

Notes: The printed expression in part (a) is missing closing parentheses at the end; reproduced as printed.

## CSE-303 · 2017 · Term final · Question 7

a. Describe the contents of an activation record with necessary figures.
[a: 15 marks]

b. We have the given C program and accompanying functions as shown in code1 and code2. For a certain situation, the sequence of function calls and returns are as given. Now for the scenario when the call is in line 6,
i) Draw the activation tree.
ii) Sketch the activation records.
Code1: C program for Question 7(b).
```
/* main.c */
#include <stdio.h>
void main() {
  int i, j, k;
  float a[20];
  /* .......... */
  i = fone(a[5], a[15]);
  /* .......... */
  i = fone(a[5], a[15]);
  j = ftwo(i, k);
  printf("The results, i = %d, j = %d", i, j);
}
/* fone.c */
int fone(m1, m2) {
  int f1, ii, jj = 0;
  for (ii = 1; ii <= m2; ii++)
  {
    jj = ftwo(m1);
  }
  f1 = jj;
  return f1;
}
/* ftwo.c */
float ftwo(n) {
  float n1, n2;
  n2 = n / 2;
  if (n2 > 10)
    n1 = ftwo(n2);
  return n1;
}
```
Code2: Sequence of function calls and returns for Question 7(b).
```
1 enter main()
2   enter fone(10,5)
3   leave fone(10,5)
4   enter fone(30,1)
5     enter ftwo(30)
6       enter ftwo(15)
7       leave ftwo(15)
8     leave ftwo(30)
9   leave fone(30,1)
10 leave main()
```
[b: 20 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 7, 8, 9.

Notes: Code1 preserves the source’s repeated fone assignment, two-argument call ftwo(i,k), old-style function definitions and uninitialized n1 path. Dotted comments represent source ellipses.

## CSE-303 · 2017 · Term final · Question 8

a. For the given code as shown in code 3, generate machine code for stack allocation sizes of activation records for procedures p, q, and r are 20, 80 and 40 bytes respectively. Code for these procedures start at addresses 1000, 2000, and 4000 respectively. Each action requires 20 bytes. Each word in 4 bytes. Stack starts at address 8000.
Code3: Code for Question 8(a).
```
// Code for p
action1
call q
action2
call q
halt
// Code for q
action3
call q
call r
action4
call r
action5
call r
action6
return
// Code for r
call r
action7
action8
call r
return
```
[a: 20 marks]

b. For the given code as shown in code 4, identify the basic blocks. And hence draw the flow graph.
Code4: Code for Question 8(b).
```
1) i = 1
2) j = 1
3) t1 = 10 * i
4) t2 = t1 + j
5) t3 = 8 * t2
6) t4 = t3 − 88
7) a[t4] = 0.0
8) j = j + 1
9) if j <= 10 goto (3)
10) i = i + 1
11) if i <= 10 goto (2)
12) i = 1
13) t5 = i − 1
14) t6 = 88 * t5
15) a[t6] = 1.0
16) i = i + 1
17) if i <= 10 goto (13)
```
[b: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2017.pdf, pages 7, 9.

Notes: Source wording “Each word in 4 bytes” retained.

## CSE-303 · 2018 · Term final · Question 1

a. What is top-down parsing? Write recursive procedures for top-down parsing for the following grammar:
```
S → cAd
A → ab | a
```
[a: 12 marks]

b. Briefly explain how the order in which alternates are tried can affect the language accepted for top-down backtracking parsers with an illustrative example.
[b: 8 marks]

c. What is indirect left-recursion? Show that the following grammar is indirectly left recursive. Also, eliminate left-recursion entirely from this grammar.
```
A → Bxy | x
B → CD
C → A | a
D → b
```
[c: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 5.


## CSE-303 · 2018 · Term final · Question 2

a. What is left-factoring? Left-factor the following grammar:
```
S → iCtS | iCtSeS | a
C → b
```
[a: 8 marks]

b. Briefly describe the model of a non-recursive predictive parser and the predictive parsing program.
[b: 12 marks]

c. Consider the following grammar and the corresponding parsing table:
```
E → TE′
E′ → +TE′ | ε
T → FT′
T′ → *FT′ | ε
F → (E) | id
```
| | id | + | * | ( | ) | $ |
| --- | --- | --- | --- | --- | --- | --- |
| E | E → TE′ | | | E → TE′ | | |
| E′ | | E′ → +TE′ | | | E′ → ε | E′ → ε |
| T | T → FT′ | | | T → FT′ | | |
| T′ | | T′ → ε | T′ → *FT′ | | T′ → ε | T′ → ε |
| F | F → id | | | F → (E) | | |
With input id + id * id, show the sequence of moves by the predictive parser.
[c: 15 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 5.


## CSE-303 · 2018 · Term final · Question 3

a. Briefly describe different parsers of a compiler with appropriate examples for each phase.
[a: 16 marks]

b. What is the difference between an interpreter and a compiler? What is a hybrid compiler?
[b: 7 marks]

c. Write the rules for constructing regular expressions over an alphabet.
[c: 8 marks]

d. What is the regular expression for denoting all strings whose length is not two? Assume a binary alphabet.
[d: 4 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 6.

Notes: Part (a) says “parsers” in the source, despite the reference to “each phase”; retained.

## CSE-303 · 2018 · Term final · Question 4

a. Formulate regular definition for “number” tokens in a certain programming language. The numbers in the language consists of three parts in the same sequence as detailed below:
Integer part: Consists of any non-zero number of digits from 0 to 9. Cannot start with a zero, unless this zero is the only digit in this part.
Decimal part: This part is optional. Consists of decimal points followed by any non-zero number of digits from 0 to 9. Cannot end with a 0. Thus only a single zero in this part is not permitted.
Exponent part: This part is optional. Consists of character 'E' followed by an optional minus (-) sign, which is followed by any non-zero number of digits from 0 to 9.
A few valid numbers are: 123, 123.456, 0.456, 123.456E789, 123.456E-789, 123E789, 123E000.
A few invalid numbers are: 0123, 123.0, 123.456E+789
[a: 17 marks]

b. What is the role of a transition diagram in the construction of a lexical analyzer? Show the transition diagram for the relational operators: <, <=, =, <>, >, >=.
[b: 10 marks]

c. What are sentinels? Describe where sentinels are used in buffer pairs in lexical analysis.
[c: 8 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 6.


## CSE-303 · 2018 · Term final · Question 5

a. Define SDD. Define S-attributed and L-attributed syntax directed definitions (SDD) with necessary examples. Determine whether following SDD is S-attributed or L-attributed or not. Justify your answer.
| Production | Semantic rule |
| --- | --- |
| X → ABCDE | C.c = func(X.x, A.a, E.e) |
[a: 20 marks (3+6+6+5=20)]

b. For the following grammar find out the parse tree for an input sentence “132”. Then from the given SDD, annotate the parse tree by calculating the values of the attributes at the various nodes. Then construct the dependency graph for the same input sentence “132”. Carry out topological sorting of this graph.
| Production | Semantic rule |
| --- | --- |
| S → AB | S.x = A.x + B.z |
| A → A₁C | A.x = A.z + C.z; A.z = A₁.x + 10; C.z = A.z + A₁.x + C.x |
| A → F | A.x = 1 + F.g |
| B → F | B.x = 2 + F.g; B.z = B.x + 1 |
| C → F | C.x = 3 × F.g |
| F → 1 | F.g = 1 |
| F → 2 | F.g = 2 |
| F → 3 | F.g = 3 |
[b: 15 marks (5+5+5=15)]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 6, 7.


## CSE-303 · 2018 · Term final · Question 6

a. Find out the three address code, quadruples and triples representation for the following expression:
```
x = y * z * (p/b) + a + d − q
```
[a: 15 marks]

b. Construct the syntax tree and DAG for the following expression:
```
b = g * h − g/h − c * e − c * e
```
[b: 10 marks (5+5=10)]

c. Define the value number method for constructing DAG’s with necessary examples.
[c: 10 marks]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 7.

Notes: Fractions p over b and g over h in the source are represented as (p/b) and g/h.

## CSE-303 · 2018 · Term final · Question 7

a. Define activation record. Why activation record is used? Describe the contents of an activation record with necessary figures and examples.
[a: 15 marks (2+3+10=15)]

b. Explain how control flow statements are handled in SSA.
[b: 10 marks]

c. Describe any two characteristics of peephole optimization with necessary examples.
[c: 10 marks (5+5=10)]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 7.


## CSE-303 · 2018 · Term final · Question 8

a. For the following code, generate machine code using static allocation for procedures a, b and c. Assume that code for procedures a, b and c start at the addresses 100, 300 and 500 respectively. Also assume that activation records for procedures a, b and c start at the addresses 700, 900 and 1100 respectively. Further assume that each ACTION instruction takes 32 bytes.
```
// code for a
action1
action2
call b
action3
halt
// code for b
action4
call c
return
// code for c
action5
action6
action7
return
```
[a: 15 marks]

b. Partition the following three address instructions into basic blocks:
```
1) i = 1
2) j = 1
3) t1 = 10 * i
4) t2 = t1 + j
5) t3 = 8 * t2
6) t4 = t3 − 88
7) a[t4] = 0.0
8) j = j + 1
9) if j <= 10 goto (3)
10) i = i + 1
11) if i <= 10 goto (2)
12) i = 1
13) t5 = i − 1
14) t6 = 88 * t5
15) a[t6] = 1.0
16) i = i + 1
17) if i <= 10 goto (13)
```
[b: 8 marks]

c. Find out the machine instructions for the following three-address statements:
```
i. x = y − z
ii. a[j] = c
iii. x = *p
```
[c: 12 marks (4×3=12)]

Total: 35 marks.
Source: CSE,L-3,T-1,2018.pdf, pages 7, 8.


## CSE-303 · 2019 · Term final · Question 1

(a) Differentiate between compiler, assembler and interpreter. Define “Hybrid Compiler” and justify the reason behind using a just-in-time compiler with an example. [04+06=10]
[a: 10 marks (04+06=10)]

(b) Identify the significance of a symbol table in a compiler. Demonstrate how source code is translated into a target code in a compiler using the input statement given below. [02+10=12]
[b: 12 marks (02+10=12)]

```text
Result = score1 * 100 + score2 * 100
```

[You must show all the phases of a compiler sequentially and the possible input and output of each phase for the given input statement in a diagram.]

(c) State the possible error-recovery actions in Lexical Analysis. Explain “Panic mode recovery” with an example. [08]
[c: 8 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 21.


## CSE-303 · 2019 · Term final · Question 2

(a) What is “Sentinel”? Define where sentinels are used and how does the use of sentinel speed up the scanning process? [02+04=06]
[a: 6 marks (02+04=06)]

(b) Tokenize the given source program using the token patterns given in Table 2(b). Also draw the symbol table along with the attributes stored in it. Handle “Lexical Errors” accordingly. [14]
[b: 14 marks]

Table 2(b)

| Token | Attributes | Pattern | Sample lexemes |
| --- | --- | --- | --- |
| Keyword | Lexeme itself | Characters i, f | if |
| Keyword | Lexeme itself | Characters e, l, s, e | else |
| Keyword | Lexeme itself | Characters m, a, i, n | main |
| Keyword | Lexeme itself | Characters p, r, i, n, t, f | printf |
| NumType | %d | Characters i, n, t | int |
| NumType | %f | Characters f, l, o, a, t | float |
| NumType | %lf | Characters d, o, u, b, l, e | double |
| Literal | Pointer to the symbol table | Characters surrounded by “ and ” | “Hello world” |
| Operator | Lexeme itself | == or < or > or <= or >= or != | ==, != |
| Bracket | Lexeme itself | ( or ) or { or } | (, ), {, } |
| Id | Pointer to the symbol table | Letters followed by letters or digits or underscores (_) | Name, var11, new_var |
| Number | Lexeme itself | Any numeric constants; allows decimal and exponential. Doesn’t start with 0 unless the number itself is 0 or there is a decimal point after that 0 | 12, 123.5, 12E5, 12E-5, 123.3+E4, 0, 0.556 |

N.B. 1. Example of ‘Lexeme itself’ attribute: `<Bracket, (>`, `<Keyword, else>`.
2. Example of ‘Pointer to symbol table’ attribute: `<Id, 3556>`.
[Here, 3556 represents the memory address of the symbol table where the attributes of the particular token are sorted.]

Source Code to “Find the Largest Number among three numbers” is given below:

```c
#include <stdio.h>
int main()
{
    double n1, n_2, n3;
    int 1st_var;
    printf("Enter three different numbers: ");
    scanf("%lf %lf %lf", &n1, &n_2, &n3);
    if (n1>=n_2 && n1>=n3)
        printf("%f is the largest number", n1);
    if (n_2>=n1 && n_2>=n3)
        printf("%f is the largest number", n_2);
    if (n3>=n1 && n3>=n_2)
        printf("%f is the largest number", n3);
    return 0;
}
```

(c) Formulate regular definition and show the transition diagram for the following tokens given below [No explanation required]. [05=05=10, as printed]
[c: 10 marks]

(i) Token Number. Pattern: Consists of any non-zero number of digits (0-9). Doesn’t start with a zero unless the number itself is 0. Allows decimal points followed by any non-zero number of digits. There must be at least one digit before the decimal number. Also, the decimal part cannot end with a zero. Exponential not allowed.
Example: Valid: 123, 123.45, 0.78, 0, 15.600007. Invalid: 123E-5, 34E65, 0.0, 67.890, .325.

(ii) Token RelationalOperator. Pattern: =, <, >, <=, >=, !=, <>.
Example: Valid: <>, !=, =. Invalid: <<, ==, =<.

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 21, 23.

Notes: The allocation for (c) is printed as 05=05 followed by =10; retained without silently correcting it. Number sample 123.3+E4, invalid identifier 1st_var, and the restricted token table are as printed.

## CSE-303 · 2019 · Term final · Question 3

(a) What is top-down parsing? Left factor the following grammer. [02+03=05]
[a: 5 marks (02+03=05)]

```text
S → abB | abcC | abcdD
B → b | ε
C → c | ε
D → d
```

(b) Grammar: [10+05=15]
[b: 15 marks (10+05=15)]

```text
stmt : expr
     | for (opt_expr; opt_expr; opt_expr) stmt
     | if (expr) stmt
     | while (expr) stmt
     | return expr ;
Opt_expr : expr | ε
expr : id = expr | expr - term | expr + term
     | expr relop expr | term
term : term * factor | term / factor | factor
relop : == | <= | < | >= | > | !=
factor : (expr) | id | num
```

For the given grammar, (i) Write the pseudocode for building a parse tree. (ii) Draw the parse tree for the input given below:

```c
for (counter = 1; counter < 5; counter = counter + 1) {
    sum = sum + counter;
}
```

(c) Write down the algorithm for removing left recursion. Eliminate the left recursion of the grammar given below showing the steps of the algorithm. [10]
[c: 10 marks]

```text
S → Aa | Bb | b
A → Ac | Sd
B → Bd | Sfg
```

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 23, 25.

Notes: Capitalization Opt_expr versus opt_expr, and braces in the input despite their absence from the grammar, are retained from the paper.

## CSE-303 · 2019 · Term final · Question 4

(a) Describe the different levels of error handling of a compiler. Explain how the production rules of grammar are represented in YACC / Bison with an example. [04+06=10]
[a: 10 marks (04+06=10)]

(b) Determine whether the following grammars are LL(1) or not with an explanation. [02*2.5=05]
[b: 5 marks]

```text
(i)  S → ASab | B, A → a | ε, B → bb
(ii) S → AaAb | BbBa, A → ε, B → ε
```

(c) Consider the following grammar: [03*05=15]
[c: 15 marks]

```text
S → aAbB | bAaB | ε
A → S | e | Da
B → S | ca
D → d | g
```

(i) Identify the FIRST and FOLLOW set for the grammar given above [Show the FOLLOW table].
(ii) Construct a predictive parsing table using the FIRST and FOLLOW set.
(iii) Show how the string ‘agabca’ will be parsed by the non-recursive parser. [Show the stack content, action at each step and other necessary information.]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 25.

Notes: In (c), the middle alternative of A is the literal terminal e, visually distinct from the ε in S.

## CSE-303 · 2019 · Term final · Question 5

(a) Design the S-attributed SDD which constructs syntax trees for a simple expression grammar involving only the binary operators ‘+’ and ‘-’. Then find out the parse tree and syntax tree for b-5+p. [05*03=15]
[a: 15 marks]

(b) What are the differences between synthesized and inherited attributes for nonterminals? “All S-attributed definitions are L-attributed, but not all L-attributed definitions are S-attributed.” Explain and justify. [05+10=15]
[b: 15 marks (05+10=15)]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 27.


## CSE-303 · 2019 · Term final · Question 6

(a) Construct the syntax tree and DAG for the following expression: [05*02=10]
[a: 10 marks]

```text
((x + y) - ((x + y) * (x - y))) + ((x + y)) * (x - y))
```

(b) Use value-number method to store the DAG in Question 6(a), in an array of records. Then represent the same DAG using three address code. [05*02=10]
[b: 10 marks]

(c) What are the disadvantages of triples representation over quadruples representation? Explain how indirect triples overcome the disadvantages of triples. [05+05=10]
[c: 10 marks (05+05=10)]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 27.

Notes: The expression in (a) has an unmatched final closing parenthesis in the printed source; retained.

## CSE-303 · 2019 · Term final · Question 7

(a) Analyze the following C code in Code 1. [08*02=16]
[a: 16 marks]

```c
void f(int n) {
    int t, s;
    if (n > 1) {
        s = f(n - 1);
        t = f(n - 2);
    }
}
main() {
    f(5);
}
```

Code 1: Code for question 7(a).
Now find out the sequence of calls and returns that result from an execution of the above program. Then construct the complete activation tree for it.

(b) Define activation record. Why activation record is used? Describe the contents of an activation record with necessary figures and examples. [02+03+09=14]
[b: 14 marks (02+03+09=14)]

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 27.

Notes: The source declares void f but assigns its calls to s and t; retained as printed.

## CSE-303 · 2019 · Term final · Question 8

(a) What are the issues that need to be considered during design of a code generator? Explain the factors of instruction selection with examples. [05+10=15]
[a: 15 marks (05+10=15)]

(b) Translate the following three address code as shown in Code 2 into an equivalent machine code by using static allocation for procedures a, b and c. Assume that codes for procedures a, b and c start at addresses 3000, 4000 and 5000 respectively. Also assume that activation records for procedures a, b and c start at addresses 7000, 8000 and 9000 respectively. Further assume that each ACTION instruction takes 64 bytes. [15]
[b: 15 marks]

```text
// code for a
    action1
    action2
    action3
    call b
    action4
    halt
// code for b
    action5
    action6
    call c
    return
// code for c
    action7
    action8
    return
```

Code 2: Code for Question 8(b).

Total: 30 marks.
Source: CSE,L-3,T-1,2019.pdf, pages 27, 29.


## CSE-303 · 2021 · Term final · Question 1

(a) Explain clearly the difference among the following regular expressions in the context of Lexical Analyzer generator: [10]
[a: 10 marks]

```text
(i)   {cse}{mist}
(ii)  [csemist]
(iii) csemist
(iv)  (csemist)
(v)   csemist+
```

(b) Explain the terms token, pattern and lexeme with necessary examples. Which of these is (are) specified in lexical analyzer? How? Explain the role of attribute in relation to token, pattern and lexeme. [10]
[b: 10 marks]

(c) Left Factor the grammar, [10]
[c: 10 marks]

```text
A → abB | abcC | abcdD
B → b
C → c
D → d
```

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 7.


## CSE-303 · 2021 · Term final · Question 2

(a) Explain and justify the comment “Java language processors combine compilation and interpretation”. [10]
[a: 10 marks]

(b) Explain how the various stages in a compiler can be grouped into the analysis and synthesis by the symbol table in this scenario? [10]
[b: 10 marks]

(c) Explain what would have happened if the task of removing white spaces from input programs was moved from lexical analyzer to syntax analyzer? [10]
[c: 10 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 7.


## CSE-303 · 2021 · Term final · Question 3

(a) We have the grammar [15]
[a: 15 marks]

```text
S → A * a
A → A + a | b
```

Eliminate left recursion from the above grammar. And then find FIRST and FOLLOW for the non-terminals. Use this information to construct the predictive parsing table.

(b) Using the predictive parsing table found in the above question (3-(a)), show in a tabular form, the input matched, stack contents and parsing action for an input string b + a + a * a. From the parsing output, show the derivation of the output string. [15]
[b: 15 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 7, 8.


## CSE-303 · 2021 · Term final · Question 4

Marks allotted for Viva 30. (Compulsory) [30]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 8.


## CSE-303 · 2021 · Term final · Question 5

(a) Present the SDD which uses inherited attributes to multiply integers. Use this SDD to construct the parse tree for the expression “5 * 6 * 7”, annotate the parse tree by calculating the values of the attributes at the various nodes. Then construct the dependency graph for the same expression “5 * 6 * 7”. Carry out topological sorting of this graph. [05 x 04=20]
[a: 20 marks]

(b) Describe how the memory is subdivided into code and data areas by C++ language compiler for Linux operating system with necessary figures. [10]
[b: 10 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 9.


## CSE-303 · 2021 · Term final · Question 6

(a) Find out the three-address code and quadruples representation for the following expression: [05 x 02=10]
[a: 10 marks]

```text
n = f(a, g(a, b, c), h(p, q))
```

(b) Compare between name equivalence and structural equivalence with necessary examples. [10]
[b: 10 marks]

(c) Construct the syntax tree and DAG for the following expression: [05 x 02=10]
[c: 10 marks]

```text
a * (b + c) + (b + c) * c + a(b + c)
```

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 9.

Notes: The expression in (c) prints a(b + c) without an explicit multiplication operator.

## CSE-303 · 2021 · Term final · Question 7

(a) Present the grammar that generates a sequence of declarations with list of names of basic types, array types or record types. Then use this grammar to construct the parse tree for “record {int a, b; float a[3][4];}”. [09]
[a: 9 marks]

(b) Find out the machine instructions for the following three-address statements: [04 x 03=12]
[b: 12 marks]

```text
(i)   if a<b goto L
(ii)  b[p] = d
(iii) y = *z
```

(c) Explain clearly the difference among, [03 x 03=09]
[c: 9 marks]

```text
(i)   LD R1, 100(R2)
(ii)  LD R1, #100
(iii) LD R1, *100(R2)
```

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 9.

Notes: Declaration example repeats the name a as printed.

## CSE-303 · 2021 · Term final · Question 8

Marks allotted for Viva 30. (Compulsory) [30]

Total: 30 marks.
Source: CSE,L-3,T-1,2021.pdf, pages 10.


## CSE-303 · 2022 · Term final · Question 1

(a) We have the following grammar for variable declaration in C: [5+10+5=20]
[a: 20 marks (5+10+5=20)]

```text
V → TD;
T → int | float | char
D → D, F | F
F → id
```

(i) Now, eliminate left recursion from the above grammar (if there is any).
(ii) Find FIRST and FOLLOW for each non terminal.
(iii) Construct the predictive parsing table using the above information.

(b) Find out whether the following statements are syntactically correct or not for the above mentioned grammar in Question-1(a) using top down parsing approach. [10]
[b: 10 marks]

```text
(i)  Char id, id;
(ii) int id = 4;
```

If syntactically correct, using the predictive parsing table derived from the above question-1(a), show in a tabular form the input matched, stack content, parsing output sequentially.

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 5.

Notes: Filename year is 2022; compiler heading explicitly reads Term Final (Spring) Examination 2021: September 2021 on both section covers. Grouped under filename year as requested. Char is capitalized in (b)(i), whereas the grammar terminal is lowercase char.

## CSE-303 · 2022 · Term final · Question 2

(a) [16]
[a: 16 marks]

```text
funDel → typeSpec ID (parms) stmt | ID (parms) stmt
parms → parmTypeList | ε
parmTypeList → typespec parmIdList
parmIdList → parmIdList, parmTypeList | ID
Stmt → expr; | ;
expr → term = term | term relop term
term → ID | NUMBER
```

For the above function formulate the regular definition and show the transition diagram for these: identifier, number, semicolon, comma, assignment operator, relational operator and show the transition diagram for each token.

(b) “If we do not store the reserved keyword in the symbol table, then we must prioritize the keyword tokens so that the reserved-word tokens are recognized in preference to id, when the lexeme matches both patterns.” Support or refuse the statement with justification. [6]
[b: 6 marks]

(c) Describe where sentinels are used in buffer pairs in lexical analysis. How does the use of sentinels speed up the input process? [8]
[c: 8 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 5, 6.

Notes: Grammar spelling/case differences funDel, typeSpec/typespec and stmt/Stmt are preserved. Filename year 2022; printed compiler examination heading is September 2021.

## CSE-303 · 2022 · Term final · Question 3

(a) “Compiler works in two steps whereas interpreter works in one step” — How does this make a difference in working principle of both compiler and interpreter? [5]
[a: 5 marks]

(b) Explain and justify the comment that Java language processors combine compilation and interpretation. [5]
[b: 5 marks]

(c) Explain whether the following grammars are “LLCD” [unclear scan] or not, your answer will not be accepted without proper explanation. [20]
[c: 20 marks]

```text
(i)   S → AB | Bc | d, A → a | ε, B → b | ε, C → c | ε
(ii)  S → A | a, A → a
(iii) S → aB | ε, B → bC | ε, C → eS | ε
(iv)  S → A, A → Bb | Cd, B → aB | ε, C → cC | ε
```

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 6.

Notes: The scan renders the grammar classification as LLCD; likely a damaged LL(1), but the intended text is not silently substituted. In (c)(iii), C → eS is transcribed as visible (not changed to cS). Some bold letters have scan marks above them; those marks are treated as image artifacts. Filename year 2022; printed compiler examination heading is September 2021.

## CSE-303 · 2022 · Term final · Question 4

(a) What should a diagram’s code do if the character read at one point is not among the ones for which a following state has been specified? [05]
[a: 5 marks]

(b) During construction of a parsing table M, for each production A → α of the grammar, if ε is in FIRST(α), we add A → α to M[A, b], for each terminal b in FOLLOW(A). Explain clearly in light of parsing mechanism. [10]
[b: 10 marks]

(c) What is intermediate code generation? List two important properties it should have. Give the transition process for statement given below: [05]
[c: 5 marks]

```text
result = a + b * c + (d/2):
```

(d) Preform left factoring in the following grammar: [10]
[d: 10 marks]

```text
(i)  S → a | ab | abc | abcd
(ii) S → bSSaaS | bSSaSb | bSb | a
```

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 6.

Notes: The expression in (c) ends with a colon in the printed source. The wording Preform is printed. Bold glyphs in (d)(ii) have small scan marks above them, treated as artifacts rather than mathematical diacritics. Filename year 2022; printed compiler examination heading is September 2021.

## CSE-303 · 2022 · Term final · Question 5

(a) Draw dependency graph for the syntax directed definition shown in figure-5(a) for the declaration, float a, b, d; [10]
[a: 10 marks]

Figure-5(a): SDD of Declaration

| Production | Semantic rules |
| --- | --- |
| 1) D → T L | L.inh = T.type |
| 2) T → int | T.type = integer |
| 3) T → float | T.type = float |
| 4) L → L₁, id | L₁.inh = L.inh; addType(id.entry, L.inh) |
| 5) L → id | addType(id.entry, L.inh) |

(b) Using the incremental syntax directed translation shown in figure-5(b), draw an annotated parse tree and write the generated three address code for the expression, [10]
[b: 10 marks]

```text
m = (n + 10) + (-p + 8)
```

Figure-5(b): Incremental SDT for Code Generation

```text
S → id = E ; { gen(top.get(id.lexeme) '=' E.addr); }
E → E₁ + E₂  { E.addr = new Temp();
               gen(E.addr '=' E₁.addr '+' E₂.addr); }
  | - E₁     { E.addr = new Temp();
               gen(E.addr '=' 'minus' E₁.addr); }
  | (E₁)     { E.addr = E₁.addr; }
  | id       { E.addr = top.get(id.lexeme); }
```

(c) Generate machine code for the following sequence assuming that n, s, i are in a memory location. [10]
[c: 10 marks]

```text
    s = 0
    i = 0
L1: if i>n goto L2
    s = s + i
    i = i + 1
    goto L1
L2:
```

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 7, 8.

Notes: The supplied SDT has no numeric-literal production despite numeric literals in its requested expression; retained without adding productions. Filename year 2022; printed compiler examination heading is September 2021.

## CSE-303 · 2022 · Term final · Question 6

(a) Write three address code and Quadruples for the following code segment using the position number for labels assuming each data takes 4 bytes. [18]
[a: 18 marks]

```text
a[i] = b * c - b * d
x = f(y + 1) + g(5, f(y + 3))
q = *p + &y
```

(b) Write short note on the following concepts: [12]
(i) Type Equivalence
(ii) Type Expression
(iii) Value-number method
(iv) DAG
[b: 12 marks]

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 8.

Notes: Filename year 2022; printed compiler examination heading is September 2021.

## CSE-303 · 2022 · Term final · Question 7

(a) Explain the different addressing modes for a simple target machine model. [5]
[a: 5 marks]

(b) Explain the way of calculating program cost. Calculate program cost for the following target machine code. [10]
[b: 10 marks]

```text
LD R0, P
LD R1, x
ST 0(R0), R1
LD R0, x
LD R1, y
SUB R0, R0, R1
BLTZ *R3, R0
```

(c) For the following code, generate machine code using stack allocation for procedures proc1, proc2, and proc3. Assume that code for procedures proc1, proc2 and proc3 start at the address 200, 400 and 600 respectively. Also assume that activation records size for procedures proc1, proc2 and proc3 are 50, 20 and 30 respectively. Further assume that each action instruction takes 32 bytes and stack starts at address 740. [15]
[c: 15 marks]

```text
//code for proc1
    action1
    action2
    call proc2
    action3
    action4
    halt
//code for proc2
    action 5
    call proc3
    return
//code for proc3
    action6
    action7
    return
```

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 8.

Notes: The zero in ST 0(R0), R1 resembles capital O in the scan; transcribed as zero for the displacement. Filename year 2022; printed compiler examination heading is September 2021.

## CSE-303 · 2022 · Term final · Question 8

(a) “Stack allocation would not be feasible if procedure calls, or activations of procedures did not nest in time” — Justify the statement. [07]
[a: 7 marks]

(b) Explain the elements of a general Activation Record. [08]
[b: 8 marks]

(c) Consider the following pseudo code for generating Fibonacci numbers. Show the downward growing stack for the activation records considering f(5) is called initially and currently f(1) is activated. [15]
[c: 15 marks]

```c
int f(int n) {
    int t, s;
    if (n < 2) return 1;
    s = f(n-1);
    t = f(n-2);
    return s + t;
}
```

Total: 30 marks.
Source: CSE,L-3,T-1,2022-18072026044723.pdf, pages 8, 9.

Notes: Filename year 2022; printed compiler examination heading is September 2021.

## CSE-303 · 2023 · Term final · Question 1

a. Consider the following grammar for identifier declaration:
```text
L → D | L D
D → T I ;
T → int | float | char
I → id | I , id
```
Based on this grammar, determine whether it is suitable for a top-down or bottom-up parser. If the grammar is suitable for bottom-up parsing, then apply the shift-reduce process and build bottom-up parser for the following statements:
```text
int id1; float id2;
```
If not, justify your answer by discussing the characteristics of the grammar.
[a: 10 marks]

b. (i) Inspect the grammar of Question-1(a) and determine whether you need to modify the grammar before constructing a predictive top-down parser or not? Justify your response. If so, make the necessary changes and use the modified grammar for the following questions; otherwise, use the given grammar.
[b: 20 marks (4+8+8); b(i): 4 marks (4+8+8)]

(ii) Find FIRST and FOLLOW for each non-terminal.
[b(ii): 8 marks (4+8+8)]

(iii) Construct a predictive parsing table using the FIRST and FOLLOW set.
[b(iii): 8 marks (4+8+8)]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 4.


## CSE-303 · 2023 · Term final · Question 2

a. Discuss the trade-offs between using a compiler and an interpreter.
[a: 10 marks]

b. Compiler is a language processing system which converts a source code to a target machine code. Now, demonstrate the translation done by each phases of the compiler for the following statement considering all the variables are integer numbers.
```text
result = - num1 * 10 + num2 * 40
```
[b: 20 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 4.


## CSE-303 · 2023 · Term final · Question 3

a. Suppose, a situation arises where the lexical analyzer is unable to proceed because none of the patterns for tokens matches a prefix of the remaining input. How will the lexical analyzer recover from this phase?
[a: 10 marks]

b. Consider the following grammars and patterns for identifying tokens in a programming language:
```text
expr → term operator term | id assignment_op term
term → num | id
operator → + | - | * | /
assignment_op → = | += | -= | *= | /=
```
For the given grammar, write down the patterns for identifying the tokens “number”, “identifier”, “operator”, “assignment-op”. Also draw the transition diagrams for each of the patterns.
(i) Number: Consider of any non-zero number of digits (0-9) but starting digit cannot be zero (0). Decimal points are followed by any non-zero number of digits. This part is optional. There must be at least one digit before the decimal number. Exponential part not considered.
(ii) Identifier: Identifier can contain any number of letters or digits or underscore (_). But it cannot start with any digit.
(iii) Operators and assignment operators: Operators mentioned in the grammar.
[b: 10 marks]

c. Consider the following two transition diagrams for arithmetic operator ('+' and '-' only) and arrow operators ('->') for C language respectively:
```text
Arithmetic operator: start → (0)
(0) -- '+' --> ((1)) [return (PLUS)]
(0) -- '-' --> ((2)) [return (MINUS)]
Arrow operator: start → (3)
(3) -- '-' --> (4) -- '>' --> ((5)) [return (ARR_OP)]
Double parentheses denote accepting states.
```
If both the transition diagrams are matched in parallel, then how to resolve the case where both the diagrams will reach to the accepting states for '->' input?
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 5.


## CSE-303 · 2023 · Term final · Question 4

a. Explain whether the following grammars are LL(1) or not; your answer will not be accepted without proper explanation.
```text
(i) S → X X ; X → x X | y
(ii) S → A S a b | B ; A → a | ε ; B → b b
```
[a: 10 marks]

b. Explain the back-tracking procedure of recursive-descent top-down parser with proper algorithm and example.
[b: 10 marks]

c. Perform left-factoring in the following grammar.
```text
(i) F → n | n [A] | n (A)
(ii) S → b S S′ | a ; S′ → S a a S | S a S b | b
```
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 5.


## CSE-303 · 2023 · Term final · Question 5

a. Figure-5(a) represents a Syntax-Directed Definition (SDD) to keep track of block information in the programs. Identify the class of the SDD shown in Figure-5(a) and justify your answer.
Figure-5(a): Syntax Directed Definition (SDD) for Block information
| Production | Semantic rules |
| --- | --- |
| Ss → S ; Ss₁ | S.block = Ss.block; Ss₁.block = Ss.block |
| Ss → ε | |
| S → B | B.block = S.block |
| B → { Ss } | Ss.block = child(B.block) |
| S → other | other.block = S.block; |
[a: 7 marks]

b. Following grammar generates a binary number with a decimal point. Design a L-attributed SDD to compute the decimal value of a binary string generated by the grammar and using the designed SDD illustrate that, the value of binary string 101.110 is the decimal number 5.75.
```text
S → L . L | L
L → L B | B
B → 0 | 1
```
[b: 15 marks]

c. Appling the Syntax-Directed Definition (SDD) shown in Figure-5(c), build a syntax tree represented as a record for the string “b – (a + 3 - 5)” and list down the steps of tree construction.
Figure-5(c): Syntax Directed Definition (SDD) for Syntax Tree
| Production | Semantic rules |
| --- | --- |
| E → E₁ + T | E.node = new Node('+', E₁.node, T.node) |
| E → E₁ - T | E.node = new Node('-', E₁.node, T.node) |
| E → T | E.node = T.node |
| T → ( E ) | T.node = E.node |
| T → id | T.node = new Leaf(id, id.entry) |
| T → num | T.node = new Leaf(num, num.val) |
[c: 8 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 6.


## CSE-303 · 2023 · Term final · Question 6

a. Considering the Syntax-Directed Definition (SDD) in Figure-6(a), build an annotated parse tree and corresponding dependency graph for the declaration, “float arr[4][5][2];”.
Figure-6(a): Syntax Directed Definition (SDD) for type checking
| Production | Semantic rules |
| --- | --- |
| T → B id C ; | T.t = C.t; C.b = B.t |
| B → int | B.t = integer |
| B → float | B.t = float |
| C → [ num ] C₁ | C.t = array(num.val, C₁.t) |
| C → ε | C₁.b = C.b; C.t = C.b |
[a: 15 marks]

b. Briefly explain the elements of a general activation record for procedure call with appropriate examples.
[b: 7 marks]

c. Explain how nonlocal data on the stack can be accessed using the access control link of the activation record with appropriate examples.
[c: 8 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 7.

Notes: Figure-6(a) prints C₁.b = C.b in the C → ε row, although C₁ does not occur in that production. This apparent source error is preserved.

## CSE-303 · 2023 · Term final · Question 7

a. Illustrate three address code for the code segment shown in Code-7(a) which turns a 10*10 matrix A into an identity matrix. Assume that, the real-valued array elements take 8 bytes each and the matrix A is stored in row-major form.
Code-7(a): Creating Identity Matrix-A
```text
for i from 1 to 10 do
    for j from 1 to 10 do
        A[i,j] = 0.0;
for i from 1 to 10 do
    A[i,i] = 1.0;
```
[a: 10 marks]

b. Partition the three address instructions that you have generated in question-7(a) into a set of basic blocks and construct flow graph.
[b: 10 marks]

c. Compare among the following data structure for representing intermediate representations:
(i) Quadruples
(ii) Triples
(iii) Indirect Triples
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 7.


## CSE-303 · 2023 · Term final · Question 8

a. For the three address code shown in Code-8(a), write down generated machine code using static allocations for procedure proc1 and proc2. Use pseudo instruction ACTION to represent the sequence of machine instructions to execute the statement action1, action2 and action3. Start the code for procedure proc1 at address 200 and proc2 at address 350. Furthermore assume that each ACTION instruction takes 16 bytes and the activation records for these procedures are statically allocated starting at locations 400 and 494, respectively. Consider that action3 has a condition which is responsible for returning back to the caller procedure. You also have to explain the reasons behind each line of the generated machine code.
Code-8(a): Pseudo Code (printed on the preceding page)
```text
// code for procedure proc1
action1
call proc2
action2
halt
[a: 15 marks]

// code for procedure proc2
action3
call proc2
return
```

b. Explain the following optimization mechanism with appropriate examples:
(i) Basic Block Optimization
(ii) Peephole Optimization
[b: 15 marks]

Total: 30 marks.
Source: CSE L-3 T-1 , 2023.pdf, pages 7, 8.


## CSE-303 · 2024 · Term final · Question 1

We have the following grammar for regular expressions over symbols a and b only:
```text
rexpr → rexpr + rterm | rterm
rterm → rterm rfactor | rfactor
rfactor → rfactor * | rprimary
rprimary → a | b
```

a. (i) Eliminate left recursion from the above grammar (if there is any).
[a: 24 marks (05+12+07); a(i): 5 marks (05+12+07)]

(ii) Now find FIRST and FOLLOW for each non-terminal.
[a(ii): 12 marks (05+12+07)]

(iii) Construct the predictive parsing table using the above information.
[a(iii): 7 marks (05+12+07)]

b. Using the predictive parsing table derived from Question 1(a), identify whether the following statement is syntactically correct or not.
```text
b * a + ab
```
[b: 6 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 5.


## CSE-303 · 2024 · Term final · Question 2

a. Explain and justify the comment “Java language processors combine compilation and interpretation”.
[a: 10 marks]

b. Compiler is a language processing system which converts a source code to a target machine code. Now demonstrate the translation done by each phases of the compiler for the following statement considering all the variables are integers.
```text
result = num1 * 10 + num2 * 40
```
[b: 20 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 5.


## CSE-303 · 2024 · Term final · Question 3

a. Consider the following grammar. Write down the patterns for identifying the tokens (mentioned in the question no 3(a)) and draw the transition diagram for each pattern.
```text
stmt → for (expr; expr; expr)
expr → term assignment_operator term
     | term increment_operator
     | term relop term
term → id | number
```
Now, write down patterns for number, ID, parenthesis, assignment_operator and increment_operator. Draw transition diagram for the mentioned patterns.
[a: 15 marks]

b. Identify the purpose of using two-buffer scheme instead of one-buffer scheme in the process of lexical analysis.
[b: 7 marks]

c. Explain clearly the difference among the following regular expressions in the context of Lexical Analyzer Generator.
```text
(i) [spring 2024]
(ii) {spring}{2024}
(iii) (spring 2024)
(iv) spring 2024
```
[c: 8 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 6.


## CSE-303 · 2024 · Term final · Question 4

a. Explain the back-tracking procedure of recursive-descent top-down parser with proper example.
[a: 10 marks]

b. Explain whether the following grammers are LL(1) or not; your answer will not be accepted without proper explanation.
```text
S → X x X y | Y y Y x
X → x X | ε
Y → y Y | ε
```
[b: 10 marks]

c. Perform left-factoring for the following grammars.
```text
(i) S → S+S | SS | (S) | S * | a
(ii) S → bSSaaS | bSSasb | bsb | a
```
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 6.

Notes: The second grammar in part (c) prints bSSasb (lowercase s); preserved as printed.

## CSE-303 · 2024 · Term final · Question 5

a. The SDD in Fig. 5(a) takes a simple declaration D consisting of a basic type T followed by a list L of identifiers. Semantic rules of the SDD enters the type for each of the identifiers on the list into the symbol-table. Now, modify the semantic rules in such a way so that it can calculate the width (in bytes) of the identifiers and enter it into the symbol-table. Assume the required attributes to do the task and give proper explanation for the addition of each attribute, rule or side-effect in the semantic rules column.
Fig. 5(a): Syntax-directed definition for simple type declarations
| Production | Semantic rules |
| --- | --- |
| D → T L | L.inh = T.type |
| T → int | T.type = integer |
| T → float | T.type = float |
| L → L₁ , id | L₁.inh = L.inh; addType(id.entry, L.inh) |
| L → id | addType(id.entry, L.inh) |
[a: 10 marks]

b. Fig. 5(b) is a syntax-directed definition (SDD) for constructing syntax trees during top-down parsing using the SDD of Fig. 5(b) answer the followings:
(i) Identify the class of the SDD with appropriate explanation.
(ii) Draw parse tree for the expression, (x+y) – (a-(4+b)).
(iii) Construct dependency graph for the same expression and
(iv) Construct syntax tree using the semantic rules showing the node construction steps of the tree.
Fig. 5(b): Syntax-directed Definition for Constructing syntax trees during top-down parsing
| Production | Semantic rules |
| --- | --- |
| E → T E′ | E.node = E′.syn; E′.inh = T.node |
| E′ → + T E′₁ | E′₁.inh = new Node('+', E′.inh, T.node); E′.syn = E′₁.syn |
| E′ → - T E′₁ | E′₁.inh = new Node('-', E′.inh, T.node); E′.syn = E′₁.syn |
| E′ → ε | E′.syn = E′.inh |
| T → ( E ) | T.node = E.node |
| T → id | T.node = new Leaf(id, id.entry) |
| T → num | T.node = new Leaf(num, num.val) |
[b: 20 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 7.


## CSE-303 · 2024 · Term final · Question 6

a. Explain how indirect triples representation of three address code overcomes the problem of triples representation with appropriate example.
[a: 10 marks]

b. The translation scheme in Fig. 6(b) generates three address code for expressions with array references. Considering the SDT given in Fig. 6(b) draw an annotated parse tree for the array referenced expression,
```text
X = arr[i] + st[i][j+1];
```
and find out the generated three address code using the semantic actions assuming that arr is an array of integers and st is an array of floating numbers and X, i, j all are integers.
Fig. 6(b): Semantic actions for array references (continues on PDF page 8)
```text
S → id = E ;
    { gen(top.get(id.lexeme) '=' E.addr); }
  | L = E ;
    { gen(L.array.base '[' L.addr ']' '=' E.addr); }
E → E₁ + E₂
    { E.addr = new Temp();
      gen(E.addr '=' E₁.addr '+' E₂.addr); }
  | id
    { E.addr = top.get(id.lexeme); }
  | L
    { E.addr = new Temp();
      gen(E.addr '=' L.array.base '[' L.addr ']'); }
L → id [ E ]
    { L.array = top.get(id.lexeme);
      L.type = L.array.type.elem;
      L.addr = new Temp();
      gen(L.addr '=' E.addr '*' L.type.width); }
  | L₁ [ E ]
    { L.array = L₁.array;
      L.type = L₁.type.elem;
      t = new Temp();
      L.addr = new Temp();
      gen(t '=' E.addr '*' L.type.width);
      gen(L.addr '=' L₁.addr '+' t); }
```
[b: 20 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 7, 8.


## CSE-303 · 2024 · Term final · Question 7

a. Briefly explain the elements of a general activation record for the procedures with appropriate examples.
[a: 7 marks]

b. Fig. 7(b) is a C code to compute nth Fibonacci numbers recursively. Suppose that the activation record for the function fibo includes the following elements in order: (return value, argument n, local s, local t); there will normally be other elements in the activation record as well. To answer the questions below assume that the initial call is fibo(5).
(i) Draw the complete activation tree for the call fibo(5) by simulating the program given in Fig. 7(b).
(ii) What does the stack and its activation records look like the first time fibo(1) is about to return?
(iii) What does the stack and its activation records look like the fifth time fibo(1) is about to return?
Fig. 7(b): Program to compute nth Fibonacci Number
```c
int fibo (int n){
    int t, s;
    if (n<2) return 1;
    s = fibo(n-1);
    t = fibo(n-2);
    return s+t;
}
```
[b: 15 marks]

c. Explain how non-local data on the stack can be accessed using the access control link of the activation record for a language which supports nested procedure declaration and procedure can have function-valued parameter with appropriate examples.
[c: 8 marks]

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 8.


## CSE-303 · 2024 · Term final · Question 8

a. For a simple target machine explain how program cost can be estimated for different types of instruction. Now determine the total program cost of the following instruction sequences:
```text
LD R0, y
LD R1, #10
ADD R0, R0, R1
INC R0, R0
LD R1, 200(R0)
ST x(R0), R1
BLTZ *R0, R1
```
[a: 10 marks]

b. For the pseudo-code given in Fig. 8(b), considering the instructions of a simple target machine, generate machine code using stack allocation for procedures main, proc and add. Assume that code area for procedures main, proc and add start at the addresses 100, 200 and 500 respectively. Also assume that activation records size for the procedures main, proc and add are 20, 40 and 10 respectively. Further assume that, each action1, action2, action5 takes 16 bytes and each action3, action4, action6 and action7 instruction takes 10 bytes and the stack starts at address 740. Consider that action7 has a condition which is responsible for returning back to the caller procedure. Assume the registers and instructions as required for the target machine.
Fig. 8(b): Psuedo-code for a simple target machine.
```text
// code for main procedure
action1
action2
call proc
action3
halt
[b: 20 marks]

// code for proc procedure
action4
call add
action5
call proc
action6
call proc
return

// code for add procedure
action7
action4
return
```

Total: 30 marks.
Source: CSE L-3 T-1 ,2024.pdf, pages 9.


## CSE-303 · 2025 · Term final · Question 1

Consider the following grammers and answer the Questions.
```text
Grammer-01 (G-01):
E → E + E | E * E | (E) | id | num
Grammer-02 (G-02):
E → E + T | T
T → T * F | F
F → (E) | id | num
```

a. Identify the set of lexemes that these above grammers can generate. Define suitable regular expressions (REs) for each token.
[a: 8 marks]

b. Describe the problems with grammer G-01 and how does G-02 resolve these problems with appropriate example and parse tree.
[b: 10 marks]

c. Can grammer G-02 be used for a top-down parser (recursive descent)? Justify your answer. If no, transform G-02 into an equivalent grammer that is suitable for top-down parsing.
[c: 12 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 4.


## CSE-303 · 2025 · Term final · Question 2

Consider the following grammer:
```text
S → A C B | C b b | B a
A → d a | B C
B → g | ε
C → h | ε
```
where S, A, B and C are non-terminals and a, b, d, g, h and ϵ are terminals.

a. Find the FIRST and FOLLOW for each non-terminals of the above grammer.
[a: 8 marks]

b. Build a predictive parsing table from FIRST and FOLLOW set.
[b: 14 marks]

c. Explain the concept of Non-Recursive Predictive Parsing. Describe the algorithm used by such a parser to process an input string.
[c: 8 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 4.

Notes: The source calls ϵ a terminal; retained without correction.

## CSE-303 · 2025 · Term final · Question 3

a. Explain the role of “Buffer Pair” in the design of a lexical analyzer and how this scheme works.
[a: 10 marks]

b. Construct the Regular Expressions (REs) and show the transition diagram that will match Date format. Day, Month, and year – all three parts must be present in the date format. The parts can be separated by either dot (.) or hyphen (-). Year must be written in 4 digit format. Needless to say that the numbers in the date should represent valid numbers. Example of some correct and incorrect date formats are given below:
Correct:
```text
12-03-2022, 1-2-2000, 1.11.2050
01-10-2019, 01.05.1950, 1-02-2024
```
Incorrect:
```text
36.9.2022, 3-14-2023, 12.12.22
```
[b: 10 marks]

c. “If we do not store the reserved keywords in the symbol table, then we must prioritize the keyword tokens so that the reserved word tokens are recognized preference to id, when the lexeme matches both pattern”. Justify the statement.
[c: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 4, 5.


## CSE-303 · 2025 · Term final · Question 4

a. Compiler is a language processing system which converts a source code to a target machine code. Now, demonstrate the translation done by each phases of the compiler for the following statement considering all the variables are integer numbers.
```text
result = -num1 * 10 + num2 * 40
```
[a: 20 marks]

b. Perform left-factoring in the following grammer.
```text
(i) F → n | n[A] | n(A)
(ii) S → bSS′ | a
(iii) S′ → SaaS | SaSb | b
```
[b: 10 marks]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 5.


## CSE-303 · 2025 · Term final · Question 5

Answer all the questions for following CFG rules:
```text
L → E n
E → E₁ + T
E → T
T → T₁ * F
T → F
F → (E)
F → digit
```

a. Define Syntax Directed Translation with importance.
[a: 5 marks (5+8+10+7=30)]

b. Differentiate between Syntax, Directed Definitions and Syntax Directed translation schemes in terms of the above CFG or production rules.
[b: 8 marks (5+8+10+7=30)]

c. Produce the Semantic Rules followed by an annotated parse tree for the expression Input: 5 + 3 * 4 along with a dependency graph for both synthesized and inherited attributes.
[c: 10 marks (5+8+10+7=30)]

d. For the following expressions and binary operators, draw the respective syntax tree:
```text
mknode (op, left, right)
mkleaf (id, entry)
mkleaf (num, val)
```
[d: 7 marks (5+8+10+7=30)]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 5.

Notes: The source lists tree-construction routines in part (d), but provides no separate concrete expression for that part. No expression has been supplied.

## CSE-303 · 2025 · Term final · Question 6

a. Analyze the Bottom-up evaluation procedure for the expression: 5 + 3 * 4n with step by step derivation.
[a: 12 marks (12+6+6+6=30)]

b. State the translation schemes for S-attributed definitions with an example.
[b: 6 marks (12+6+6+6=30)]

c. Analyze on requirements of inherited and synthesized attributes in Syntax Directed Definitions.
[c: 6 marks (12+6+6+6=30)]

d. Explain the role of Intermediate Code generations in Compiler Design.
[d: 6 marks (12+6+6+6=30)]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 6.

Notes: Part (a) prints the expression as 5 + 3 * 4n; the trailing n is preserved. The preceding hyphen is sentence punctuation in the source.

## CSE-303 · 2025 · Term final · Question 7

a. For the following arithmatic expression, what will be the representation in 3-Access Codes and postfix Notations.
```text
A = B + C * D
```
[a: 6 marks (6+6+8+10=30)]

b. Explain how intermediate codes ensures portability and optimization opportunities for hardware architectures.
[b: 6 marks (6+6+8+10=30)]

c. Discuss on the control flows of if-else and while-loop statements with examples drawing Graphs.
[c: 8 marks (6+6+8+10=30)]

d. Illustrate the possible issues of flow controls among different basic blocks of codes given below with respective Directed Acyclic Graphs.
```text
a = b + c
b = a - d
c = b + c
d = a - d
```
[d: 10 marks (6+6+8+10=30)]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 6.

Notes: “3-Access Codes” is the source wording, preserved.

## CSE-303 · 2025 · Term final · Question 8

a. Discuss on the basic requirements of Code-Optimization along with their opportunities.
[a: 5 marks (5+6+5x3+4=30)]

b. Define Code-Optimization in the context of necessity on trade-offs between compilation used and execution efficiency for machine dependent and independent optimization.
[b: 6 marks (5+6+5x3+4=30)]

c. For the following intermediate code sequences:
```text
t₁ = a * 2
t₂ = a * 2
t₃ = t₁ + t₂
t₄ = 0 * b
t₅ = t₃ + t₄
```
[c: 15 marks (5+6+5x3+4=30)]

(i) Identify redundant and unnecessary computation.
[c(i): 5 marks (5+6+5x3+4=30)]

(ii) Rewrite optimized code using common sub expression elimination and dead code elimination.
[c(ii): 5 marks (5+6+5x3+4=30)]

(iii) For the following loop, produce the optimized code applying code motion and strength reduction.
```text
For(i=0; i<10; i++){
    x = 4*i;
    y = 20;
    z = x+y;
}
```
[c(iii): 5 marks (5+6+5x3+4=30)]

d. Discuss on the applicability on Peephole Optimization with examples.
[d: 4 marks (5+6+5x3+4=30)]

Total: 30 marks.
Source: CSE L-3 T-1 2025.pdf, pages 6.

Notes: The printed grouped allocation is 5+6+5x3+4=30; the three 5-mark shares correspond to c(i), c(ii), c(iii). Capitalized For is preserved.

## CSE-303 · Undated · Exam suggestion · Question 1

Define a language processing system and draw its diagram. Explain the roles of the preprocessor, compiler, assembler, linker and loader.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 2

Define a compiler and explain its role, structure and phases of compilation. Give particular attention to lexical analysis and syntax analysis.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 3

Explain lexical analysis and the lexical analyzer/scanner’s work and role. Understand how source characters become tokens for the parser.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 4

Define and distinguish token, lexeme and pattern, using examples.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 5

Given a code block, identify and count tokens, including valid tokens and invalid token-like sequences under the stated language rules. Show a line-by-line breakdown.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 6

Very important: recognize tokens using regular expressions (RE), NFA and DFA. Practise keywords and identifiers in particular, including their patterns and automata.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 7

Very important: explain input buffering. Review the slide diagrams, begin/lookahead pointers, the two-buffer scheme and sentinels.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 8

Draw detailed transition diagrams for keywords/reserved words, identifiers, arithmetic operators, relational operators and logical operators. The syllabus also includes other common tokens.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 9

Show states, labelled transitions, the start state and accepting states. Include lookahead/retraction where the slide example requires it.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 10

Define grammar and context-free grammar (CFG). Identify terminals, non-terminals, production rules and the start symbol.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 11

Given a grammar and target string, perform leftmost and rightmost derivations. Show the intermediate steps clearly.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 12

Explain syntax analysis, the syntax analyzer’s role/responsibilities, the phases of syntax analysis and the role of parsing.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 13

Distinguish top-down and bottom-up parsing. Prepare recursive-descent parsing: one function per non-terminal, production choices and matching input.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 14

Define and detect left recursion. Distinguish direct and indirect left recursion.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 15

Explain why left recursion causes problems for a recursive-descent parser: a function calls itself again before consuming input, causing infinite recursion and possible stack overflow.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 16

Practise eliminating left recursion and transforming a left-recursive grammar into an equivalent non-left-recursive grammar. Show each transformation step and explain the resulting grammar.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Additional practice · Question 17

Handout practice example:

```text
Before: S → Sa | b
After: S → bS′
       S′ → aS′ | ε
```

Explain why both generate b followed by zero or more a symbols, and why the new form avoids the original recursive-descent problem.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt. The source labels this as additional handnote practice, not a topic explicitly singled out in the recorded final suggestion.

## CSE-303 · Undated · Exam suggestion · Question 18

Define both error types, their common causes and detection. Given a program containing both, list and classify each error correctly.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 19

Distinguish an invalid token from a grammatically invalid arrangement of valid tokens. A missing semicolon is a syntax error. Apply the stated language rules when judging token validity.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Additional practice · Question 20

Prepare parse-tree construction and ambiguity: demonstrate ambiguity with two distinct parse trees or two distinct leftmost/rightmost derivations for the same string. Review precedence, associativity and removing ambiguity as handnote self-study topics. These were not explicitly singled out in the recorded final suggestion.

Marks not specified in the source.
Source: Maruf_Sir_Part_A_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt. The source labels this as additional handnote practice, not a topic explicitly singled out in the recorded final suggestion.

## CSE-303 · Undated · Exam suggestion · Question 1

Relate grammar, syntax-directed translation, attributes and semantic rules to a given scenario.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 2

Identify synthesized and inherited attributes from a scenario or semantic rules. Classify an SDD as S-attributed or L-attributed.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 3

Explain the relationship between S- and L-attributed definitions, how each works, and their performance/evaluation differences, with examples.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 4

Explain synthesized attribute evaluation order and bottom-up evaluation; trace the computations.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 5

Build a symbol table. Explain how an SDD distributes attributes/type information and which attributes are synthesized or inherited.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 6

Given production rules and a string, draw a parse tree or annotated parse tree, calculate attribute values and write the relevant semantic rules.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 7

Explain from code/rules when an attribute is synthesized or inherited and how it is computed.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 8

Draw a dependency graph with arrow directions. Identify the attribute dependencies using the parse tree and explain the evaluation order.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 9

Justify grammar ambiguity and explain whether it is related to cycles in an attribute dependency graph.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 1.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 10

Explain its relationship with SDD, its purpose and why it supports optimization.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 11

Prepare three-address code (TAC), quadruples and triples. Choose the appropriate representation for a scenario and justify your choice.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 12

Prepare basic blocks, control-flow graphs and DAGs; show the relevant labels and dependencies.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 13

Explain why optimization is necessary.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 14

Identify suitable assembly/target-code optimization techniques and explain the reason for each change.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 15

Compare given loops or code segments. Choose an optimization based on the scenario and justify it.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 16

Prepare scenario-based multidimensional array problems with relevant rules/functions. The exact wording of this handwritten line is unclear.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt. The supplied checklist explicitly flags the underlying handwritten line as unclear; no more specific problem has been invented.

## CSE-303 · Undated · Exam suggestion · Question 17

From code/pseudocode, identify static and dynamic memory allocation and explain why each applies.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 18

Draw and trace activation records; identify which procedure activations are currently active and explain the execution process.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 19

Explain when stack allocation is effective. Choose the suitable runtime environment/storage allocation approach for a scenario and justify it.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 20

Practise finding errors in code and writing a grammar when required.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Exam suggestion · Question 21

Prepare parameter passing, especially call-by-value, with a definition, figure and example.

Marks not specified in the source.
Source: Kazy_Noor_Sir_Exam_Suggestions.pdf, pages 2.

Notes: This is a preparation prompt from the supplied suggestion checklist, not a past exam question. No year or marks are printed for this prompt.

## CSE-303 · Undated · Lecture practice · Question 1

Given the grammar:

```text
E → E + T | T
T → T * F | F
F → (E) | id
```

A. Identify the problem with this grammar.

B. Rewrite it into an equivalent grammar suitable for Recursive Descent Parsing.

C. Explain why the transformed grammar works.

Marks not specified in the source.
Source: Kazy Noor Sir Merged (1).pdf, pages 196.

Notes: An explicit practice exercise on PDF page 196 of the supplied merged slides. No date or marks are printed. The solution slide is not included in the question text.