export default async function CommentDetail({
  params,
}: {
  params: { productId: string; commentId: string };
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
