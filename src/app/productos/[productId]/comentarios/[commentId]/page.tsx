type tParams = Promise<{ productId: string; commentId: string }>;

export default async function CommentDetail({
  params,
}: {
  params: tParams;
}) {
  const { productId, commentId } = await params;

  return (
    <div className="flex items-center justify-center h-full text-xl bg-red-100">
      <h1>
        Comentario {commentId} del Producto {productId}
      </h1>
    </div>
  );
}
