document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const syllabusFile = document.getElementById('syllabus').files[0];
    const posFile = document.getElementById('pos').files[0];
    const numQuestions = document.getElementById('numQuestions').value;

    if (!syllabusFile || !posFile) {
        alert('Please upload both syllabus and POs files.');
        return;
    }

    const loadingDiv = document.getElementById('loading');
    loadingDiv.style.display = 'block';
    document.getElementById('output').style.display = 'none';

    try {
        const formData = new FormData();
        formData.append('syllabus', syllabusFile);
        formData.append('pos', posFile);
        formData.append('numQuestions', numQuestions);

        const response = await fetch('http://localhost:5000/generate', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Backend request failed');
        }

        const data = await response.json();
        displayQuestions(data.questions);

        const outputDiv = document.getElementById('output');
        const downloadBtn = document.getElementById('downloadBtn');
        outputDiv.style.display = 'block';
        downloadBtn.style.display = 'block';
        downloadBtn.onclick = function() {
            downloadQuestions(data.questions);
        };
    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        loadingDiv.style.display = 'none';
    }
});

// Display and download functions remain unchanged
function displayQuestions(questions) {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    questions.forEach(question => {
        const p = document.createElement('p');
        p.textContent = question;
        questionsDiv.appendChild(p);
    });
}

function downloadQuestions(questions) {
    const textContent = questions.join('\n');
    const blob = new Blob([textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'question_paper.txt';
    link.click();
}