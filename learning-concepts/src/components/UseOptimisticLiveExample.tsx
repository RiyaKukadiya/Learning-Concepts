// import React, { useOptimistic, useState } from "react";

// const UseOptimisticLiveExample = () => {
//   const [messages, setMessages] = useState<string[]>([]);
//   const [optimisticMessages, addOptimisticMessage] = useOptimistic(messages, (state, newMsg: string) => [...state, newMsg]);
//   const [input, setInput] = useState("");

//   return (
//     <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md animate-fade-in">
//       <h3 className="font-bold mb-2">useOptimistic Example (React 19)</h3>
//       <input className="border p-2 rounded" value={input} onChange={e => setInput(e.target.value)} />
//       <button className="ml-2 px-2 py-1 mt-2 bg-blue-500 text-white rounded" onClick={() => {
//         addOptimisticMessage(input);
//         setTimeout(() => setMessages(msgs => [...msgs, input]), 1000);
//         setInput("");
//       }}>Send</button>
//       <ul className="mt-2">
//         {optimisticMessages.map((msg, i) => <li key={i}>{msg}</li>)}
//       </ul>
//     </div>
//   );
// };

// export default UseOptimisticLiveExample;


'use client';

import { useState, useOptimistic } from 'react';

type Comment = {
  id: number;
  text: string;
};

export default function OptimisticCommentBox() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [message, setMessage] = useState('');
  const [optimisticComments, addOptimisticComment] = useOptimistic(
    comments,
    (prev, newComment: Comment) => [...prev, newComment]
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const commentText = message.trim();
    if (!commentText) return;

    // Create optimistic comment
    const tempId = Date.now();
    const newComment: Comment = { id: tempId, text: commentText };

    // Show it immediately
    addOptimisticComment(newComment);

    // Clear input
    setMessage('');

    try {
      const result = await fakeApi(newComment);
      // On success, update real state
      setComments(prev => [...prev, result]);
      setMessage(''); // clear message
    } catch (err) {
      // On failure, remove the optimistic comment and show error
      setComments(prev => prev.filter(c => c.id !== tempId));
      setMessage(`❌ Failed to post comment`);
      setTimeout(() => setMessage(''), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl shadow-lg">
       <h2 className="text-xl font-bold mb-2">UseOptimistic Example</h2>
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          className="flex-1 px-4 py-2 rounded border border-gray-600"
          placeholder="Write a comment..."
          value={message.startsWith('❌') ? '' : message}
          onChange={e => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
        >
          Post
        </button>
      </form>

      <ul className="space-y-2">
        {optimisticComments.map(comment => (
          <li
            key={comment.id}
            className="p-1 rounded border border-gray-700"
          >
            {comment.text}
          </li>
        ))}
      </ul>

      {message.startsWith('❌') && (
        <p className="mt-4 text-red-500 text-sm">{message}</p>
      )}
    </div>
  );
}

// Fake API that randomly succeeds or fails
const fakeApi = (comment: Comment): Promise<Comment> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldSucceed = Math.random() > 0.4; // 60% chance success
      if (shouldSucceed) {
        resolve(comment);
      } else {
        reject(new Error('Server error'));
      }
    }, 1000); // 1 second delay
  });
};
