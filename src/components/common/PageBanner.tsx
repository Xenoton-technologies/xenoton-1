import { Link } from "react-router-dom";

export function PageBanner({
  title,
  crumb = title,
  image,
}: {
  title: string;
  crumb?: string;
  image?: string;
}) {
  return (
    <section
      className="bi-bredcrumbs-section"
      style={{
        background: [
          "radial-gradient(ellipse 50% 80% at 80% 20%, rgba(109,85,233,0.35), transparent 70%)",
          "radial-gradient(ellipse 40% 70% at 10% 90%, rgba(255,80,184,0.22), transparent 70%)",
          "linear-gradient(0deg, rgba(22,35,43,0.8), rgba(22,35,43,0.8))",
          image ? `url(${image}) center / cover no-repeat` : "",
          "#000",
        ]
          .filter(Boolean)
          .join(", "),
      }}
    >
      <div className="hap-container">
        <div className="bi-breadcrumbs-content">
          <h1 className="headline-title">{title}</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>{crumb}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
