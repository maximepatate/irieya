from flask import Flask, jsonify, request, session
from flask_cors import CORS
import pyrebase


app = Flask(__name__)
CORS(app)

config = {
    "apiKey": "AIzaSyD7xWJC45Iw9n1Toh-RN_RRDHVMI3zkNNE",
    "authDomain": "irieya.firebaseapp.com",
    "projectId": "irieya",
    "storageBucket": "irieya.appspot.com",
    "messagingSenderId": "327134134643",
    "appId": "1:327134134643:web:b9eaad11a052fc1cefc506",
    "measurementId": "G-68BMTBXKZ6",
    "databaseURL": "https://irieya-default-rtdb.europe-west1.firebasedatabase.app/"  
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
db = firebase.database()

app.secret_key = 'secret'


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()  
    email = data.get('email')
    password = data.get('password')
    try:
        user = auth.sign_in_with_email_and_password(email, password)
        session['user_id'] = user['localId']
        print("Session data after login:", session)  
        print("User ID after login:", session.get("user_id"))  
        

        return jsonify({"status": "success", "user": user}), 200
    except Exception as e:
        return jsonify({"status": "fail", "message": str(e)}), 401


@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    print("Received data:", data)

    email = data.get('email')
    password = data.get('password')
    age = data.get('age')
    name = data.get('name')
    firstName = data.get('firstName')
    pseudo = data.get('pseudo')

    try:
        user = auth.create_user_with_email_and_password(email, password)
        print("User created:", user)

        user_id = user['localId'] 

        db.child("users").child(user_id).set({
            'name': name,
            'firstName': firstName,
            'age': age,
            'email': email,
            'pseudo': pseudo,
            'password': password,
        })
        print("Data saved to Firebase")
        print("Attempting to log in user...")
        login_user = auth.sign_in_with_email_and_password(email, password)
        session['user_id'] = login_user['localId']  # Set the session with user ID
        print("Session set with user ID after signup:", session['user_id'])

        return jsonify({"status": "success", "user": user}), 200
    
    except Exception as e:
        error_message = str(e)
        print("Error:", error_message)
        if 'EMAIL_EXISTS' in error_message:
            return jsonify({"status": "fail", "message": "Email already exists."}), 400
        elif 'WEAK_PASSWORD' in error_message:
            return jsonify({"status": "fail", "message": "Password is too weak."}), 400
        else:
            return jsonify({"status": "fail", "message": "An error occurred: " + error_message}), 500


@app.route('/profile', methods=['GET'])
def get_profile():
    user_id = session.get("user_id") 
    print(f"Session user_id: {user_id}") 

    try:
        user_data = db.child("users").child(user_id).get().val()
        print(f"Fetched user_data from Firebase: {user_data}")
        
        if user_data:
            response = jsonify(user_data)
            print(f"Response being returned: {response}")  
            return response, 200
        else:
            error_message = {"error": "User not found"}
            print(f"Error: {error_message}")  
            return jsonify(error_message), 404
    except Exception as e:
        error_message = {"error": str(e)}
        print(f"Error during fetching profile: {error_message}")  
        return jsonify(error_message), 500


@app.route('/profile', methods=['PUT'])
def update_profile():
    user_id = session.get("user_id")
    print(f"Session user_id for update: {user_id}")  

    try:
        updated_data = request.get_json()
        print(f"Data received from frontend for update: {updated_data}")  
        
        db.child("users").child(user_id).update(updated_data)
        response = {"message": "Profile updated successfully"}
        print(f"Update response being returned: {response}") 
        return jsonify(response), 200
    except Exception as e:
        error_message = {"error": str(e)}
        print(f"Error during profile update: {error_message}") 
        return jsonify(error_message), 500





@app.route('/', methods=['GET'])
def index():
    return "hello world"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)

