from __future__ import annotations

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def check_exists(path: str, source: Path) -> list[str]:
    if path.startswith(("http://", "https://", "#", "mailto:", "tel:")):
        return []
    if path.endswith(".html") or "/" in path or path.startswith("assets"):
        target = (ROOT / path).resolve()
        if not target.exists():
            return [f"{source.relative_to(ROOT)} references missing file: {path}"]
    return []


def main() -> int:
    errors: list[str] = []

    for html in [ROOT / "index.html", ROOT / "quiz.html"]:
        text = html.read_text(encoding="utf-8")
        for attr in ("src", "href"):
            for match in re.finditer(rf'{attr}="([^"]+)"', text):
                errors.extend(check_exists(match.group(1), html))

    for js in [ROOT / "src/data/questions.js", ROOT / "src/data/courses.js", ROOT / "src/js/main.js", ROOT / "src/js/quiz.js"]:
        text = js.read_text(encoding="utf-8")
        if "\ufffd" in text:
            errors.append(f"{js.relative_to(ROOT)} contains replacement characters")

    if errors:
        print("Validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Static validation passed.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
