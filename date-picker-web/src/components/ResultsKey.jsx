export default function ResultsKey() {
    const keyItems = [
        { color: "green", label: "✅ Everyone available" },
        { color: "yellowgreen", label: "All but one" },
        { color: "#ffcc00", label: "More than half" },
        { color: "#ff9900", label: "Less than half" },
        { color: "red", label: "One vote" },
        { color: "grey", label: "No votes" },
    ];

    return (
        <div style={{ marginTop: "2rem" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {keyItems.map((item, index) => (
                    <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "0.5rem" }}>
                        <div style={{
                            width: "16px",
                            height: "16px",
                            backgroundColor: item.color,
                            marginRight: "0.5rem",
                            borderRadius: "2px",
                            border: "1px solid #ccc"
                        }}></div>
                        <span>{item.label}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
