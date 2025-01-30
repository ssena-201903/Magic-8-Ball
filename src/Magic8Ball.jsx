import { useState } from "react";
import "./Magic8Ball.scss";

const Magic8Ball = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isShaking, setIsShaking] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("primary");

  const answers = [
    "Kesinlikle evet!",
    "Evet",
    "Büyük ihtimalle",
    "Görünüşe göre evet",
    "Kararsızım",
    "Tekrar sor",
    "Şu an söyleyemem",
    "Şimdi tahmin edemem",
    "Odaklan ve tekrar sor",
    "Buna güvenebilirsin",
    "Cevabım evet",
    "En iyisi şimdi söylememek",
    "Pek iyi görünmüyor",
    "Şüpheli",
    "Hayır",
    "Kaynaklarım hayır diyor",
    "Kesinlikle hayır",
    "Asla",
    "Buna inanma",
    "Muhtemelen",
    "İmkansız",
    "Mümkün",
    "Olabilir",
    "Neden olmasın?",
    "Hayal bile edemezsin",
    "Tabii ki",
    "Belki",
    "İyi görünüyor",
    "Umut var",
    "Bekle ve gör",
  ];

  const colorClasses = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "purple",
    "cyan",
    "orange",
    "teal",
    "lime",
    "emerald",
    "violet",
    "fuchsia",
    "rose",
    "amber",
    "sky",
    "blue",
    "red",
    "green",
    "yellow",
    "indigo",
    "pink",
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "light",
    "dark",
  ];

  const handleShake = () => {
    if (!question.trim()) return;

    setIsShaking(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * answers.length);
      setAnswer(answers[randomIndex]);
      setBackgroundColor(colorClasses[randomIndex]);
      setIsShaking(false);
    }, 1000);
  };

  return (
    <div className={`magic-container ${backgroundColor}`}>
      <div className="magic-card">
        <div className="magic-content">
          <div className={`magic-ball ${isShaking ? "shake" : ""}`}>
            <svg viewBox="0 0 100 100" className="ball-svg">
              <circle cx="50" cy="50" r="45" className="ball-outer" />
              <circle cx="50" cy="50" r="35" className="ball-inner" />{" "}
              {/* Mavi alanı büyüttüm */}
              <circle cx="50" cy="50" r="30" className="ball-window" />{" "}
              {/* Beyaz alanı da büyüttüm */}
              {answer && (
                <text
                  x="50"
                  y="50"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="ball-text"
                >
                  {answer}
                </text>
              )}
            </svg>
          </div>

          <input
            type="text"
            placeholder="Bir soru sorun..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="magic-input"
          />

          <button
            onClick={handleShake}
            className="magic-button"
            disabled={isShaking || !question.trim()}
          >
            Sonucu Göster
          </button>
        </div>
      </div>
    </div>
  );
};

export default Magic8Ball;
