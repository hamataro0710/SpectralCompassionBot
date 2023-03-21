# Backend Server

This is the backend server for the Personalized AI Web App. It uses Flask and integrates with the GPT API.

## Setup

1. Install Python 3.7 or higher and create a virtual environment.
```bash
python3 -m venv venv
```
2. Activate the virtual environment:
- On macOS and Linux:
```bash
source venv/bin/activate
```
- On Windows
```bash
.\venv\Scripts\activate
```
3. Install the required packages:
```bash
pip install -r requirements.txt
```

4. Set up the GPT API by installing the openai package and setting your API key as an environment variable:
```bash
export OPENAI_API_KEY="your-api-key"
```
- On Windows
```bash
set OPENAI_API_KEY="your-api-key"
```
5. Set the FLASK_APP environment variable to point to the Flask application file:
```bash
export FLASK_APP=app.py
```
- On Windows
```bash
set FLASK_APP=app.py
```


In the terminal, navigate to the `backend` directory and run the following command:

```
flask run --host localhost --port 8000
```
This will start the backend server at http://localhost:8000/.
