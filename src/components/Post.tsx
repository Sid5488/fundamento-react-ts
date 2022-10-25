import { useState, FormEvent, ChangeEvent } from 'react';
import ptBR from 'date-fns/locale/pt-BR';
import { format, formatDistanceToNow } from 'date-fns';

import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

interface IAuthor {
  avatar: string;
  name: string;
  role: string;
}

interface IContent {
  type: 'paragraph' | 'link';
  content: string;
}

interface IPostProps {
  author: IAuthor,
  content: Array<IContent>;
  pubishedAt: Date;
}

const Post = ({ 
  author, 
  content, 
  pubishedAt 
}: IPostProps): JSX.Element => {
  const [newCommentText, setNewCommentText] = useState<string>('');
  const [comments, setComments] = useState<Array<string>>([
    'Post muito bacana hein?!'
  ]);

  const publishDateFormmat: string = format(pubishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow: string = formatDistanceToNow(pubishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  const handleCreateNewComment = (event: FormEvent): void => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  const handleNewCommentInvalid = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  };

  const deleteComment = (commentToDelete: string): void => {
    const commentsWithoutDeletedOne = comments.filter(
      comment => comment != commentToDelete
    );

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty: boolean = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={ author.avatar } />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time 
          title={publishDateFormmat}
          dateTime={pubishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line: IContent, index) => {
          if(line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          } else if(line.type === 'link') {
            return <p key={index}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentPost} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          onChange={
            (event: ChangeEvent<HTMLTextAreaElement>) => 
              setNewCommentText(event.target.value)
          } 
          value={newCommentText}
          placeholder="Deixe um comentário"
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment 
            key={index} 
            content={comment} 
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};

export { Post };
