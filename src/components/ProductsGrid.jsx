// use rfc shortcut

import Link from 'next/link';

export default async function ProductsGrid()
{
    const response = await fetch( 'https://dummyjson.com/products' );
    const { products } = await response.json();

    return ( <div className="w-full max-w-[1440px] py-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-1">
            {products.map( ( { id, title } ) => (
                <Link
                    href={`/products/${ id }`}
                    className="text-lg font-bold"
                    key={title}>
                    <div className="w-full h-[100px] bg-slate-300 p-5 cursor-pointer flex justify-center items-center hover:bg-slate-900 hover:text-white">
                        <h1 className="text-1xl text-center">{title}</h1>
                    </div>
                </Link>
            ) )}
        </div>
    </div> )
}
