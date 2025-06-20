"use client";

import React, { useState } from 'react';
import { Send, Paperclip, Image as ImageIcon, Smile, User } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
};

const initialMessages: Message[] = [
  {
    id: '1',
    content: 'Hello! How can I help you today?',
    sender: 'agent',
    timestamp: '10:00 AM'
  },
  {
    id: '2',
    content: 'I have a question about my recent order.',
    sender: 'user',
    timestamp: '10:01 AM'
  },
  {
    id: '3',
    content: 'Of course! I\'d be happy to help. Could you please provide your order number?',
    sender: 'agent',
    timestamp: '10:02 AM'
  }
];

const ChatSupport = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      content: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: 'Thank you for your message. A support agent will respond shortly.',
        sender: 'agent',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1000);
  };

  return (
    <>
      <div className="p-5 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
            <p className="mt-1 text-sm text-gray-500">
              Chat with our support team for assistance
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-140px)]">
        {/* Chat sidebar */}
        <div className="w-64 border-r border-gray-200 bg-gray-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-medium text-gray-900">Support Agent</h3>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-xs font-medium text-gray-500 uppercase mb-3">Recent Conversations</h4>
            <div className="space-y-2">
              <button className="w-full p-3 rounded-lg bg-gray-100 text-left">
                <p className="text-sm font-medium text-gray-900">Order Support</p>
                <p className="text-xs text-gray-500">Last message: 2 mins ago</p>
              </button>
              <button className="w-full p-3 rounded-lg hover:bg-gray-100 text-left">
                <p className="text-sm font-medium text-gray-900">Technical Support</p>
                <p className="text-xs text-gray-500">Last message: 1 day ago</p>
              </button>
            </div>
          </div>
        </div>

        {/* Chat main area */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex gap-3 max-w-[80%] mb-4",
                  message.sender === 'user' ? "ml-auto flex-row-reverse" : ""
                )}
              >
                <div>
                  <div
                    className={cn(
                      "rounded-2xl p-3",
                      message.sender === 'user'
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-900"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1 px-1">
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="px-6 pb-6">
            <div className="p-4 bg-[#333333] rounded-lg w-full">
              <div className="flex items-center gap-3">
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <ImageIcon className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                  <Smile className="w-5 h-5 text-gray-400" />
                </button>
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSupport; 