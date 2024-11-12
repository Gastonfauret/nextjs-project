type Params = Promise<{ productId: string; commentId: string }>;

export default async function CommentDetail({
  params
}: {
  params: Params;
}) {
  // const { productId, commentId } = await params;

  return (
    <div className="flex items-center justify-center h-full text-xl bg-red-100">
      <h1>
        Comentario {(await params).commentId} del Producto {(await params).productId}
      </h1>
    </div>
  );
}
