// Self-invoking function
(function() {
    // Personal Information
    const personalInfo = [
        { name: "Ayush Mittal", age: 23, dob: "01/01/2000", email: "abc@example.com", company: "Gemini solutions" },
        { name: "Abhishek sharma", age: 22, dob: "02/15/2001", email: "abd@example.com", company: "Gemini solutions" },
        { name: "Gaurav Arora", age: 24, dob: "03/20/1999", email: "gaurav@example.com", company: "Gemini solutions" },
        { name: "Aman gupta", age: 22, dob: "04/10/2001", email: "gupta@example.com", company: "Gemini solutions" },
        { name: "Priya singh", age: 24, dob: "05/05/1999", email: "singh@example.com", company: "Gemini solutions" },
    ];

    // Get reference to body element
    const body = document.querySelector("body");

    // Create table element
    const table = document.createElement("table");
    table.setAttribute("border", "1");

    // Create table header row
    const headerRow = document.createElement("tr");

    const headers = ["Name", "Age", "DOB", "Email", "Company"];
    headers.forEach((header) => {
        const th = document.createElement("th");
        th.style.fontWeight = "bold";
        const text = document.createTextNode(header);
        th.appendChild(text);
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);

    // Create table body
    const tableBody = document.createElement("tbody");

    personalInfo.forEach((info) => {
        const tr = document.createElement("tr");
        const name = document.createElement("td");
        name.appendChild(document.createTextNode(info.name));
        tr.appendChild(name);

        const age = document.createElement("td");
        age.appendChild(document.createTextNode(info.age));
        tr.appendChild(age);

        const dob = document.createElement("td");
        dob.appendChild(document.createTextNode(info.dob));
        tr.appendChild(dob);

        const email = document.createElement("td");
        email.appendChild(document.createTextNode(info.email));
        tr.appendChild(email);

        const company = document.createElement("td");
        company.appendChild(document.createTextNode(info.company));
        tr.appendChild(company);

        tableBody.appendChild(tr);
    });

    table.appendChild(tableBody);
    body.appendChild(table);
})();