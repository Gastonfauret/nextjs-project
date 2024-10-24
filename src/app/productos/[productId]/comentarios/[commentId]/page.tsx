export default function CommentDetail({
    params,
  }: {
    params: { productId: string; commentId: string; };
  }) {
    return <h1>Comentario {params.commentId} del Producto {params.productId}</h1>;
  }

  //https://www.youtube.com/watch?v=r5fkL5_rB70
  // Min. 44' 40"
  //Error 404
  