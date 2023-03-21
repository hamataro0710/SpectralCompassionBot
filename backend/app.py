from flask import Flask, request, jsonify, send_file
import openai
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # CORS を設定（すべてのオリジンを許可）
app.config['CORS_HEADERS'] = 'Content-Type'
openai.api_key = "your_openai_api_key"

@app.route('/api/generate-response', methods=['POST'])
def generate_response():
    user_input = request.json['user_input']
    model_engine = "text-davinci-002"

    # Build the prompt based on conversation history
    prompt = ""
    for message in conversation_history:
        prompt += f"{message['role'].capitalize()}: {message['content']}\n"
    prompt += f"User: {user_input}\nAI:"
    # response = openai.Completion.create(
    #     engine=model_engine,
    #     prompt=prompt,
    #     max_tokens=150,
    #     n=1,
    #     stop=None,
    #     temperature=0.5,
    # )
    # ai_output = response.choices[0].text.strip()
    ai_output = "API key is not set yet."
    return jsonify({"ai_output": ai_output})

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    file = request.files['image']
    file.save(f"uploaded_images/{file.filename}")
    # 画像解析や処理を行い、生成された画像を保存する（ここでは仮に同じ画像を返す）
    generated_image_path = f"generated_images/{file.filename}"
    file.save(generated_image_path)
    return jsonify({"generated_image_path": generated_image_path})

@app.route('/api/get-image/<filename>')
def get_image(filename):
    return send_file(f"generated_images/{filename}", mimetype='image/jpeg')

if __name__ == "__main__":
    app.run(debug=True, host='localhost', port=8000)
