import React, { useState } from 'react';
import { Paperclip, Send } from 'lucide-react';
import avatar from '../../assets/avatar.png';
import avatar2 from '../../assets/avatar2.png';
import avatar3 from '../../assets/avatar3.png';

const PrivateChat = () => {
    const [activeTab, setActiveTab] = useState('private');
    const [users] = useState([
        { id: 1, name: 'Abdul Moiz', online: true, image: avatar },
        { id: 2, name: 'Hadia Bhatti', online: false, image: avatar2 },
        { id: 3, name: 'Ali Qureshi', online: true, image: avatar3 },
    ]);

    const [selectedUserId, setSelectedUserId] = useState(1);

    const [messages, setMessages] = useState({
        1: [
            { sender: 'Abdul Moiz', text: 'Hello Ali!', time: '12:45 PM' },
            { sender: 'Abdul Moiz', text: 'Can you arrange schedule for next meeting?', time: '12:45 PM' },
            { sender: 'You', text: "Okay, I'll arrange it soon. I notify you when it's done", time: '12:45 PM' },
        ],
        2: [
            { sender: 'Hadia Bhatti', text: 'Did you finish the report?', time: '11:30 AM' },
            { sender: 'You', text: 'Almost done. Will share soon.', time: '11:35 AM' },
        ],
        3: [],
    });

    const [input, setInput] = useState('');

    const sendMessage = () => {
        if (input.trim() === '') return;

        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const newMessage = { sender: 'You', text: input, time };

        setMessages(prev => ({
            ...prev,
            [selectedUserId]: [...prev[selectedUserId], newMessage],
        }));
        setInput('');
    };

    const selectedUser = users.find(u => u.id === selectedUserId);

    return (
        <div className=" mb-30 min-h-screen">
            <div className='grid grid-cols-[20%_80%] max-w-6xl mx-auto min-h-screen pt-30'>
                <div className='order-1 z-1 '>
                    <div className='flex flex-row items-center'>
                        <div>
                            <img src={selectedUser.image} alt="" className='rounded-full bg-BgSecondary h-17' />
                        </div>
                        <div className='pl-4'>
                            <div className="font-bold font-poppins">{selectedUser.name}</div>
                            <div className={`text-sm font-poppins ${selectedUser.online ? 'text-green-500' : 'text-gray-400'}`}>
                                ● {selectedUser.online ? 'Online' : 'Offline'}
                            </div>
                        </div>
                    </div>

                    <div className=' mt-6 pt-6 mb-6 border-t border-gray-200'>
                        <p className='font-bold font-poppins'> Chats</p>
                    </div>

                    <div className=''>
                        <button onClick={() => setActiveTab('private')} className={`text-[14px] font-bold font-poppins cursor-pointer px-4 py-2 ${activeTab === 'private' ? 'border-b-3 border-hoverGreen text-black' : 'border-b border-gray-200 text-black'}`}>Private</button>
                        <button onClick={() => setActiveTab('group')} className={`text-[14px] font-bold font-poppins cursor-pointer px-4 py-2 ${activeTab === 'group' ? 'border-b-3 border-hoverGreen text-black' : 'border-b border-gray-200 text-black'}`}>Group</button>
                    </div>

                    <div>
                        {activeTab === 'private' &&
                            <div className='pt-5'>
                                <div className="w-full overflow-y-auto">
                                    {users.map(user => {
                                        const userMessages = messages[user.id];
                                        const lastMessage = userMessages?.length ? userMessages[userMessages.length - 1] : null;

                                        return (
                                            <div
                                                key={user.id}
                                                onClick={() => setSelectedUserId(user.id)}
                                                className={`p-4 font-poppins cursor-pointer border-b border-gray-200 hover:bg-gray-100 hover:rounded-2xl ${user.id === selectedUserId ? 'bg-gray-100 rounded-2xl' : ''}`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <div>
                                                        <img src={user.image} alt="" className='rounded-full bg-BgSecondary h-10' />
                                                    </div>

                                                    <div className='py-2'>
                                                        <div className="font-bold font-poppins">{user.name}</div>

                                                        <div className="text-sm text-gray-500">
                                                            {lastMessage
                                                                ? `${lastMessage.text.slice(0, 20)}${lastMessage.text.length > 20 ? '...' : ''}`
                                                                : 'No messages yet'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div className='order-2 bg-gray-50 rounded-xl p-5 ml-10 flex flex-col h-full'>
                    <div className="w-full flex flex-col h-full">
                        <div className="pt-1 pb-4 border-b border-gray-200 flex items-center gap-2">
                            <img src={selectedUser.image} alt="" className='rounded-full bg-BgSecondary h-10' />
                            <div>
                                <div className="font-bold font-poppins">{selectedUser.name}</div>
                                <div className={`text-sm font-poppins ${selectedUser.online ? 'text-green-500' : 'text-gray-400'}`}>
                                    ● {selectedUser.online ? 'Online' : 'Offline'}
                                </div>
                            </div>
                        </div>

                        <div className="py-4 space-y-3 flex-1 overflow-y-auto">
                            {messages[selectedUserId]?.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[70%] px-4 py-2 rounded-xl text-sm ${msg.sender === 'You' ? 'bg-green-100' : 'bg-gray-100'} text-gray-800`}>
                                        {msg.text}
                                        <div className="text-right text-xs mt-1 text-gray-400">{msg.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-gray-200 flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Write your message..."
                                className="flex-1 border border-gray-400 rounded-full px-4 py-2 text-sm outline-none"
                            />
                            <button className="text-gray-500 hover:text-black">
                                <Paperclip size={20} />
                            </button>
                            <button onClick={sendMessage} className="bg-BgPrimary text-white px-4 py-2 rounded-full">
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateChat;
