import React, { useState } from 'react';

// Interfaz para que TypeScript reconozca los mensajes
interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

// 1. CORRECCIÓN: El nombre de la función debe coincidir con lo que exportas al final
const ModeloIA = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]); 
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setLoading(true);
    setInput('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      // Validamos que la respuesta sea correcta antes de procesarla
      if (!response.ok) throw new Error("Error en la respuesta del servidor");

      const data = await response.json() as ChatMessage;
      setMessages((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error conectando al backend:", error);
      alert("¡Oops! Asegúrate de que el servidor (puerto 5000) esté encendido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Chat con Groq</h2>
      
      {/* Caja de mensajes con scroll automático */}
      <div style={{ 
        height: '450px', 
        border: '1px solid #444', 
        borderRadius: '10px', 
        overflowY: 'auto', 
        padding: '20px', 
        background: 'rgba(255, 255, 255, 0.05)',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {messages.length === 0 && (
          <p style={{ color: '#888', textAlign: 'center', marginTop: '180px' }}>
            Inicia una conversación con la IA...
          </p>
        )}
        
        {messages.map((msg, index) => (
          <div key={index} style={{ 
            marginBottom: '15px', 
            textAlign: msg.role === 'user' ? 'right' : 'left' 
          }}>
            <div style={{ 
              display: 'inline-block', 
              padding: '10px 15px', 
              borderRadius: '15px', 
              background: msg.role === 'user' ? '#007bff' : '#444',
              color: 'white',
              maxWidth: '80%',
              wordBreak: 'break-word'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <p style={{ color: '#007bff', fontSize: '0.9rem' }}>Gemini está pensando...</p>}
      </div>

      {/* Formulario de envío */}
      <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '10px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Escribe un mensaje..."
          style={{ 
            flexGrow: 1, 
            padding: '12px', 
            borderRadius: '5px', 
            border: '1px solid #444', 
            background: '#1a1a1a', 
            color: 'white',
            outline: 'none'
          }}
        />
        <button 
          type="submit" 
          disabled={loading || !input.trim()} 
          style={{ 
            padding: '10px 25px', 
            borderRadius: '5px', 
            background: loading ? '#555' : '#007bff', 
            color: 'white', 
            border: 'none', 
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          {loading ? '...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

// 2. CORRECCIÓN: Exportamos el nombre correcto de la función
export default ModeloIA;