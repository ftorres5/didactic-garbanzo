# Block 34A: Database Abstractions with Prisma

This exercise will allow you to practice Prisma syntax and code for various use cases. 

1. Create a `Student` entity with the following characteristics: student ID, name, course ID, course name, and cohort.

<details>
<summary>Show Answer</summary>

[Docs](https://www.prisma.io/docs/orm/prisma-schema/data-model/models#defining-attributes)

```js
model Student {
  studentId     Int      @id
  name          String
  courseId      Int
  courseName    String   
  cohort        String
}
```
</details>


2.  Modify the `Student` entity to auto-assign values to the student_id field. Hint: Add field attributes to the student_id field. 

<details>
<summary>Show Answer</summary>

[Docs](https://www.prisma.io/docs/orm/reference/prisma-schema-reference#examples-19)

```js
model Student {
  studentId     Int      @id @default(autoincrement())
  name          String
  courseId      Int
  courseName    String   
  cohort        String
}
```
</details>

3.   Vanessa Johnson (Student ID: 141) wants to change her cohort from Cohort 1 to Cohort 2. Write the Prisma command to update the Student data table.

<details>
<summary>Show Answer</summary>

[Docs](https://www.prisma.io/docs/orm/prisma-client/queries/crud#update)

```js
const update_student_cohort = await prisma.student.update({
  where: {
    student_id: 141,
  },
  data: {
    cohort: "Cohort 2",
  },
});
```
</details>

4. Write the command to close Prisma Client to release the connection to the database. 

<details>
<summary>Show Answer</summary>

[Docs](https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections/connection-management#disconnect)

```js
await prisma.$disconnect(); 
```
</details>