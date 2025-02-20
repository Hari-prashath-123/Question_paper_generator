from flask import Flask, request, jsonify
from flask_cors import CORS
import PyPDF2
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/generate', methods=['POST'])
def generate_questions():
    syllabus_file = request.files['syllabus']
    pos_file = request.files['pos']
    num_questions = int(request.form['numQuestions'])

    syllabus_text = extract_text(syllabus_file)
    pos_text = extract_text(pos_file)

    api_key = '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'
    model = 'mistralai/Mixtral-8x7B-Instruct-v0.1'
    url = f'https://api-inference.huggingface.co/models/{model}'
    prompt = f"""
        Based on the following syllabus and program outcomes, generate {num_questions} college-level questions:
        Syllabus: {syllabus_text}
        Program Outcomes: {pos_text}
        Format each question as "Q<number>: <question text>".
        Ensure questions are clear, relevant, and varied.
    """
    headers = {'Authorization': f'Bearer {api_key}', 'Content-Type': 'application/json'}
    response = requests.post(url, headers=headers, json={'inputs': prompt, 'parameters': {'max_length': 500}})
    
    if response.status_code != 200:
        return jsonify({'error': f'API error: {response.text}'}), response.status_code

    questions = response.json()[0]['generated_text'].strip().split('\n')
    return jsonify({'questions': [q for q in questions if q.startswith('Q')]})

def extract_text(file):
    reader = PyPDF2.PdfReader(file)
    text = ''
    for page in reader.pages:
        text += page.extract_text() or ''
    return text

if __name__ == '__main__':
    app.run(debug=True, port=5000)