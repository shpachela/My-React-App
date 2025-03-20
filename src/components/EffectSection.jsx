import Button from './Button/Button';
import useInput from './hooks/useInput';
import Modal from './Modal/Modal';
import { useEffect, useState, useCallback } from 'react';
export default function EffectSection() {
    const input = useInput();
    const [modal, setModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const fetchUsers = useCallback(async () => {
        setLoading(false);
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json();
        setUsers(users);
        setLoading(false);
    }, [])


    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>Effects</h3>
            <Button onClick={() => setModal(true)} style={{ marginBottom: '1rem' }}>Открыть информацию</Button>
            <Modal open={modal}>
                <h3>Hellow from modal</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cupiditate iusto provident, nihil temporibus asperiores hic obcaecati iste facere quasi eveniet, dolores qui autem, nostrum dignissimos omnis modi ad placeat.</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>
            {loading && <p>Loading...</p>}
            {!loading && (
                <>
                    <input type="text" className='control' {...input} />
                    <ul>
                        {users
                            .filter((user) =>
                                user.name.toLowerCase().includes(input.value.toLowerCase())
                            )
                            .map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                    </ul>
                </>

            )}
        </section>
    );
}