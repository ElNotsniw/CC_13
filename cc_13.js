// Task 2 - Employee Cards Dynamic Addition

// Creating the function to build an employee card

function addEmployeeCard(name, position) {
    const employeeCard = document.createElement('div')
    employeeCard.setAttribute('class', 'employee-card');

    const employeeName = document.createElement('h2');
    employeeName.textContent = name;

    const employeePosition = document.createElement('p');
    employeePosition.textContent = position;

    // Creating a removeButton to remove any employee listed

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.setAttribute('class', 'remove-btn')

    removeButton.addEventListener('click', function() {
        employeeCard.remove();
    });

    // Creating a employee dashboard to put the employees inside the container

    const container = document.getElementById('employeeContainer');
    container.appendChild(employeeCard);

    employeeCard.appendChild(employeeName);
    employeeCard.appendChild(employeePosition);
    employeeCard.appendChild(removeButton);
}

// Adding two employees to the dashboard

addEmployeeCard('Alice Johnson', 'Engineer');
addEmployeeCard('John Smith', 'Manager');