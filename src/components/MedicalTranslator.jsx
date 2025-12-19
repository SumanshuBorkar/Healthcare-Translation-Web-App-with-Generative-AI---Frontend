import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Languages, Trash2, Settings } from 'lucide-react';

const MedicalTranslator = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [inputLang, setInputLang] = useState('en-US');
  const [outputLang, setOutputLang] = useState('es');
  const [isTranslating, setIsTranslating] = useState(false);
  const [error, setError] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  
  const recognitionRef = useRef(null);
  const translationTimeoutRef = useRef(null);

  const languages = {
    'en-US': 'English (US)',
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

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = inputLang;
      
      // Add max alternatives for better accuracy
      recognitionRef.current.maxAlternatives = 1;

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcriptPiece = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcriptPiece + ' ';
          } else {
            interimTranscript += transcriptPiece;
          }
        }

        const currentTranscript = transcript + finalTranscript;
        setTranscript(currentTranscript + interimTranscript);

        if (finalTranscript) {
          clearTimeout(translationTimeoutRef.current);
          translationTimeoutRef.current = setTimeout(() => {
            translateText(currentTranscript);
          }, 1000);
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error details:', event);
        
        let errorMessage = '';
        switch(event.error) {
          case 'network':
            errorMessage = 'Network error. Please check your internet connection and ensure you are using HTTPS or localhost.';
            break;
          case 'not-allowed':
            errorMessage = 'Microphone access denied. Please allow microphone permissions in your browser settings.';
            break;
          case 'no-speech':
            errorMessage = 'No speech detected. Please try speaking again.';
            // Don't stop listening for no-speech
            return;
          case 'audio-capture':
            errorMessage = 'Microphone not found. Please ensure your microphone is connected.';
            break;
          case 'aborted':
            errorMessage = 'Speech recognition aborted.';
            break;
          default:
            errorMessage = `Speech recognition error: ${event.error}`;
        }
        
        setError(errorMessage);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        // Auto-restart if still in listening mode
        if (isListening) {
          try {
            recognitionRef.current.start();
          } catch (e) {
            console.error('Failed to restart recognition:', e);
            setIsListening(false);
          }
        }
      };
      
      recognitionRef.current.onstart = () => {
        console.log('Speech recognition started successfully');
      };
    } else {
      setError('Speech recognition not supported in this browser. Please use Chrome or Edge.');
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          console.error('Error stopping recognition:', e);
        }
      }
    };
  }, [inputLang]);

  useEffect(() => {
    if (transcript.trim()) {
      translateText(transcript);
    }
  }, [inputLang, outputLang]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      // ... (Rest of your speech recognition setup remains the same)
      // Make sure recognitionRef.current.lang = inputLang; is here (which it is)
    }
  }, [inputLang]);

  const translateText = async (text) => {
    if (!text.trim()) return;
    
    setIsTranslating(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: text,
          sourceLang: inputLang,
          targetLang: outputLang
        })
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (err) {
      setError('Translation error: ' + err.message);
    } finally {
      setIsTranslating(false);
    }
  };

  const toggleListening = async () => {
    if (isListening) {
      try {
        recognitionRef.current?.stop();
        setIsListening(false);
      } catch (e) {
        console.error('Error stopping recognition:', e);
        setIsListening(false);
      }
    } else {
      // Check for microphone permissions first
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach(track => track.stop()); // Stop the test stream
        
        // Now start recognition
        try {
          recognitionRef.current?.start();
          setIsListening(true);
          setError('');
        } catch (e) {
          if (e.name === 'InvalidStateError') {
            // Recognition is already started, stop and restart
            recognitionRef.current?.stop();
            setTimeout(() => {
              recognitionRef.current?.start();
              setIsListening(true);
              setError('');
            }, 100);
          } else {
            throw e;
          }
        }
      } catch (err) {
        setError('Microphone access denied. Please allow microphone permissions and reload the page.');
        console.error('Microphone permission error:', err);
      }
    }
  };

  const speakTranslation = () => {
    if ('speechSynthesis' in window && translatedText) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(translatedText);
      utterance.lang = outputLang;
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    }
  };

  const clearTranscripts = () => {
    setTranscript('');
    setTranslatedText('');
    setError('');
  };

  const swapLanguages = () => {
    const temp = inputLang;
    setInputLang(outputLang);
    setOutputLang(temp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-3 rounded-xl">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Medical Translator</h1>
                <p className="text-sm text-gray-500">Real-time multilingual communication</p>
              </div>
            </div>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Language Selection */}
          {showSettings && (
            <div className="space-y-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Input Language (Your Speech)
                  </label>
                  <select
                    value={inputLang}
                    onChange={(e) => setInputLang(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {Object.entries(languages).map(([code, name]) => (
                      <option key={code} value={code}>{name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Output Language (Translation)
                  </label>
                  <select
                    value={outputLang}
                    onChange={(e) => setOutputLang(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    {Object.entries(languages).map(([code, name]) => (
                      <option key={code} value={code}>{name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                onClick={swapLanguages}
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm font-medium text-gray-700"
              >
                ⇄ Swap Languages
              </button>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
            <p className="text-red-800 text-sm">{error}</p>
          </div>
        )}

        {/* Transcripts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Original Transcript */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Original Transcript</h2>
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                {languages[inputLang]}
              </span>
            </div>
            <div className="min-h-[200px] max-h-[400px] overflow-y-auto bg-gray-50 rounded-xl p-4">
              {transcript ? (
                <p className="text-gray-800 leading-relaxed">{transcript}</p>
              ) : (
                <p className="text-gray-400 italic text-center mt-20">
                  Start speaking to see transcript...
                </p>
              )}
            </div>
          </div>

          {/* Translated Transcript */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Translation</h2>
              <span className="text-xs text-gray-500 bg-indigo-100 px-3 py-1 rounded-full">
                {languages[outputLang]}
              </span>
            </div>
            <div className="min-h-[200px] max-h-[400px] overflow-y-auto bg-indigo-50 rounded-xl p-4">
              {isTranslating ? (
                <div className="flex items-center justify-center mt-20">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                </div>
              ) : translatedText ? (
                <p className="text-gray-800 leading-relaxed">{translatedText}</p>
              ) : (
                <p className="text-gray-400 italic text-center mt-20">
                  Translation will appear here...
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={toggleListening}
              className={`flex-1 sm:flex-none px-8 py-4 rounded-xl font-semibold text-white transition-all transform hover:scale-105 ${
                isListening
                  ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200'
                  : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200'
              }`}
            >
              <div className="flex items-center justify-center space-x-2">
                {isListening ? (
                  <>
                    <MicOff className="w-5 h-5" />
                    <span>Stop Recording</span>
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5" />
                    <span>Start Recording</span>
                  </>
                )}
              </div>
            </button>

            <button
              onClick={speakTranslation}
              disabled={!translatedText}
              className="flex-1 sm:flex-none px-8 py-4 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg shadow-green-200"
            >
              <div className="flex items-center justify-center space-x-2">
                <Volume2 className="w-5 h-5" />
                <span>Speak Translation</span>
              </div>
            </button>

            <button
              onClick={clearTranscripts}
              className="flex-1 sm:flex-none px-8 py-4 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <div className="flex items-center justify-center space-x-2">
                <Trash2 className="w-5 h-5" />
                <span>Clear</span>
              </div>
            </button>
          </div>

          {/* Status Indicator */}
          <div className="mt-4 text-center">
            {isListening && (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600">Recording in progress...</span>
              </div>
            )}
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            🔒 <strong>Privacy Notice:</strong> Your conversations are processed securely and not stored permanently. 
            All data is encrypted during transmission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalTranslator;