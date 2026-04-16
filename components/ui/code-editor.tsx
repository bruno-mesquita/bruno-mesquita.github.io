'use client';

import { useState, useEffect } from 'react';

interface CodeEditorProps {
  code: string;
  className?: string;
}

function highlightCode(code: string): React.ReactNode {
  const parts: { type: string; text: string }[] = [];

  let i = 0;
  while (i < code.length) {
    if (code.slice(i, i + 2) === '//') {
      const end = code.indexOf('\n', i);
      const comment = code.slice(i, end === -1 ? code.length : end);
      parts.push({ type: 'comment', text: comment });
      i = end === -1 ? code.length : end;
    } else if (code[i] === '"' || code[i] === "'" || code[i] === '`') {
      const quote = code[i];
      let j = i + 1;
      while (j < code.length && (code[j] !== quote || code[j - 1] === '\\')) {
        j++;
      }
      parts.push({ type: 'string', text: code.slice(i, j + 1) });
      i = j + 1;
    } else if (/[a-zA-Z_]/.test(code[i])) {
      let j = i;
      while (j < code.length && /[a-zA-Z0-9_]/.test(code[j])) j++;
      const word = code.slice(i, j);
      const isKeyword =
        /^(const|let|var|function|return|new|class|import|export|from|interface|type|default|extends|async|await|throw|try|catch|finally|if|else|switch|case|break|for|while|do|this|true|false|null|undefined)$/.test(
          word
        );
      parts.push({ type: isKeyword ? 'keyword' : 'text', text: word });
      i = j;
    } else if (/\d/.test(code[i])) {
      let j = i;
      while (j < code.length && /\d/.test(code[j])) j++;
      parts.push({ type: 'number', text: code.slice(i, j) });
      i = j;
    } else {
      parts.push({ type: 'text', text: code[i] });
      i++;
    }
  }

  return parts.map((part, idx) => {
    const colors: Record<string, string> = {
      comment: 'text-[#6a9955]',
      keyword: 'text-[#569cd6]',
      string: 'text-[#ce9178]',
      number: 'text-[#b5cea8]',
      text: 'text-[#d4d4d4]',
    };
    return (
      <span key={idx} className={colors[part.type]}>
        {part.text}
      </span>
    );
  });
}

export function CodeEditor({ code, className = '' }: CodeEditorProps) {
  const [displayedCode, setDisplayedCode] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode(code.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [code]);

  return (
    <div
      className={`rounded-lg overflow-hidden font-mono text-sm bg-[#1e1e1e] shadow-2xl ${className}`}
    >
      <div className="bg-[#252526] px-4 py-2 flex items-center gap-2 border-b border-[#3c3c3c]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-4 text-[#808080] text-xs">bruno.ts</span>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="whitespace-pre-wrap leading-6">
          <code>{highlightCode(displayedCode)}</code>
          <span className="animate-pulse text-[#569cd6]">|</span>
        </pre>
      </div>
    </div>
  );
}
