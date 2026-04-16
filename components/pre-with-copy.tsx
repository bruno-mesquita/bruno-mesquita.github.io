'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';

export function PreWithCopy({
  children,
  ...props
}: {
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLPreElement>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const extractCodeText = (node: React.ReactNode): string => {
    if (!node) return '';
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);

    const element = node as React.ReactElement<{ children?: React.ReactNode }>;
    if (element?.props?.children) {
      return extractCodeText(element.props.children);
    }
    return '';
  };

  const copyToClipboard = async () => {
    const text = extractCodeText(children);
    if (text) {
      await navigator.clipboard.writeText(text);
      if (mounted) {
        toast.success('Code copied to clipboard!');
      }
    }
  };

  return (
    <div className="relative group" style={{ position: 'relative' }}>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-1.5 rounded-md bg-white/10 hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Copy code"
      >
        <Copy className="w-4 h-4 text-gray-400" />
      </button>
      <pre
        {...props}
        className="rounded-lg p-4 overflow-x-auto mb-4 font-mono text-sm"
        style={{ backgroundColor: '#0d1117' }}
      >
        {children}
      </pre>
    </div>
  );
}
