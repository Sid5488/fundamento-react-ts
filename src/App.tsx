import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';

import styles from './app.module.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

interface IComment {
  type: 'paragraph' | 'link';
  content: string;
}

interface IPostFromUser {
  id: number;
  author: {
    avatar: string;
    name: string;
    role: string;
  },
  content: Array<IComment>;
  publishedAt: Date;
}

const posts: Array<IPostFromUser> = [
  {
    id: 1,
    author: {
      avatar: 'https://github.com/Sid5488.png',
      name: 'Guilherme Sousa',
      role: 'CTO | CEO @Woz Company'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Tudo bem?' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-19 20:00:00')
  },
  {
    id: 2,
    author: {
      avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQGpE_Nln0jyUQ/profile-displayphoto-shrink_200_200/0/1581934748383?e=1671667200&v=beta&t=S39kKVMKNciDV4NxK0MvAq7t7n35g_PUF3CxmvHIDfE',
      name: 'Eduarda Machado',
      role: 'Co-CEO @Woz Company'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa'},
      { type: 'paragraph', content: 'Tudo bem?' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-10-18 20:00:00')
  },
];

const App = (): JSX.Element => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          { posts.map(post => (
            <Post 
              key={post.id} 
              author={post.author} 
              content={post.content} 
              pubishedAt={post.publishedAt} 
            />
          )) }
        </main>
      </div>
    </>
  );
};

export { App };
