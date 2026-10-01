import AnimatedBackground from "./components/background/AnimatedBackground";

function App() {
    return (
        <>
            <AnimatedBackground />

            <main
                style={{
                    position: "relative",
                    padding: "120px 40px",
                    textAlign: "center",
                }}
            >
                <h1
                    style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    }}
                >
                    Background Test ✨
                </h1>

                <p style={{ color: "var(--text-2)", marginTop: "16px" }}>
                    Gerakkan mouse → bintang parallax.
                    Scroll → warna aurora bergeser.
                </p>

                {[1, 2, 3, 4].map((n) => (
                    <div
                        key={n}
                        style={{
                            height: "80vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--text-3)",
                            fontFamily: "var(--font-mono)",
                            letterSpacing: "3px",
                            textTransform: "uppercase",
                            fontSize: "0.8rem",
                        }}
                    >
                        — Scroll area {n} —
                    </div>
                ))}
            </main>
        </>
    );
}

export default App;