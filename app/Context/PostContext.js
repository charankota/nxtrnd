'use client'
import { createContext, useState } from 'react';
export const PostContext = createContext(

);

export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', description: 'Description of Post 1' },
    ]);

    const [user, setUser] = useState([]);
    const [userType, setUserType] = useState('');
    const [rnd, setRnd] = useState('Charan123');
    const [studentId, setStudentId] = useState(1);
    const [examId, setExamId] = useState(1);
    const [examLevel, setExamLevel] = useState("Easy");
    const [totCorrect, setTotCorrect] = useState(0);
    const [totQue, setTotQue] = useState(0);
    const [barTot, setBarTot] = useState(0);

    const [qno, setQno] = useState(1);

    const changeRnd = (val) => {
        setRnd(val);
    };

    const setStdId = (val) => {
        setStudentId(val);
    }
    const setUsr = (val) => {
        setUser(val);
        console.log(val);
    }
    const setUsrType = (val) => {
        setUserType(val);
    }
    const setExmId = (val) => {
        setExamId(val);
    }

    const rndDisplay = () => {
        console.log('Rnd : ' + rnd);
    }

    setRnd: () => { };
    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const editPost = (id, updatedPost) => {
        setPosts(prevPosts => {
            return prevPosts.map(post => {
                if (post.id === id) {
                    return { ...post, ...updatedPost };
                }
                return post;
            });
        });
    }

    const deletePost = (id) => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    }



    return (
        <PostContext.Provider value={{ barTot, setBarTot, totQue, setTotQue, totCorrect, setTotCorrect, studentId, setStdId, user, setUsr, examId, setExamId, userType, setUsrType, rnd, changeRnd, rndDisplay, examLevel, setExamLevel }}>
            <div>{children}</div>
        </PostContext.Provider>
    )
}