export default async function ({params}:{params:Promise<{productid:string ,reviewId:string}>}) {
    const {reviewId,productid} = await params
    return(
        <h1>Review {reviewId} and product {productid}</h1>
    )
}