import { useEffect, useState } from 'react';

export function useTypewriter(
  words: string[],
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseMs = 2000
) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setIsDeleting(true), pauseMs);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === '') {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return text;
}
