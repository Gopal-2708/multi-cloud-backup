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
.  public/
.  .  index.html
.  screenshots/
.  .  Azure.png
.  .  Gcp.png
.  .  Gcp and Azure.png
.  README.md
.  firebase.json
.  .firebaserc
.  database.rules.json

---

## 🛡️ Why It’s Called a Backup System

Although the current version involves **manual file uploads**, it qualifies as a backup system because:

- Files are stored in **multiple independent cloud providers** (Azure & GCP).
- This ensures **redundancy** — if one provider fails, the file is still safe on the other.
- The app can be extended to **automatically log uploads** using Firebase Realtime Database.
- Future scope includes scheduling automatic backups and storing file history.

This structure meets the foundational goal of **data backup: storing reliable, redundant copies**.

---

## 🙋‍♂️ Made By

👨‍🎓 **Gopal Prusty**  
🎓 Student, **Electronics and Computer Science Engineering**  
🏫 Vidyalankar Institute of Technology


---

