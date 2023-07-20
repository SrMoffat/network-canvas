// @ts-nocheck
import Link from "next/link";

const GoHomeButton = ({ cta }) => (
    <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link href="/home" className="btn">{cta}</Link>
    </div>
);

export default GoHomeButton