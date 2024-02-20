"use client"
import React, { useState } from 'react';

const CodeSnippet = ({ code, language }:{code : string, language: string}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <div className="bg-gray-800 px-4 py-3 rounded-lg shadow-md relative">
      <pre className="text-gray-400 break-words overflow-auto">
        <code className={`language-${language} `}>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-500 text-white text-sm font-bold py-2 px-4 rounded-md"
      >
        {copied ? (
          "copied"
        
        
        ) : (
            "copy"
        )}
      </button>
    </div>
  );
};

export default CodeSnippet;
