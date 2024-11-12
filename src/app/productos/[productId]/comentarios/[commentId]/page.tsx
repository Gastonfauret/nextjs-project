type PageProps = {
  params: { productId: string; commentId: string };
};

export default function CommentDetail({ params }: PageProps) {
  return (
    <div>
      <h1>Comentario {params.commentId} del Producto {params.productId}</h1>
    </div>
  );
}
