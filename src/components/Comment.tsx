import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css';

import { Avatar } from './Avatar';

interface ICommentProps {
  content: string;
  onDeleteComment: (content: string) => void;
}

const Comment = ({ content, onDeleteComment }: ICommentProps): JSX.Element => {
  const [likeCount, setLikeCount] = useState<number>(0);

  const handleDeleteComment = (): void => {
    onDeleteComment(content);
  };

  const handleLikecomment = (): void => {
    setLikeCount((state: number) => {
      return state + 1;
    });

    setLikeCount((state: number) => {
      return state + 1;
    });
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Sid5488.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Guilherme Sousa</strong>

              <time 
                title="11 de Maio às 12:13" 
                dateTime="2022-10-16 12:41"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikecomment}>
            <ThumbsUp />
            
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export { Comment };
