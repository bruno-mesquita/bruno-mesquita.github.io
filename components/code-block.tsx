'use client';

import { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';

export function CodeBlock({
  children,
  raw,
}: {
  children: React.ReactNode;
  raw: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
        aria-label="Copy code"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-gray-400" />
        )}
      </button>
      <pre
        className="rounded-lg p-4 overflow-x-auto mb-4 font-mono text-sm"
        style={{ backgroundColor: '#0d1117' }}
      >
        {children}
      </pre>
    </div>
  );
}
