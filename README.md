## 🛡️ React Auth Context Example (TypeScript)

A simple and clean example of how to create a **global authentication flow** using **React + TypeScript**, without prop drilling.

---

### 🧠 Objective

Create a basic authentication flow using **React Context API**, avoiding the need to pass `user`, `login`, or `logout` through props.  
Instead, the application uses a **global context (`AuthContext`)**, which can be accessed by any component within the provider.




---

### 📂 Project Structure

```bash
src/
├── App.tsx                  # App entry point
├── AuthContext.tsx          # Context + Provider + useAuth hook
└── components/
    ├── LoginForm.tsx        # Login screen
    └── Dashboard.tsx        # Welcome screen (after login)
```

### 🌳 Component Tree with Context Flow
```
<App>
└── <AuthProvider>                 // provides user, login, logout
    └── <AppContent>              // uses useAuth()
        ├── <LoginForm />         // calls login()
        └── <Dashboard />         // shows user + calls logout()
```
    

### 🚀 How to Run
1. Clone this repository

2. Install dependencies:
```
npm install
```
3. Start the development server:
```
npm run dev
```
4. Open in browser:
```
http://localhost:5173
```   

### 🔍 Key Concepts
✅ React Context API for global state

✅ Custom hook (useAuth) to safely access context

✅ Conditional rendering based on user

✅ Clean component separation


### 🔐 What’s Inside AuthContext.tsx
. user: string | null

. login(name: string): sets user

. logout(): clears user

. useAuth(): safely reads context (throws error if used outside provider)


### 💡 Good Practices
. Components that need shared state should not pass it via props — they consume it via custom hook.

. useAuth() encapsulates useContext() and validates provider presence.

. File naming and structure follows clear, maintainable conventions.


### 📜 License
MIT – feel free to use, improve, and share.


### Made with 💙 by Peter Viegas

