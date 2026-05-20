import { useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Atualiza o caminho se precisares!
import emailjs from "@emailjs/browser";
import "../styles/WaitlistPage.css"; // Importa o nosso novo CSS

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Por favor, insere um endereço de email válido.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");

    try {
      const waitlistRef = collection(db, "waitlist");
      const q = query(waitlistRef, where("email", "==", email.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setMessage("This email is already registered in our waitlist. 🌱");
        setIsSubmitting(false);
        return;
      }

      await addDoc(waitlistRef, {
        email: email.toLowerCase(),
        createdAt: serverTimestamp(),
      });

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        to_email: email.toLowerCase(),
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

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
    <div className="waitlist-page">
      <div className="waitlist-card">
        {/* LADO ESQUERDO: Formulário */}
        <div className="waitlist-form-side">
          <p className="waitlist-label">Join the journey</p>

          <h1 className="waitlist-title">
            Be the first to
            <br />
            <span>find your peace.</span>
          </h1>

          <p className="waitlist-desc">
            Join the waitlist and be among the first to transform your home into
            your safe space. We'll let you know as soon as we're ready.
          </p>

          {!submitted ? (
            <div className="waitlist-form-container">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
                onKeyDown={handleKeyDown}
                disabled={isSubmitting}
                className={`waitlist-input ${message && !message.includes("regist") ? "error" : ""}`}
              />

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="waitlist-btn"
              >
                {isSubmitting ? "Joining..." : "Join the waitlist"}
              </button>

              {message && (
                <p
                  className={`waitlist-error-msg ${message.includes("regist") ? "success" : "error"}`}
                >
                  {message}
                </p>
              )}
            </div>
          ) : (
            <div className="waitlist-success-card">
              <div className="waitlist-success-icon">🌱</div>
              <p className="waitlist-success-title">You're on the list!</p>
              <p className="waitlist-success-desc">
                Your spot is secured. Check your inbox for a welcome message
                from our team.
              </p>
            </div>
          )}
        </div>

        {/* LADO DIREITO: Área Visual (Sem Reviews) */}
        <div className="waitlist-visual-side">
          <div className="visual-glow-1" />
          <div className="visual-glow-2" />

          <div className="visual-message-box">
            <div className="visual-message-icon">✨</div>
            <h3 className="visual-message-title">Your sanctuary awaits</h3>
            <p className="visual-message-text">
              We are carefully crafting an ecosystem that listens to you.
              Prepare to experience your home in a completely new way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
