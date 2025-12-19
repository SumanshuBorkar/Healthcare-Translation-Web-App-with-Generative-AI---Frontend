# Medical Translator Application - Code Documentation

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Code Structure](#code-structure)
3. [Frontend Documentation](#frontend-documentation)
4. [Backend Documentation](#backend-documentation)
5. [AI Tools Integration](#ai-tools-integration)
6. [Security Considerations](#security-considerations)
7. [API Reference](#api-reference)
8. [State Management](#state-management)

---

## 🏗️ Architecture Overview

### System Architecture

    ### Sequence Diagram

<p align="center">
  <img src="https://uml.planttext.com/plantuml/svg/TLJ1Rjim3BqRy3yGFGm9K2SPYg503aFJj5kpfKiGfzjb5rKc4g6AfSeoslxzI5jsRMyxXPOUdnx9nrmLNZXVddGSUUKrmXqAxOzIE8Iz4tcXXLScXr_u20jh8O4KdqlC9SAD4WSdJd4KHq9wu-2XG1T7blYKL5Ra7iwMMY7zNZlpGfTd88ec7W1tI1pmnPdSOvxzpaTRupny-dXvCQwoglj13cjABQ8ymcAxgc3rvm1t-seT5lIoa4zTyjbiLfE7Yw7spIw5UvLb6b-e7HMIpuRAXKTOgvFoeK0-663kK9_GK-jawPH_gs3rsG3ORVbjVb1v_MmT3h1VdNc6zEPxXU0FYly5MQnWgKt9TQ_Nudu15vCBk9nTZzl4nOg7oEE3v7Cp89XpDyKJJEbvgWts-4focri2rZERmzg831vMy06MmlgIdBFARUcPiuOGDinf7eB4cuJvO6Gi5olqE8u29kbGL_sGJZrY5jxlS8Qn4MoxIVSm5LPDVMWWKhMU4iwXCAMJk1RvuHp8wmVq78-PgI4WhchOS_WfjCfue1kdgEKmudF2LjT9xys5rkO5im5FvOOvB8yed-3T6gIQupx3ZZUfyFzX2fwPyzhfjzOxlA0PkYAE0g3F6Mu9xWTyjOUuMSv8NeUkruAKE0eemWT7SJ52Qv17uIVIdAn6pYWcqY6LDABcDCYGH7uZ7VlzDkMrRAZ_SX_B2_2azroZgnrvoz-jujvag8cyi2G6tuNtkj4liIXrloaTetrBDpzQDlPEAu8rZ5lNzVPZHooy64F1xOuG-g66tgZ2Ql7MKN55oTN_xXy0" alt="Logo" width="100%"/>
</p>

    ### Class Diagram 

<p align="center">
  <img src="https://uml.planttext.com/plantuml/svg/bLXBRnit4BuBq7yWSgbIHwvH7me8WH57JXitKcB8Cd88Sg1snnAJNN93ScsdHVvxPxWlSfVhk2T9d24vyyqt3-gLiLpRCi_O6bAHy8njDPScurPfjiouCUn2yBtc-NGodVp2_jHAMf1f9GCpdHGy-Shtm9wreja6U6AVFsF_JYUC9UwG-dJlS2TaRCw4MGc36uNSBzXEgGouR6IMz1Cj2hjWncfK2IHu4gHRU1X8XInAk-9qOYXGfHsH2DCO5pC4j5QwlyKSrFqrMDfW1Ziq96elXHLARk1smQuBWEImwLRxdk3ILkI05Zfz-gvhdNdrUTHvJKxFhEVvymMxqYeN1bxUAP6UjJlKVfz1Y_1iJCyKmBzkErD8aHGQUOA-wMqR3jENctjU4AmbSg4ddBC3bsa66nyHKsPs1dSWxSzqtn3q0zKVnCU6NHzXLy5xVdNP4ElbozTQtHlG31VFpfhZ4oIfaAKgXn4JI5yjyigseJWRagQDYykY0IHM5Vqr9VMOwoI4gA-rJAQpCG0gxw-_Iti08ypZ6Co3cCzAYsvpcK0_uhIMFVNAc-QKd-1l8zaQGPPf9Fc2oJBVjLd02c6JGt_nJcLb7gYYcJ-gQlKQQrEyM3MIsNkLml4NyzkRXm8ZOyAgLIzUWxu3hsBnebWqijOsfMtVjBrMtvQPm60ks5_jzwTn1snPh4MAgN3FDKJ56omL_LmxglF7psGDtrvWEJ9HnRV0CtjO7Y3v6bCCGjxPi-OIOTHTh3jHX6PaxFB3vdg6oNShzZ5VtaAMGno53J9X9N8Hb_vjbBpY6dasobGFYoLclrPPvaVpqIWvRb9DMsFG0Jl0AlWzMfy9onACzSgjPmQMc4990str1NcWtEdgAyMDKiNRN-L7k-MEPoB5cpRLHTw5NjqASEYSywaiti7tVlBjk86RpMgisYKQyEBbWTkboeiCdBK5no71UFQ6yjRk35lH6fCkCtulSYkVFfyDZ0xnxWnlulAUvu2r6iKrG2zO05HdzHxiojk4P4ofvFakEgNhig1aXZHePvNQfyy30rjw-jRT2vcg-xNfLuISF_IMEb0f1IkUY-9vh_iSKLgY_PquNfCXARMmttlfsLtIaERSXNqslCPmQhh_m2KDK0q3GuYSeIwTbHPx8GUCgull-IMxGhhVAfr72Z2HqLS9wYu9WrR-vW7XbJYTKYaMIQJ8907RZ9SE8G_ZDApfDsJVYg_FdR2BRKu_BzD-pj1WWN1zT97lnzr2ZkpbjjJzfkRHKv86p0fCYIA4FR0fzCURemScEKi7TXuK0cW85_fIEKs2qc1W5ko6FYANah9tcKoXJsM6cLYTiQw-DEktGWg3eo_7MZtgLhsdkmBhD4H1bdRqa9lmY0hAhS9MFqZ5f8KmBhVAudjb8EhuVS4jhthBBQRQXzqNIApFy8lj1nEmEcW0ZfsDfKUHiGXpKPKwWU5R1RMvhglPA1AHRkFTziZZwV_VwyPJLmfujWAvjxqPpRylBeyGzUXnFdfZoz0zdAWipVSzu_51XPAy6DHygZQ5MBhX13Cq7Ibe6wZmD0THOA27Jzhv_2nyYYpG2HXLxG_juzh7nsSnzYpgJloqFJLA2tgPWhYZNTD9tuQ8NTraxzqtdOIpyQ_pUMGyNBY4vKAQc7vyBXlVGxPvCqm3rtGIFsX4VLovDseylc4q91swJzpenGNxWtGU3Q4a0_rHeoLBLBC_27HOUOWq05LCHVPaffBJWWEawtxD0OsOlEWrei21dep2NRSGFxxraYDFNVv3yU2Gcu5IW7EBvfYkL1OOrgg3PUfs-AyK9VmQTPdx2ylr27fuMnpS4CYwPY1GxERILHbW-8WYQ7Jrxm5keW8ndT3RakuQtXbb1HsxL1hOhZH28XGiKtkHiDlA9Eyl8kffsBwDisNybl0Xyr5NbEPQbRZ5pLxN5-z8X3VG6ERT43bsfwnLEPtRKO8sPndF-Vpq-7J-nybkZZbgy8JCLUkjF_6S79zMo3vWMwqwwkyd9oVXJQ_mHvbd_m40" alt="Logo" width="100%"/>
</p>

    ### Object Diagram 

<p align="center">
  <img src="https://uml.planttext.com/plantuml/png/bLZhRXit5lvlmEz0w4-1HILBSXmdmYPRLLOSDxBbbSOBT1SBWnvH4fkPuPJa-9As3zDds0TOOFjYUowSqOna2wd_Z7buUExypg6-SrvQNwI9k5GB7Sj4H5PcBf7UM36z-qd5NfnfkR8oFJmuFFX6HDedwl30u-UvCyCyJu3cjSb4MyoApEjKbP8kCb2NnSgnh0_MP5vbYx0DLCDyhPG5r-GEIcKRMaj89ouZySlXWH3QJRG3OJfRYNV2sq8XrIDpR7NkWTZwg9B4Y8M9uV2tOcqUXBHAF9dYRwsA6IIhHQGU-O19PCN_l__6V_mdDK8v_yVlZe_eB2_yH9BEbihQDtCYcyBNwOvvNMawsxYKYICZbRNW830IcmExvieZazjm_OOHAwDZLMnMcQOO3yGyLofUppOqYijynd698SGwAqpXQc7H47QhqvboHUBh6ycEAwby72R0dO7PzmfvUrlM51wsCQkLBVEdpA-Lq-wct6AJvZTia__Qy2RD25h83IoxdRUuohMFrsXFfulBUvCKgIhNlt65VOoYQp5JFnSWzGZSpKtcr6wvbPc7u0Lcy2NQ8P8N4IostDXVLiuKDbQxHG8NRwMQHTA8QyEeOFcMLKmjpNB1h3zVnd_2H2XkgrSwayb4PIkF2UYVDjLkDbvJ1Pc5Il1yaiXKjeyxn-tJxbtxNba7RYHgs-_2oPMwo9O6lBt1_ya_-eyTpAr9Sn-PpogZUkptkD3JF54Obshd3TbbF836Xfbg1z9Pg4YdN4wzrpMn9R7RVRqbjjfXVXPS4Vlzgkg-b_7dPs5DFUPMEGSO2RwDUJ5N5a91FexdmK5ZCMydtIvLjihkDI1bgZBAvaBTgyJak0ou0YZRmBr6E6DZtSXaIxq2dQFfRCuBKeXBLYcXX1_KOagvnK3zgxNsFXyS7IK6G7Tjd1-Sz4wFMz-AtOrZCBJrRugMLGkmImDerL0bLNvj5YprV1oXZElfdBytz3aRJyRH6F-RNaSNqwivYmjMVLHo0TL2vqVKCdmxUieLyWyBa6tr5xeHUAg9b52F4vrgW27mVhPPaVkp2Jl_eBE5URX41M-xtH1r03wi5rx4XRMWDU005T89nJuVBXQOHKpCOD3RSuVHS6kIX2o9dgFpFHwnJObqliOLwgpLx_PVjNlzTkzjrEj2u0UlJZgz_l4_6msCf1PKBQ_wMnQjhFbvb6YifO4uhnQa-ppebhd-f9vGtSfzldt4lqwdGr_ISoUTke7WlUDQS50CSAI3eZjmNuvChZAfZ-vtme5uNi0zlfHvJd6OD0XanEIIZN15ZlS0u2JmKDIxBql44K7cB0EeI2510Sz4-xreZRDLejswnNJ7n7akiuguj4py0FcE0ssXc7QkR2epfdrPCssqrfboYeao71vQUQTZfgqrqpv2aMacvPv9r-1ViIgguxPW-gnmJfUAVf9C_462cSmQO0Qp9uONkp0JhwNVzB4Hh4OLYjLRsMXKzRAl06biU2baIVh2CkOTXtjIeMi_t1rlyckU522FtYgPlZ39k2UOsT9Bk428xZZZkGhnvq_kqgtOFBWWLFxCtoe7cu28Fvg2Mgv435-22F0Jfj8mH5RNmbYeujrke-pp-czmPzi0PDzMlxV_Dx6uaOgTt8IaX85sWRBnH0pxRNaNmprlVNMk08cn5sCMJhlzjszEtxmYn0gc1D6TJNlRjTLeckb6z0_RnZIsBrieH4XA-5BZ3PefwS0jp1DKmBP02Nd1yTy_7-wXsqrtTMGdvFidcd11nhN6oLsli8IEjOwStLVDiSRExJYxPtEkfxEere-lfcVZs_7LFvvhnXzcqwjeV7LsMyF7tIQAdEUpwTzlXzSNjv_6Fxu4jS6FcM9GTskTEtXLbU-cmmDu_VobtSPXVz1u5ipKiaMxdSvxchjXcol2YIKyDg9eljcdYHOO78XqS7S1tsb-QN2ue47HAs09irADxJaZSVG-F23PA09ccm6tVO7DugWQ5-4uxDMrqD0EK2AcdreamP6JDw5eMbW74gQK5nI7wOl4uZaQSWPqTLshea9wTcZGUvlYWO3qyr6DDz2WJMrei21QQ3jD8S4xh2OAeLnm_5um7r7zy01KuY56w4tou0oJAEiCa4rjc-qIlvhxbU1wFkaS1wkyzGsPJCJzS4ktTUvDq9Nn-EBFu2DWlbnxOPRmRiTBC8pnLLaVN8HZ_CPTz036stBwIfu4bhXTmAnxU803Def47KtHynaU_jwQ1pZ_ZGkFKb5x8JD-yMyH22k4302MU3N2YB1F0HOrYg12jQ7HEaGPp2lXOVdBnkOsxHCudkEXy200IVWY43PCzMnk3K48XbuMDfiWV--ajCn1YrueSVSa_1g2UN7DtfTH1SvsghC2HF0Sl4_s-OYW2mUF-Tad4VCWkOaWJzFm-0DW4vzXXYIWg3rWzWcdqaK9vUm2mIjd71HAxIltCC1_WLpbqafuME2x0DB6punclwT4xrE7X-P574FGbqNZ7CIEtzOXcIaP0hKqcSZBeO2Mortu6VbtndlW1mLq7r00pKU2thL2Ob602rZ2c0QmFMMLM7ntEad25ZB2j4NxMAQfWTg5byvsxITgXKjo2y_z-axWsmY_8vE0p5-9klrZ6r3-6kF-8C6JTqcXtfUipVVh5kVAAfLLh6VHzEXCUlayxnDEHWyLy_YHVaXA1Bvv4L6Qt72rPKBCe9pTGWU_Ws-H9ly7" alt="Logo" width="100%"/>
</p>


### Technology Stack

**Frontend:**
- React 18.2.0
- Lucide React (Icons)
- Tailwind CSS (Styling)
- Web Speech API (Voice Recognition & Synthesis)

**Backend:**
- Node.js (Runtime)
- Express.js 4.18.2 (Web Framework)
- Groq SDK 0.8.0 (AI Integration)
- CORS 2.8.5 (Cross-Origin)
- Helmet 7.1.0 (Security)
- Express Rate Limit 7.1.5 (Rate Limiting)

**AI Platform:**
- Groq Cloud (Inference Platform)
- LLaMA 3.3 70B Versatile Model

---

## 📁 Code Structure

### Project Directory Structure

```
medical-translator/
│
├── backend/
│   ├── node_modules/           # Backend dependencies
│   ├── .env                    # Environment variables (not in git)
│   ├── .env.example           # Environment template
│   ├── .gitignore             # Git ignore file
│   ├── package.json           # Backend dependencies manifest
│   ├── package-lock.json      # Locked dependency versions
│   └── server.js              # Main backend application (500+ lines)
│
├── frontend/
│   ├── node_modules/          # Frontend dependencies
│   ├── public/
│   │   ├── index.html         # HTML entry point
│   │   ├── manifest.json      # PWA manifest
│   │   └── favicon.ico        # App icon
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── MedicalTranslator.jsx  # Main component (500+ lines)
│   │   │
│   │   ├── App.js             # Root component
│   │   ├── App.css            # Global styles
│   │   ├── index.js           # React entry point
│   │   └── index.css          # Tailwind imports
│   │
│   ├── .gitignore             # Git ignore file
│   ├── package.json           # Frontend dependencies
│   ├── package-lock.json      # Locked versions
│   └── tailwind.config.js     # Tailwind configuration
│
├── README.md                  # Project documentation
└── .gitignore                 # Root git ignore
```

---

## 🎨 Frontend Documentation

### Component Architecture

#### **MedicalTranslator.jsx** - Main Component

**Location:** `frontend/src/components/MedicalTranslator.jsx`

**Purpose:** Single-page application component handling all UI and voice recognition logic

**Component Structure:**

```javascript
MedicalTranslator
├── State Management (useState hooks)
│   ├── isListening: boolean          // Mic recording state
│   ├── transcript: string            // Original speech text
│   ├── translatedText: string        // Translated text
│   ├── inputLang: string             // Source language code
│   ├── outputLang: string            // Target language code
│   ├── isTranslating: boolean        // Translation loading state
│   ├── error: string                 // Error messages
│   └── showSettings: boolean         // Settings panel visibility
│
├── Refs (useRef hooks)
│   ├── recognitionRef                // Web Speech Recognition instance
│   └── translationTimeoutRef         // Debounce timer for translation
│
├── Effects (useEffect hooks)
│   └── Speech Recognition Setup      // Initialize and configure SpeechRecognition
│
├── Functions
│   ├── translateText()               // API call to backend for translation
│   ├── toggleListening()             // Start/stop voice recognition
│   ├── speakTranslation()            // Text-to-speech for translated text
│   ├── clearTranscripts()            // Reset all text fields
│   └── swapLanguages()               // Swap input/output languages
│
└── UI Sections
    ├── Header                        // App title and settings button
    ├── Language Selection            // Dropdown menus for languages
    ├── Error Display                 // Error message banner
    ├── Transcript Display            // Original and translated text panels
    ├── Control Buttons               // Record, Speak, Clear buttons
    └── Privacy Notice                // Security disclaimer
```

### State Flow Diagram

```
User speaks → Web Speech API → onresult event
                                      ↓
                            Update transcript state
                                      ↓
                            Debounce (1 second)
                                      ↓
                            translateText() function
                                      ↓
                            POST /api/translate
                                      ↓
                            Backend → Groq API
                                      ↓
                            Response received
                                      ↓
                            Update translatedText state
                                      ↓
                            UI re-renders with translation
```

### Key Frontend Functions

#### 1. **Speech Recognition Setup**

```javascript
useEffect(() => {
  // Initialize Web Speech API
  const SpeechRecognition = window.SpeechRecognition || 
                           window.webkitSpeechRecognition;
  recognitionRef.current = new SpeechRecognition();
  
  // Configuration
  recognitionRef.current.continuous = true;      // Keep listening
  recognitionRef.current.interimResults = true;  // Show partial results
  recognitionRef.current.lang = inputLang;       // Set language
  
  // Event Handlers
  recognitionRef.current.onresult = handleResult;
  recognitionRef.current.onerror = handleError;
  recognitionRef.current.onend = handleEnd;
  
  return cleanup;
}, [inputLang]);
```

**Purpose:** Initialize and configure browser's speech recognition
**Dependencies:** Changes when `inputLang` changes
**Browser Support:** Chrome, Edge, Safari 14.1+

#### 2. **Translation Function**

```javascript
const translateText = async (text) => {
  setIsTranslating(true);
  
  try {
    const response = await fetch('http://localhost:5000/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: text,
        sourceLang: inputLang,
        targetLang: outputLang
      })
    });
    
    const data = await response.json();
    setTranslatedText(data.translatedText);
  } catch (err) {
    setError('Translation error: ' + err.message);
  } finally {
    setIsTranslating(false);
  }
};
```

**Purpose:** Send text to backend for AI translation
**Error Handling:** Try-catch with user-friendly error messages
**Loading State:** Shows spinner during translation

#### 3. **Text-to-Speech Function**

```javascript
const speakTranslation = () => {
  if ('speechSynthesis' in window && translatedText) {
    window.speechSynthesis.cancel();  // Stop any ongoing speech
    
    const utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = outputLang;      // Set language
    utterance.rate = 0.9;             // Slightly slower for clarity
    
    window.speechSynthesis.speak(utterance);
  }
};
```

**Purpose:** Read translated text aloud using browser's TTS
**Browser Support:** All modern browsers
**Configuration:** Adjustable rate, pitch, volume

### Styling Architecture

**Approach:** Utility-first with Tailwind CSS

**Key Design Patterns:**

```css
/* Gradient Background */
bg-gradient-to-br from-blue-50 to-indigo-100

/* Card Design */
bg-white rounded-2xl shadow-xl p-6

/* Button States */
hover:bg-indigo-700 disabled:bg-gray-300 disabled:cursor-not-allowed

/* Responsive Design */
grid-cols-1 md:grid-cols-2  /* Mobile first, desktop second */

/* Animations */
animate-spin animate-pulse
```

**Mobile-First Breakpoints:**
- Default: Mobile (< 768px)
- `md:` Tablet (≥ 768px)
- `lg:` Desktop (≥ 1024px)

---

## ⚙️ Backend Documentation

<a href="https://github.com/SumanshuBorkar/Healthcare-Translation-Web-App-with-Generative-AI---Backend">Backend Github Repo Link</a>

### Server Architecture

#### **server.js** - Express Application

**Location:** `backend/server.js`

**Purpose:** REST API server handling translation requests and Groq AI integration

**Middleware Stack:**

```javascript
1. Helmet (Security Headers)
   ├── X-Content-Type-Options
   ├── X-Frame-Options
   └── Content-Security-Policy

2. CORS (Cross-Origin Resource Sharing)
   ├── Allowed Origins: [localhost:3000, localhost:5173, ...]
   ├── Allowed Methods: [GET, POST, PUT, DELETE, OPTIONS]
   └── Allowed Headers: [Content-Type, Authorization]

3. Express JSON Parser
   └── body size limit: 100kb (default)

4. Rate Limiter (Request Throttling)
   ├── Window: 15 minutes
   ├── Max Requests: 100 per IP
   └── Applied to: /api/* routes
```

### API Endpoints

#### 1. **Health Check Endpoint**

```javascript
GET /api/health

Response:
{
  "status": "OK",
  "timestamp": "2024-12-19T10:30:00.000Z",
  "groqApiConfigured": true
}
```

**Purpose:** Verify server is running and Groq API is configured
**Use Case:** Load balancer health checks, monitoring

#### 2. **Translation Endpoint**

```javascript
POST /api/translate

Request Body:
{
  "text": "Hello doctor",
  "sourceLang": "en-US",
  "targetLang": "es"
}

Response:
{
  "translatedText": "Hola doctor",
  "sourceLang": "en-US",
  "targetLang": "es",
  "originalLength": 12,
  "translatedLength": 11,
  "model": "llama-3.3-70b-versatile",
  "usage": {
    "prompt_tokens": 121,
    "completion_tokens": 3,
    "total_tokens": 124
  }
}
```

**Purpose:** Main translation endpoint using Groq AI
**Validation:**
- Required fields: text, sourceLang, targetLang
- Max text length: 5000 characters
- Valid language codes

**Error Responses:**
```javascript
400 Bad Request - Missing/invalid fields
401 Unauthorized - Invalid API key
429 Too Many Requests - Rate limit exceeded
500 Internal Server Error - Server/AI error
```

#### 3. **Medical Enhancement Endpoint**

```javascript
POST /api/enhance-transcription

Request Body:
{
  "text": "Patient has hypertenshun"
}

Response:
{
  "enhancedText": "Patient has hypertension",
  "usage": {...}
}
```

**Purpose:** Correct medical terminology in transcriptions
**AI Model:** Same as translation (llama-3.3-70b-versatile)
**Use Case:** Post-processing speech recognition errors

#### 4. **Models List Endpoint**

```javascript
GET /api/models

Response:
{
  "models": [
    {
      "id": "llama-3.3-70b-versatile",
      "object": "model",
      "created": 1234567890,
      "owned_by": "groq"
    },
    ...
  ],
  "count": 8
}
```

**Purpose:** List all available Groq models
**Use Case:** Debugging, model selection

#### 5. **Test Translation Endpoint**

```javascript
POST /api/test-translation

Response:
{
  "success": true,
  "testTranslation": "Hola, ¿cómo estás?",
  "model": "llama-3.3-70b-versatile",
  "message": "Groq API is working correctly!"
}
```

**Purpose:** Quick API connectivity test
**Use Case:** Debugging, deployment verification

### Groq SDK Integration

#### Configuration

```javascript
const Groq = require('groq-sdk');

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY  // From .env file
});
```

#### Translation Implementation

```javascript
const chatCompletion = await groq.chat.completions.create({
  messages: [
    {
      role: 'system',
      content: `You are a professional medical translator.
                Translate from ${sourceLanguage} to ${targetLanguage}.
                Return ONLY the translated text without explanations.`
    },
    {
      role: 'user',
      content: text
    }
  ],
  model: 'llama-3.3-70b-versatile',
  temperature: 0.3,        // Low = consistent translations
  max_tokens: 2000,        // Max response length
  top_p: 1,                // Nucleus sampling
  stream: false            // Wait for complete response
});
```

**Key Parameters:**
- **model:** `llama-3.3-70b-versatile` - Best balance of speed/quality
- **temperature:** `0.3` - Lower for deterministic translations
- **max_tokens:** `2000` - Sufficient for medical text
- **stream:** `false` - Wait for complete response

### Language Mapping

```javascript
const languageNames = {
  'en-US': 'English',
  'es': 'Spanish',
  'fr': 'French',
  'de': 'German',
  'zh': 'Chinese',
  'ar': 'Arabic',
  'hi': 'Hindi',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'ja': 'Japanese'
};
```

**Purpose:** Convert language codes to readable names for AI prompts
**Extensibility:** Easy to add new languages

---

## 🤖 AI Tools Integration

### Groq AI Platform

**Website:** https://console.groq.com/
**SDK:** groq-sdk (NPM package)
**Documentation:** https://console.groq.com/docs

#### Why Groq?

1. **Ultra-Fast Inference:**
   - Custom LPU™ (Language Processing Unit) hardware
   - 10x faster than traditional GPU inference
   - Sub-second response times

2. **Cost-Effective:**
   - Generous free tier: 30 req/min, 14,400 req/day
   - No credit card required for development
   - Production-ready performance

3. **Multiple Models:**
   - LLaMA 3.3 70B (current choice)
   - LLaMA 3.1 8B (faster, lighter)
   - Mixtral 8x7B (multilingual specialist)

4. **OpenAI-Compatible API:**
   - Easy migration if needed
   - Familiar SDK interface
   - Standard request/response format

#### Model Selection Rationale

**Current Model:** `llama-3.3-70b-versatile`

**Reasons:**
- ✅ Excellent multilingual capabilities
- ✅ Strong medical terminology understanding
- ✅ Fast inference on Groq hardware
- ✅ Large context window (128K tokens)
- ✅ Latest production-ready version
- ✅ Balanced quality/speed tradeoff

**Alternatives Considered:**
- `llama-3.1-8b-instant` - Too fast, sacrifices quality
- `mixtral-8x7b-32768` - Good but smaller context window
- GPT-4 - Too slow and expensive for real-time use

### AI Prompt Engineering

#### System Prompt Design

```javascript
`You are a professional medical translator. 
Translate the following text from ${sourceLanguage} to ${targetLanguage}. 

Important instructions:
- Maintain medical terminology accuracy
- Preserve the meaning and context
- Use culturally appropriate expressions
- Return ONLY the translated text without any explanations, notes, or preamble
- If the text contains medical terms, ensure they are correctly translated
- Do not add any commentary like "Here is the translation:" or similar phrases`
```

**Design Principles:**
1. **Clear Role Definition:** "professional medical translator"
2. **Specific Instructions:** Bullet points for clarity
3. **Output Format:** "ONLY the translated text"
4. **Domain Awareness:** Emphasis on medical terminology
5. **Cultural Sensitivity:** "culturally appropriate expressions"

#### Temperature Setting

```javascript
temperature: 0.3  // Range: 0.0 - 2.0
```

**Why 0.3?**
- **0.0:** Too deterministic, might be robotic
- **0.3:** Consistent but natural translations ✓
- **1.0:** Too creative, inconsistent medical terms
- **2.0:** Chaotic, unreliable

### Error Handling

```javascript
try {
  const chatCompletion = await groq.chat.completions.create({...});
  const translatedText = chatCompletion.choices[0]?.message?.content?.trim();
  
  if (!translatedText) {
    throw new Error('No translation returned from Groq API');
  }
  
  res.json({ translatedText, ... });
  
} catch (error) {
  if (error.status === 401) {
    return res.status(401).json({ error: 'Invalid Groq API key' });
  }
  
  if (error.status === 429) {
    return res.status(429).json({ error: 'Rate limit exceeded' });
  }
  
  res.status(500).json({ error: 'Translation failed' });
}
```

**Error Categories:**
- **401:** API key invalid/expired
- **429:** Rate limit hit
- **500:** Server/network error
- **Empty Response:** AI returned nothing

---

## 🔒 Security Considerations

### 1. API Key Protection

**Storage:**
```bash
# ✓ CORRECT - Environment variable
GROQ_API_KEY=gsk_xxxxx...

# ✗ WRONG - Hardcoded in code
const apiKey = "gsk_xxxxx...";  // NEVER DO THIS
```

**Git Exclusion:**
```gitignore
# .gitignore
.env
.env.local
.env.production
```

**Validation:**
```javascript
if (!process.env.GROQ_API_KEY) {
  console.log('⚠️  WARNING: GROQ_API_KEY not found!');
}
```

### 2. CORS Configuration

**Purpose:** Prevent unauthorized domains from accessing the API

**Implementation:**
```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

**Security Benefits:**
- ✅ Prevents cross-site attacks
- ✅ Allows only specific domains
- ✅ Logs blocked attempts

### 3. Rate Limiting

**Purpose:** Prevent API abuse and protect Groq quota

**Implementation:**
```javascript
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                   // 100 requests per window
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
```

**Benefits:**
- ✅ Prevents DoS attacks
- ✅ Protects API quota
- ✅ Per-IP tracking
- ✅ Sliding window

### 4. Input Validation

**Text Length Limit:**
```javascript
if (text.length > 5000) {
  return res.status(400).json({ 
    error: 'Text too long. Maximum 5000 characters.' 
  });
}
```

**Required Fields:**
```javascript
if (!text || !sourceLang || !targetLang) {
  return res.status(400).json({ 
    error: 'Missing required fields' 
  });
}
```

**Benefits:**
- ✅ Prevents payload attacks
- ✅ Reduces AI costs
- ✅ Improves performance

### 5. Helmet Security Headers

**Implementation:**
```javascript
app.use(helmet());
```

**Headers Added:**
```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Strict-Transport-Security: max-age=15552000
```

**Protection Against:**
- ✅ Clickjacking attacks
- ✅ MIME type sniffing
- ✅ XSS attacks
- ✅ Downgrade attacks

### 6. HTTPS Requirement

**Why Required:**
- Web Speech API requires HTTPS in production
- Protects data in transit
- Prevents man-in-the-middle attacks

**Development:**
```bash
# Local development (HTTP is OK)
http://localhost:5173

# Production (HTTPS required)
https://yourdomain.com
```

### 7. Data Privacy

**No Persistent Storage:**
- Conversations are not stored in database
- Data only in memory during request
- No logging of personal information

**HIPAA Considerations:**
```javascript
// Do NOT log sensitive data
console.log('Translation:', text);  // ❌ BAD

// Log only metadata
console.log(`Translation: ${sourceLang} -> ${targetLang}, Length: ${text.length}`);  // ✓ GOOD
```

### 8. Error Message Sanitization

**Development:**
```javascript
res.status(500).json({
  error: 'Translation failed',
  message: error.message,  // Detailed error
  stack: error.stack        // Stack trace
});
```

**Production:**
```javascript
res.status(500).json({
  error: 'Translation failed',
  message: process.env.NODE_ENV === 'development' 
    ? error.message 
    : 'Internal server error'  // Generic message
});
```

**Security Benefit:** Don't expose internal implementation details

---

## 📊 State Management

### Frontend State Architecture

**Pattern:** React Hooks (useState, useRef)

**State Variables:**

```javascript
// UI State
const [isListening, setIsListening] = useState(false);
const [showSettings, setShowSettings] = useState(false);
const [error, setError] = useState('');

// Content State
const [transcript, setTranscript] = useState('');
const [translatedText, setTranslatedText] = useState('');

// Configuration State
const [inputLang, setInputLang] = useState('en-US');
const [outputLang, setOutputLang] = useState('es');

// Loading State
const [isTranslating, setIsTranslating] = useState(false);

// References (don't trigger re-renders)
const recognitionRef = useRef(null);
const translationTimeoutRef = useRef(null);
```

### State Update Flow

```
1. User Action
   └─> Event Handler
       └─> setState()
           └─> React Re-render
               └─> UI Updates

Example:
User clicks "Start Recording"
  └─> toggleListening()
      └─> setIsListening(true)
          └─> Button changes to "Stop Recording"
```

### Async State Management

**Pattern:** Async/Await with Try-Catch

```javascript
const translateText = async (text) => {
  // 1. Set loading state
  setIsTranslating(true);
  setError('');
  
  try {
    // 2. API call
    const response = await fetch(...);
    const data = await response.json();
    
    // 3. Success state
    setTranslatedText(data.translatedText);
  } catch (err) {
    // 4. Error state
    setError('Translation error: ' + err.message);
  } finally {
    // 5. Reset loading state
    setIsTranslating(false);
  }
};
```

---

## 🔄 Request/Response Flow

### Complete Translation Flow

```
1. User speaks into microphone
   └─> Web Speech API captures audio

2. onresult event fires
   └─> Update transcript state
   └─> Trigger debounced translation

3. translateText() called after 1 second
   └─> POST /api/translate
       {
         "text": "Hello doctor",
         "sourceLang": "en-US",
         "targetLang": "es"
       }

4. Backend receives request
   └─> Validate input
   └─> Check rate limit
   └─> Call Groq API

5. Groq AI processes
   └─> LLaMA 3.3 model translates
   └─> Returns translation

6. Backend formats response
   └─> Add metadata (model, usage, etc.)
   └─> Send to frontend

7. Frontend receives response
   └─> Update translatedText state
   └─> UI re-renders with translation

8. User clicks "Speak Translation"
   └─> Text-to-Speech API
   └─> Audio playback
```

### Error Handling Flow

```
Error at any step
  └─> Catch block executes
      └─> Log error (console)
      └─> Set error state
      └─> Display user-friendly message
      └─> Reset loading states
      └─> User can retry
```

---

## 📈 Performance Considerations

### Frontend Optimizations

1. **Debouncing:** Wait 1 second before translating
2. **Refs for Instances:** SpeechRecognition doesn't cause re-renders
3. **Conditional Rendering:** Only show what's needed
4. **Lazy Loading:** Can implement for larger apps

### Backend Optimizations

1. **Rate Limiting:** Prevent server overload
2. **Connection Pooling:** Reuse HTTP connections
3. **Error Recovery:** Graceful degradation
4. **Logging:** Minimal production logging

### AI Optimization

1. **Low Temperature:** Faster, more consistent responses
2. **Token Limits:** max_tokens=2000 (prevents long processing)
3. **No Streaming:** Simpler implementation for our use case
4. **Model Selection:** 70B model balances quality/speed

---

## 🧪 Testing Recommendations

### Frontend Testing

```javascript
// Unit Tests
- Test translateText() with mock fetch
- Test toggleListening() state changes
- Test speakTranslation() with mock SpeechSynthesis

// Integration Tests
- Test full translation flow
- Test error handling
- Test language switching

// E2E Tests
- Test actual voice recording
- Test API communication
- Test UI interactions
```

### Backend Testing

```javascript
// Unit Tests
- Test language mapping
- Test input validation
- Test error handlers

// Integration Tests
- Test /api/translate endpoint
- Test Groq API integration
- Test rate limiting

// Load Tests
- Test concurrent requests
- Test rate limit thresholds
- Test error recovery
```

---

## 📚 Dependencies Reference

### Frontend Dependencies

```json
{
  "react": "^18.2.0",           // UI library
  "react-dom": "^18.2.0",       // React DOM renderer
  "lucide-react": "^0.263.1",   // Icon library
  "react-scripts": "5.0.1"      // Build tools
}
```

### Backend Dependencies

```json
{
  "express": "^4.18.2",              // Web framework
  "cors": "^2.8.5",                  // CORS middleware
  "helmet": "^7.1.0",                // Security headers
  "dotenv": "^16.3.1",               // Environment variables
  "express-rate-limit": "^7.1.5",    // Rate limiting
  "groq-sdk": "^0.8.0"               // Groq AI SDK
}
```

---

## 🎯 Best Practices Summary

### Code Quality
✅ Consistent error handling
✅ Meaningful variable names
✅ Comment complex logic
✅ DRY principle (Don't Repeat Yourself)

### Security
✅ Never commit .env files
✅ Validate all inputs
✅ Use HTTPS in production
✅ Implement rate limiting

### Performance
✅ Debounce frequent actions
✅ Use refs for non-render data
✅ Minimize re-renders
✅ Optimize API calls

### Maintainability
✅ Modular code structure
✅ Clear separation of concerns
✅ Comprehensive documentation
✅ Version control with Git

---

**Documentation Version:** 1.0.0  
**Last Updated:** December 19, 2025 
**Maintainer:** Development Team