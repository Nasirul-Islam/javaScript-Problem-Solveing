function picnicBudget(student) {
    const first100Student = 5000;
    const second100Student = 4000;
    const restStudent = 3000;

    if (student <= 100) {
        const costForFirst100 = student * first100Student;
        return costForFirst100;
    }
    else if (student <= 200) {
        const restStudent = student-100;
        const costForFirst100 = 100 * first100Student;
        const costForSecond100 = restStudent * second100Student;
        return (costForFirst100 + costForSecond100);
    }
    else if (student > 200) {
        const restStudentnum = student-200;
        const costForFirst100 = 100 * first100Student;
        const costForSecond100 = 100 * second100Student;
        const costForRestStudent = restStudentnum * restStudent;
        return (costForFirst100 + costForSecond100 + costForRestStudent);
    }

}

const result = picnicBudget(300);

console.log(result);