import { GetServerSideProps } from 'next';

type Props = {
  params: { productId: string; commentId: string };
};

export default function CommentDetail({ params }: Props) {
  return (
    <div className="flex items-center justify-center h-full text-xl bg-red-100">
      <h1>
        Comentario {params.commentId} del Producto {params.productId}
      </h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { productId, commentId } = context.params!;

  return {
    props: {
      params: {
        productId,
        commentId,
      },
    },
  };
};
