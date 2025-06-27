# multi-cloud-backup
A multi-cloud file backup system using AWS, Azure, GCP
# ☁️ Multi-Cloud File Backup System

A ✨ beginner-friendly cloud project ✨ that lets users upload files to **Azure Blob Storage** and **Google Cloud Storage (GCP)** — all from a simple web interface. It's fully hosted on **Firebase Hosting**, using just **HTML + JavaScript** — no backend needed!

---

## 🚀 Features

✅ Upload files directly to:

- ☁️ **Azure Blob Storage**  
- ☁️ **Google Cloud Storage (GCP)**  
- 🔄 Future scope: log backups using Firebase Realtime Database  

---

## 🌍 Live Project

👉 [Visit the Web App](https://multi-cloud-backup.web.app)  
✅ Try uploading files to both cloud platforms!

---

## 🖼️ Screenshots

| 🔵 Azure Upload | 🟢 GCP Upload |
|----------------|--------------|
| ![Azure](./screenshots/azure.png) | ![GCP](./screenshots/gcp.png) |

📝 _Screenshots are taken from the working version of the app._

---

## 🔧 How It Works (Short Summary)

1. You choose a file.
2. The frontend (HTML/JS) uploads it directly to the cloud using secure pre-generated access links.
3. No backend server is needed.
4. Hosted entirely on Firebase 🔥

---

## 💻 Tech Stack

| Layer        | Technology            |
|--------------|------------------------|
| Frontend     | HTML, JavaScript       |
| Cloud 1      | Azure Blob Storage     |
| Cloud 2      | Google Cloud Storage   |
| Hosting      | Firebase Hosting       |
| (Optional)   | Firebase Realtime DB   |

---

## 📁 Folder Structure
multi-cloud-backup/
├── public/
│ └── index.html # Main frontend app
├── screenshots/ # Azure & GCP proof
│ ├── azure.png
│ └── gcp.png
├── firebase.json # Firebase Hosting config
├── README.md # You're here
└── .firebaserc # Firebase project info
