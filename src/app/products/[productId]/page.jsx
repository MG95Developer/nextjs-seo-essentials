// use rfc shortcut

import Image from "next/image";
import Link from "next/link";

// Paste the URL in the browser: https://dummyjson.com/products (GET method) to check all the properties inside each object

export default async function ProductPage( { params: { productId } } )
{
    // fetch data from external API
    const response = await fetch( `https://dummyjson.com/products/${ productId }` );
    // save the fetched data, convert it into JSON and destructure only the necessary properties
    const { title, description, brand, category, thumbnail } = await response.json();

    // VSCode console debugging: useful when building the 404 page
    // BUILD THE CONSOLE LOG

    {
        return (
            <div className="w-full max-w-[80%] mx-auto p-5">
                {/* Render the API products inside the UI */}
                <div className="mb-10">
                    <Link href="/">
                        <p className="uppercase font-semibold text-center">check all products</p>
                    </Link>
                </div>

                <div className="text-center bg-slate-100 p-10 w-full max-w-[800px] mx-auto">
                    <h1 className="text-3xl text-center font-bold mb-8">{title}</h1>
                    <div className="flex justify-center items-center">
                        {/* to render the API images you need to update the next.config.js file */}
                        <Image src={thumbnail} alt={title} width={500} height={300} />
                    </div>
                    <p className="text-lg py-8">Details: {description}</p>
                    <p className="text-lg">Brand: {brand}</p>
                    <p className="text-lg font-bold">Category: <span className="uppercase">{category}</span></p>
                </div>

            </div>
        );

    }
}



