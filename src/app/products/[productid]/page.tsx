export default async function ProductsPage ({params}:{params:Promise<{productid:string}>}) {
    const productid = (await params).productid
    return(
        <div>
            <h1>This is product :{productid}</h1>
        </div>
    )
}