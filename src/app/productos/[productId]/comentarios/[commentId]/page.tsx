type Params = { productId: string; commentId: string };

export default function CommentDetail({
  params
}: {
  params: Params;
}) {
  const { productId, commentId } = params;

  return (
    <div className="flex items-center justify-center h-full text-xl bg-red-100">
      <h1>
        Comentario {commentId} del Producto {productId}
      </h1>
    </div>
  );
}
