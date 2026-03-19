import express from 'express';
import cors from 'cors';
import Groq from 'groq-sdk'; // Importamos Groq
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());

// Inicializar Groq con tu nueva llave
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    const completion = await groq.chat.completions.create({
      messages: messages, // Groq acepta el array de mensajes directamente
      model: "llama-3.3-70b-versatile", // Un modelo gratuito y muy potente
    });

    const responseText = completion.choices[0]?.message?.content || "";
    
    res.json({ role: 'assistant', content: responseText });

  } catch (error) {
    console.error("Error con Groq:", error);
    res.status(500).json({ error: "Error en el servidor de Groq" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Servidor Groq corriendo en puerto 5000");
});