import Starfield from "./Starfield";
import AuroraGlow from "./AuroraGlow";
import "../../styles/background.css";

export default function AnimatedBackground() {
    return (
        <div className="animated-background" aria-hidden="true">
            <AuroraGlow />
            <Starfield />
            <div className="neon-grid" />
            <div className="grain" />
        </div>
    );
}