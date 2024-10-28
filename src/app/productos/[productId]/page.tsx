
export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Producto {params.productId}</h1>;
}
