import React, { useState } from 'react';

const CopyOnClickButton = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const textToCopy = text;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="pointer font-medium"
      title={copied ? 'Copied!' : 'Click to copy'}
    >
      {textToCopy}
    </button>
  );
};

export default CopyOnClickButton;
