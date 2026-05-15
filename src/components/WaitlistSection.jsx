import { useState } from "react";
import { colors, fonts } from "../styles/theme";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Ajusta este caminho para o teu ficheiro firebase.js
import emailjs from "@emailjs/browser"; // Importação do EmailJS

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(""); // Para guardar erros ou avisos

  const handleSubmit = async () => {
    // 1. Validação básica do email
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Por favor, insere um endereço de email válido.");
      return;
    }

    setIsSubmitting(true);
    setMessage(""); // Limpa mensagens anteriores

    try {
      // 2. Referência à coleção "waitlist"
      const waitlistRef = collection(db, "waitlist");

      // 3. Verifica se o email já existe na base de dados
      const q = query(waitlistRef, where("email", "==", email.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Se a query não estiver vazia, o email já lá está
        setMessage("This email is already registered in our waitlist.");
        setIsSubmitting(false);
        return;
      }

      // 4. Se não existir, guarda o email na BD
      await addDoc(waitlistRef, {
        email: email.toLowerCase(),
        createdAt: serverTimestamp(), // Guarda a data/hora exata do registo
      });

      // 5. Enviar o email de confirmação via EmailJS usando as variáveis de ambiente
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        to_email: email.toLowerCase(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // 6. Sucesso!
      setSubmitted(true);
    } catch (error) {
      console.error("Erro ao processar o registo: ", error);
      setMessage("There was an error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${colors.lightGreen}, ${colors.beige})`,
        padding: "110px clamp(1.5rem, 5vw, 4rem)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.softGreen}28, transparent 70%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: fonts.main,
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: colors.darkGreen,
            marginBottom: 18,
            letterSpacing: "-0.025em",
          }}
        >
          Be the first to
          <br />
          <span style={{ color: colors.green }}>find your peace.</span>
        </h2>

        <p
          style={{
            fontFamily: fonts.main,
            fontSize: "1.05rem",
            color: colors.textLight,
            marginBottom: 44,
            lineHeight: 1.75,
          }}
        >
          Join the waitlist and be among the first to transform your home into
          your safe space.
        </p>

        {!submitted ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 8,
                maxWidth: 480,
                width: "100%",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage(""); // Limpa o erro assim que o utilizador começa a escrever de novo
                }}
                onKeyDown={handleKeyDown}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  minWidth: 220,
                  padding: "14px 22px",
                  borderRadius: 50,
                  border: `1.5px solid ${message ? "red" : colors.softGreen}`,
                  background: "white",
                  fontFamily: fonts.main,
                  fontSize: 15,
                  color: colors.darkGreen,
                  outline: "none",
                  transition: "border-color 0.2s",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onFocus={(e) => {
                  if (!message) e.target.style.borderColor = colors.green;
                }}
                onBlur={(e) => {
                  if (!message) e.target.style.borderColor = colors.softGreen;
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  background: colors.green,
                  color: "white",
                  border: "none",
                  borderRadius: 50,
                  padding: "14px 28px",
                  fontFamily: fonts.main,
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  whiteSpace: "nowrap",
                  boxShadow: `0 4px 20px ${colors.green}40`,
                  transition: "all 0.2s",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = `0 8px 28px ${colors.green}50`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = `0 4px 20px ${colors.green}40`;
                  }
                }}
              >
                {isSubmitting ? "Joining..." : "Join waitlist"}
              </button>
            </div>

            {/* Mensagem de Erro / Aviso */}
            {message && (
              <p
                style={{
                  color: message.includes("regist") ? colors.darkGreen : "red",
                  fontFamily: fonts.main,
                  fontSize: "0.9rem",
                  marginTop: 12,
                  fontWeight: 500,
                }}
              >
                {message}
              </p>
            )}
          </div>
        ) : (
          <div
            style={{
              background: `${colors.softGreen}45`,
              border: `1px solid ${colors.softGreen}`,
              borderRadius: 20,
              padding: "24px 36px",
              animation: "fadeUp 0.4s ease",
            }}
          >
            <p
              style={{
                fontFamily: fonts.main,
                fontWeight: 800,
                color: colors.darkGreen,
                fontSize: "1.15rem",
                marginBottom: 6,
              }}
            >
              You're on the list!
            </p>
            <p
              style={{
                fontFamily: fonts.main,
                color: colors.textLight,
                fontSize: "0.95rem",
              }}
            >
              We'll reach out when your safe space is ready. Check your inbox!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
