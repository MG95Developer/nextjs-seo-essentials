// use rfc shortcut

import Link from 'next/link';

export default function Header()
{
    return (
        <header className="pt-3">
            <nav>
                <Link
                    href="/"
                    className="flex items-center justify-center">
                    <h1 className="text-4xl py-5 font-semibold">External API</h1>
                </Link>
            </nav>

            <h6 className="text-center mb-2 italic">Fetch products - JSON</h6>
        </header>
    )
}
