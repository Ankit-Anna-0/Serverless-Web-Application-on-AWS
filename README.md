#  Serverless Employee Management Web Application

![Screenshot_25-10-2025_11625_lucid app](https://github.com/user-attachments/assets/b1d160cd-67b4-41d5-9f03-34f4dd193c5d)


---

##  Overview

The **Serverless Employee Management Web Application** is a fully serverless, production-ready solution built using **AWS CloudFront**, **S3**, **API Gateway**, **Lambda**, and **DynamoDB**.  
It enables users to **upload, manage, and view employee data** seamlessly via a secure and scalable cloud-based interface.  

This project follows modern **serverless design principles**, ensuring zero server management, automatic scaling, and a pay-per-use cost model.

---

##  Architecture

[User]
↓
[Amazon CloudFront] — Global CDN Distribution & HTTPS
↓
[Amazon S3 Static Website Hosting] — (Frontend: HTML, CSS, JS)
↓
[Amazon API Gateway] — (REST API Endpoints for GET/POST)
↓
[AWS Lambda Functions]
• POST Lambda → Inserts employee data into DynamoDB
• GET Lambda → Retrieves employee data from DynamoDB
↓
[Amazon DynamoDB] — NoSQL Database storing employee records


---

##  Tech Stack

| Layer | Service | Purpose |
|--------|----------|----------|
| **Frontend Distribution** | Amazon CloudFront | Delivers the static web app globally with low latency and HTTPS |
| **Static Hosting** | Amazon S3 | Hosts static assets (HTML, CSS, JS) |
| **API Management** | Amazon API Gateway | Manages REST endpoints for GET and POST requests |
| **Compute Layer** | AWS Lambda | Serverless backend logic to process employee data |
| **Database** | Amazon DynamoDB | Stores employee records |
| **Security & Access Control** | AWS IAM | Manages permissions and access policies for Lambda functions |

---

##  Key Features

-  **Global CDN Delivery:** CloudFront ensures secure, low-latency access worldwide  
-  **Fully Serverless:** No servers to manage — scales automatically  
-  **Data Management:** Create and retrieve employee records in real time  
-  **Secure Access:** IAM roles for least-privilege permissions  
-  **Cost-Optimized:** Pay only for actual API requests and storage used  
-  **High Availability:** Built on AWS managed services with automatic fault tolerance  

---

##  Project Result

<img width="1755" height="848" alt="image" src="https://github.com/user-attachments/assets/4f1200a0-9112-4abb-9adc-a207b0caf606" />


---

## 🧾 Deployment Steps

### 1️ DynamoDB Setup
- Create a table named `employeesData`  
- Define **Partition Key**: `employeeID` (String)

### 2️ Lambda Setup
- Create two Lambda functions:
  - `postEmployeeLambda` → Inserts employee data  
  - `getEmployeeLambda` → Fetches employee records  
- Attach the following IAM policies:
  - `AmazonDynamoDBFullAccess`
  - `AWSLambdaBasicExecutionRole`

### 3️ API Gateway Configuration
- Create a new REST API
- Add **POST** and **GET** methods
- Integrate each method with the corresponding Lambda function
- Enable **Lambda Proxy Integration**
- Enable **CORS** for both methods
- Deploy API to a stage named `prod`

### 4️ Frontend Hosting
- Create an S3 bucket for static website hosting
- Upload `index.html` and `scripts.js`
- Enable **Static Website Hosting**
- Make the bucket public or use an **Origin Access Control (OAC)** if CloudFront is attached

### 5️ CloudFront Distribution
- Create a CloudFront distribution
- Set **Origin Domain** to your S3 website bucket
- Enable **Redirect HTTP to HTTPS**
- Add appropriate **CORS headers** if needed
- Use the CloudFront domain URL to access your application

### 6️ Test the Application
- Open your CloudFront domain in a browser  
- Add employee data and verify it appears in the table  
- Confirm successful API calls in your browser console  

---

##  Author

**Ankit Anna**  
 
 [ankitanna03@gmail.com](mailto:ankitanna03@gmail.com)  
 [LinkedIn](https://www.linkedin.com/in/ankit-anna/)

---

 **If you found this project helpful, please consider starring the repository!**




