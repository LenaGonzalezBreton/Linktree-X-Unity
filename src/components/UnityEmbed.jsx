export default function UnityEmbed() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "20px 0"
        }}>
            <iframe
                src="/unity-build/index.html"
                title="Demo Unity"
                style={{
                    width: "100%",
                    maxWidth: "900px", // <== taille max sur PC
                    height: "600px",   // <== augmente la hauteur
                    border: "none",
                    borderRadius: "12px",
                    boxShadow: "0 0 20px rgba(0,0,0,0.2)"
                }}
                allow="fullscreen"
            />
        </div>
    );
}
