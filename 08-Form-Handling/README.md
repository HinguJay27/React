# 📝 08 - Form Handling in React JS

Learn how to handle forms in React using `useState`, `onChange`, `onSubmit`, form validation, and conditional rendering.

## 📌 Overview

Form handling is an essential concept in React JS. It allows us to collect user input, manage form data, validate information, and process form submissions.

In this module, we build a **Student Registration Form** using React.

## 🎯 Learning Objectives

- Understand form handling in React.
- Use `useState()` to store form data.
- Handle input changes using `onChange`.
- Handle form submission using `onSubmit`.
- Understand `event.target.value`.
- Prevent default form submission using `event.preventDefault()`.
- Update objects using the spread operator (`...`).
- Perform basic form validation.
- Display submitted data using conditional rendering (`&&`).

## 📂 Project Structure

```text
08-Form-Handling/
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 📖 Important Concepts

### 1. Form Handling

**Definition:** Form handling is the process of collecting, managing, validating, and submitting user input in a React application.

Examples include login forms, registration forms, contact forms, and search forms.

### 2. useState()

The `useState()` Hook allows a component to store and update data.

```jsx
const [student, setStudent] = useState({
  name: "",
  email: "",
  course: "",
});
```

- `student` stores the form data.
- `setStudent` updates the state.
- The initial values are empty strings.

### 3. onChange Event

The `onChange` event handles changes made by the user in an input field.

```jsx
<input
  type="text"
  value={student.name}
  onChange={(event) =>
    setStudent({
      ...student,
      name: event.target.value,
    })
  }
/>
```

**Important points:**

- `onChange` handles input changes.
- `event.target.value` retrieves the current input value.
- `...student` preserves the other properties.
- `setStudent()` updates the state.

### 4. onSubmit Event

The `onSubmit` event handles form submission.

```jsx
function handleSubmit(event) {
  event.preventDefault();

  setSubmittedData({ ...student });
}
```

The `event.preventDefault()` method prevents the browser's default form submission behavior, allowing React to process the form without a page reload.

In a complete form, validate the fields before saving the submitted data.

### 5. Form Validation

Form validation checks whether the entered information meets the application's requirements.

```jsx
if (
  !student.name.trim() ||
  !student.email.trim() ||
  !student.course
) {
  alert("Please fill in all fields.");
  return;
}
```

This example checks for empty fields. Production applications should also perform appropriate email validation and server-side validation.

### 6. Spread Operator (`...`)

The spread operator copies the existing properties into a new object.

```jsx
setStudent({
  ...student,
  name: event.target.value,
});
```

It updates the name while preserving the existing email and course values.

### 7. Conditional Rendering

Conditional rendering displays UI elements when a specified condition is truthy.

```jsx
{submittedData && (
  <div className="result">
    <h2>Registration Successful!</h2>
    <p>Name: {submittedData.name}</p>
    <p>Email: {submittedData.email}</p>
    <p>Course: {submittedData.course}</p>
  </div>
)}
```

The result is displayed only after valid form data has been submitted.

## 🛠️ Mini Project: Student Registration Form

### Features

- Student name input.
- Email address input.
- Course selection using a dropdown.
- Basic form validation.
- Registration button.
- Success message after submission.
- Display submitted student details.

### Expected Output

```text
Student Registration

Student Name: [Enter your name]
Email Address: [Enter your email]
Select Course: [Choose a course]

[Register]

Registration Successful!

Name: Jay
Email: jay@example.com
Course: React JS
```

The result appears after the user submits valid information.

## ▶️ How to Run the Project

**Step 1:** Open the project folder in VS Code.

**Step 2:** Install dependencies.

```bash
npm install
```

**Step 3:** Start the development server.

```bash
npm run dev
```

**Step 4:** Open the local URL displayed in the terminal, usually `http://localhost:5173`.

## 💻 Practice Tasks

- [ ] Add a phone number field.
- [ ] Add a gender dropdown.
- [ ] Add a password field.
- [ ] Validate all required fields.
- [ ] Add a Reset button.
- [ ] Display an appropriate success message.
- [ ] Improve the form's responsive CSS.

## 🎤 Interview Questions and Answers

**Q1. What is form handling in React?**

Form handling is the process of collecting, managing, validating, and submitting user input.

**Q2. What is the purpose of `useState()`?**

It allows functional components to store and update state.

**Q3. What is the difference between `onChange` and `onSubmit`?**

`onChange` handles changes to a form field, whereas `onSubmit` handles submission of the form.

**Q4. What does `event.target.value` return?**

It returns the current value of the event's target form element.

**Q5. Why is `event.preventDefault()` used?**

It prevents the browser's default form submission behavior, such as reloading the page.

**Q6. Why do we use the spread operator when updating form state?**

It preserves the other properties of an object while allowing a specific property to be updated.

**Q7. What is conditional rendering?**

Conditional rendering means displaying UI elements based on a condition.

**Q8. What does `submittedData && (...)` mean?**

It renders the JSX on the right when `submittedData` is truthy.

**Q9. What is form validation?**

Form validation checks whether user input meets specified requirements.

**Q10. Does this project save registration data permanently?**

No. The current project only manages data in the browser's React state. Permanent storage requires a backend or database.

## 📚 Key Takeaways

After completing this module, you should understand:

- React form handling fundamentals.
- Managing input values with state.
- Handling form events.
- Validating user input.
- Submitting and displaying form data.
- Conditional rendering in React.



**Module:** 08 - Form Handling
