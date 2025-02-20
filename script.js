/* Reset default styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}

/* CSS Variables for Consistency */
:root {
    --primary-color: #007BFF;
    --secondary-color: #0056b3;
    --background-light:rgb(244, 246, 248);
    --input-bg: #fff;
    --text-color: #333;
    --border-color: #ddd;
    --shadow-color: rgba(0, 0, 0, 0.1);
    --spacing-unit: 1rem;
    --radius: 10px;
}

/* Body */
body {
    background: linear-gradient(to bottom, #f0f4f8, #d9e2ec);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: var(--spacing-unit);
}

/* Main Container */
.container {
    max-width: 750px;
    width: 100%;
    background: var(--input-bg);
    border-radius: var(--radius);
    box-shadow: 0 5px 10px var(--shadow-color);
    padding: calc(var(--spacing-unit) * 2);
    text-align: center;
}

/* Headings */
h1 {
    color: var(--primary-color);
    font-size: 2rem;
    margin-bottom: var(--spacing-unit);
}

/* Form Styling */
.form-group {
    margin-bottom: var(--spacing-unit);
    text-align: left;
}

label {
    font-weight: 600;
    display: block;
    margin-bottom: 5px;
}

/* Input Fields */
input[type="file"],
input[type="number"] {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    background: var(--input-bg);
    font-size: 1rem;
    transition: 0.3s ease;
}

input[type="file"]:hover,
input[type="number"]:hover {
    border-color: var(--primary-color);
}

input[type="file"]:focus,
input[type="number"]:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
}

/* Buttons */
button {
    background: var(--primary-color);
    color: white;
    padding: 0.9rem;
    border: none;
    border-radius: var(--radius);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: 0.3s ease;
    width: 100%;
    box-shadow: 0 3px 6px var(--shadow-color);
}

button:hover {
    background: var(--secondary-color);
    transform: scale(1.02);
}

button:active {
    transform: scale(0.98);
}

/* Loading Animation */
#loading {
    display: none;
    color: #e67e22;
    font-weight: 500;
    margin-top: 1rem;
}

/* Output Section */
.output {
    display: none;
    margin-top: var(--spacing-unit);
    padding: var(--spacing-unit);
    border-radius: var(--radius);
    background: var(--input-bg);
    border: 1px solid var(--border-color);
}

.output h2 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: var(--spacing-unit);
}

/* Download Button */
#downloadBtn {
    background: #28a745;
    display: none;
}

#downloadBtn:hover {
    background: #218838;
}

/* Responsive Design */
@media (max-width: 600px) {
    .container {
        padding: var(--spacing-unit);
    }

    h1 {
        font-size: 1.5rem;
    }

    button {
        padding: 0.8rem;
        font-size: 0.9rem;
    }
}
