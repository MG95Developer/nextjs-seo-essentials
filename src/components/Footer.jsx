// use rfc shortcut

import Link from 'next/link';

export default function Footer()
{
    return (
        <footer className="mt-10 bg-slate-300  w-full p-5 text-center text-sm text-slate-900">

            <p>No rights reserved.</p>

            <div className="flex justify-center items-center">
                <Link href="https://www.youtube.com/@TheJavascriptWay" target="_blank" className="p-3 font-bold">
                    The JavaScript Way Channel - Web Development Tutorials
                </Link>
            </div>

        </footer>
    )
}
