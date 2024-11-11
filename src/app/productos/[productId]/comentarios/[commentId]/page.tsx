export default function CommentDetail({
  params,
}: {
  params: { productId: string; commentId: string };
}) {
  return (
    <div className="flex items-center justify-center h-full text-xl bg-red-100">
      <h1>
        Comentario {params.commentId} del Producto {params.productId}
      </h1>
    </div>
  );
}
