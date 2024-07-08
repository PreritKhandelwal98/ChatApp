# ChatApp

A real-time chat application built using React for the frontend, Node.js for the backend, and MongoDB for storing chat data. The application uses Socket.io for establishing real-time communication between users and Cloudinary for storing images and videos.

## Features

- User registration and login
- Real-time chat with any registered user
- Sharing photos and videos in chat

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express
- **Real-time Communication:** Socket.io
- **Database:** MongoDB
- **Media Storage:** Cloudinary

### Prerequisites

- Node.js
- MongoDB
- Cloudinary account

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chatapp.git
   cd chatapp/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` directory and add the following environment variable:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

4. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new account or log in with existing credentials.
3. Start chatting with other registered users.
4. Share photos and videos by uploading them. The media will be stored in Cloudinary, and the links will be saved in the database.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Socket.io](https://socket.io/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary](https://cloudinary.com/)
