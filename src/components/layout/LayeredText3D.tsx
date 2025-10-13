
interface LayeredText3DProps {
    text: string;
    layers?: number;
    depth?: number;
}

export function LayeredText3D({ text, layers = 6, depth = 1 }: LayeredText3DProps) {
    const baseClasses = "relative text-5xl md:text-7xl font-headline leading-tight drop-shadow-lg";

    return (
        <div className="relative">
            {/* Create multiple layers for the 3D effect */}
            {Array.from({ length: layers }).map((_, i) => (
                <h1
                    key={i}
                    className={`${baseClasses} text-3d-layer`}
                    style={{
                        transform: `translate(${i * depth}px, ${i * depth}px)`,
                        zIndex: layers - i - 1,
                        // Opacity decreases for layers further back to create a fading shadow
                        opacity: 1 - (i / layers) * 0.8,
                    }}
                    aria-hidden="true" // Hide decorative layers from screen readers
                >
                    {text}
                </h1>
            ))}
            {/* Top, visible layer */}
            <h1
                className={`${baseClasses} text-primary-foreground`}
                style={{ zIndex: layers }}
            >
                {text}
            </h1>
        </div>
    );
}
