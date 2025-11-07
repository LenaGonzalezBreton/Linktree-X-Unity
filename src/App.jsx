import { useState } from "react";
import LinkButton from "./components/LinkButton";
import UnityEmbed from "./components/UnityEmbed";
import "./App.css";

function App() {
    const [showUnity, setShowUnity] = useState(false);

    return (
        <div className="app">
            <div className="card">
                <h1>Léna Gonzalez-Breton</h1>
                <p className="subtitle">
                    Voici ma petite production en 30mn pour appuyer ma candidature chez vous 🎃.
                </p>

                <div className="links">
                    <LinkButton label="Mon GitHub" href="https://github.com/LenaGonzalezBreton/" />
                    <LinkButton label="Voir mon CV" href="/cv.pdf" />
                    <LinkButton
                        label={showUnity ? "Fermer la démo 3D" : "Démo WebGL Unity"}
                        onClick={() => setShowUnity((p) => !p)}
                        variant="accent"
                    />
                </div>

                {showUnity && (
                    <div className="unity-block">
                        <UnityEmbed />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
