import { faGithub, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function SocialMedias() {
    return(
        <div className="flex gap-2">
      <Link
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="border border-[var(--neutral-300)] rounded-lg w-10 h-10 flex items-center justify-center bg-background text-foreground hover:bg-[var(--neutral-200)] transition"
      >
        <FontAwesomeIcon icon={faXTwitter} size="lg" />
      </Link>
      <Link
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="border border-[var(--neutral-300)] rounded-lg w-10 h-10 flex items-center justify-center bg-background text-foreground hover:bg-[var(--neutral-200)] transition"
      >
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </Link>
      <Link
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="border border-[var(--neutral-300)] rounded-lg w-10 h-10 flex items-center justify-center bg-background text-foreground hover:bg-[var(--neutral-200)] transition"
      >
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </Link>
      <button
        className="border border-[var(--neutral-300)] rounded-lg w-10 h-10 flex items-center justify-center bg-background text-foreground hover:bg-[var(--neutral-200)] transition"
        aria-label="Toggle dark mode"
        type="button"
      >
        <Image src="/favicon-32x32.png" alt="frontendmentor logo" width={24} height={24} />
      </button>
    </div>
    )
}