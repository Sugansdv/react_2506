import React, { useState, useEffect, useRef } from 'react';
import replies from '../data/predefinedReplies';
import './ChatBox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      sender: 'User 1',
      text: input,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      const botReply = {
        sender: 'User 2',
        text: replies[Math.floor(Math.random() * replies.length)],
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="container p-3">
      <div className="card">
        <div className="card-header bg-primary text-white">Chat App</div>
        <div className="card-body chat-box bg-light" style={{ height: '400px', overflowY: 'auto' }}>
          {messages.map((msg, i) => (
            <div key={i} className={`d-flex mb-2 ${msg.sender === 'User 1' ? 'justify-content-end' : 'justify-content-start'}`}>
              <div className={`p-2 rounded ${msg.sender === 'User 1' ? 'bg-success text-white' : 'bg-white border'}`}>
                <div><strong>{msg.sender}</strong></div>
                <div>{msg.text}</div>
                <div className="text-muted" style={{ fontSize: '0.75rem' }}>{msg.timestamp}</div>
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <div className="card-footer d-flex">
          <input
            className="form-control me-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
          />
          <button className="btn btn-primary" onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
