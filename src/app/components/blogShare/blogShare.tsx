import { useEffect, useState } from 'react';
import './blogShare.css';

const COPY_FEEDBACK_MS = 2000;

type CopyStatus = 'idle' | 'copied' | 'failed';

const COPY_LABELS: Record<CopyStatus, string> = {
  idle: 'Copy link',
  copied: 'Copied!',
  failed: "Couldn't copy",
};

interface BlogShareProps {
  title: string;
}

function BlogShare({ title }: BlogShareProps) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const url = window.location.href;

  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const xHref = `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;

  const copyLink = async () => {
    try {
      // Rejects when the browser denies clipboard access
      await navigator.clipboard.writeText(url);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('failed');
    }
  };

  useEffect(() => {
    if (copyStatus === 'idle') return;
    const timeout = setTimeout(() => setCopyStatus('idle'), COPY_FEEDBACK_MS);
    return () => clearTimeout(timeout);
  }, [copyStatus]);

  return (
    <div className="cst-blog-share">
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        className="cst-blog-share-chip"
        aria-label="Share on LinkedIn"
      >
        in
      </a>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className="cst-blog-share-chip"
        aria-label="Share on X"
      >
        X
      </a>
      <button type="button" className="cst-blog-share-chip" onClick={copyLink}>
        <span aria-live="polite">{COPY_LABELS[copyStatus]}</span>
      </button>
    </div>
  );
}

export default BlogShare;
