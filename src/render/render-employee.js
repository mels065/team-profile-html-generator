function renderEmployee(employee) {
    const name = employee.getName();
    const role = employee.getRole();
    const id = employee.getId();
    const email = employee.getEmail();

    return `
    <div class="employee-card">
        <header>
            <h2 class="name">${name}</h2>
            <p class="role"><i class="fa ${renderIcon(role)}"></i>${role}</p>
        </header>
        <section class="content">
            <ul>
                <li>ID: ${id}</li>
                <li>Email: <a href="mailto:${email}">${email}</a></li>
                <li>${renderUniqueProperty(employee, role)}</li>
            </ul>
        </section>
    </div>
    `;
}

function renderIcon(role) {
    switch(role) {
        case "Manager": {
            return "fa-mug-hot";
        }
        case "Engineer": {
            return "fa-glasses";
        }
        case "Intern": {
            return "fa-user-graduate";
        }
        default: {
            return "";
        }
    }
}

function renderUniqueProperty(employee, role) {
    switch(role) {
        case "Manager": {
            return `Office Number: ${employee.getOfficeNumber()}`
        }
        case "Engineer": {
            return `GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`
        }
        case "Intern": {
            return `School: ${employee.getSchool()}`
        }
        default: {
            return ""
        }
    }
}

module.exports = renderEmployee;
