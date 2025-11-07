export default function LinkButton({ label, href, onClick, variant = "default" }) {
    const className = `link-btn ${variant}`;
    if (href) {
        return (
            <a className={className} href={href} target="_blank" rel="noreferrer">
                {label}
            </a>
        );
    }
    return (
        <button className={className} onClick={onClick}>
            {label}
        </button>
    );
}
