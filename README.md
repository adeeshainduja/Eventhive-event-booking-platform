# 🎟️ EventHive - Modern Event Booking & Venue Management Platform

[![EventHive](https://img.shields.io/badge/EventHive-Premium-purple?style=for-the-badge&logo=react)](https://github.com/adeeshainduja/eventhive)

**EventHive** is a modern, full-stack web application designed to simplify event discovery, ticket booking, venue management, and event administration. Built with a focus on security, premium UI/UX, and role-based access control, it provides a smooth digital platform for attendees, organizers, venue owners, and administrators.

---

## ✨ Key Features

| 🛡️ Security First | 💎 Premium Design | 📊 Powerful Admin |
| :--- | :--- | :--- |
| **Role-Based Access Control**: Separate permissions for attendees, organizers, venue owners, and admins. | **Modern Glassmorphism UI**: Clean interface with blur effects, cards, and smooth layouts. | **Real-time Analytics**: Track ticket sales, event performance, and revenue. |
| **Secure Ticket Booking**: Backend ticket price verification and seat availability checks. | **Dynamic Dark Mode**: Users can switch between light and dark themes. | **Event Moderation**: Admin approval workflow for public event publishing. |
| **JWT Authentication**: Secure login and protected user sessions. | **Micro-animations**: Smooth hover effects, transitions, and interactive dashboards. | **User & Venue Management**: Manage users, events, venues, bookings, and payments. |

---

## 👥 User Roles & Workflows

- **👤 Attendee**: Browse events, view details, book tickets, save favorite events, and download e-tickets.
- **🎤 Event Organizer**: Create events, manage ticket categories, view bookings, and track event revenue.
- **🏟️ Venue Owner**: List venues, manage availability, approve venue booking requests, and monitor venue performance.
- **🛠️ Admin**: Manage the entire platform, approve/reject events, verify venues, and control user roles.
- **💳 Payment Manager**: Monitor ticket payments, refunds, commissions, and revenue reports.
- **🔍 Event Inspector**: Verifies event information, venue authenticity, and safety requirements before approval.

---

## 🛠️ Technology Stack

### **Frontend**
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB) **React.js v18.2**
- ![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS v3.4**
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat&logo=react-router&logoColor=white) **React Router v6.14**
- ![Chart.js](https://img.shields.io/badge/chart.js-F5788D.svg?style=flat&logo=chart.js&logoColor=white) **Chart.js v4.3**

### **Backend**
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white) **Node.js v16+** with **Express.js v4.18**
- ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=flat&logo=mysql&logoColor=white) **MySQL 8.x** with **Sequelize ORM v6.32**
- ![JSON Web Tokens](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens) **JWT Auth** (Secure sessions)
- ![Multer](https://img.shields.io/badge/Multer-orange?style=flat) **Multer** (Event poster and venue image uploads)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16.x or higher)
- MySQL Server 8.x

### Installation

1. **Clone the Project**
   ```bash
   git clone https://github.com/adeeshainduja/eventhive.git
   cd eventhive
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Configure your .env file with your local MySQL credentials
   npm run dev
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## 🔐 Security & Functional Highlights

This project focuses on secure and reliable event management by implementing:

- **✅ Role Injection Protection**: Prevents users from self-assigning restricted roles such as admin or payment manager.
- **✅ Ticket Price Integrity**: Ticket prices are verified from the backend to prevent client-side manipulation.
- **✅ Seat Availability Control**: Prevents overbooking by checking available seats before confirming tickets.
- **✅ Event Moderation Workflow**: Events must be approved before appearing publicly on the platform.
- **✅ Venue Verification**: Venue owners can request verification, and inspectors/admins can approve verified badges.
- **✅ Data Integrity**: Uses proper relationships and cascade rules to maintain clean event, booking, and payment records.

---

## 📌 Main Modules

- **Authentication Module**: Register, login, JWT sessions, protected routes.
- **Event Management Module**: Create, update, publish, approve, and reject events.
- **Venue Management Module**: Venue listing, availability management, and verification.
- **Ticket Booking Module**: Ticket selection, seat validation, booking confirmation, and e-ticket generation.
- **Payment Module**: Payment status tracking, revenue reports, and refund handling.
- **Admin Dashboard**: Analytics, user management, event moderation, and system overview.

---

<p align="center">Made with ❤️ for smarter event experiences</p>
