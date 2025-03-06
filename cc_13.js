// Task 2 - Employee Cards Dynamic Addition

// (Task 2) - Creating the function to build an employee card

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

    // Task 4 - Employee Card Removal with Event Bubbling

    // (Task 4) - Adding event.stopPropagation to prevent the event from bubbling to the container
    
    removeButton.addEventListener('click', function(event) {
        event.stopPropagation();
        employeeCard.remove();
    });


    // Creating a employee dashboard to put the employees inside the container

    const container = document.getElementById('employeeContainer');
    container.appendChild(employeeCard);

    employeeCard.appendChild(employeeName);
    employeeCard.appendChild(employeePosition);
    employeeCard.appendChild(removeButton);
}

// (Task 2) - Adding two employees to the dashboard

addEmployeeCard('Alice Johnson', 'Engineer');
addEmployeeCard('John Smith', 'Manager');

// (Task 4) - Console-logging the employee card if the cursor is anywhere inside the employee card and is clicked

const container = document.getElementById('employeeContainer')
container.addEventListener('click', function(event){
    if (event.target.classList.contains('employee-card')) {
        console.log('Employee card clicked')
    }
})





// Task 3 - Bulk Update on Employee Cards

// Creating a function to update the appearance of the employee dashboard, which adds a blue border around the employee's name

function updateEmployeeCards() {
    const employeeCards = document.querySelectorAll('.employee-card');

    const employeeCardsArray = Array.from(employeeCards);

    employeeCardsArray.forEach(card => {
        card.style.backgroundColor = '#f0f8ff';
        card.style.border = '2px solid #0073e6';
    });
}

// Makes the changes above take effect immediately

setTimeout(updateEmployeeCards, 0);