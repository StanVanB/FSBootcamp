import { useState, useEffect } from 'react';

function Customers(){

    const [count, setCount] = useState(1);
    const [customer, setCustomer] = useState({ id: 0, name: '', email: '', phone: '', website: '' });

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                if (count < 1 || count > 10) {
                    setCount(1);
                    return;
                }
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`);
                const customer = await response.json();
                setCustomer(customer);
                console.log('Fetched customer:', customer);
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };
        fetchCustomers();
    }, [count]);

    return(
        <div>
            <h1>Customers</h1>
            <ul>
                    <li key={customer.id}>
                        <h2>{customer.name}</h2>
                        <p>{customer.email}</p>
                        <p>{customer.phone}</p>
                        <p>{customer.website}</p>
                    </li>
            </ul>
            <button onClick={() => setCount(count + 1)}>Next Customer</button>
            <button onClick={() => setCount(count - 1)}>Previous Customer</button>
        </div>
    )
}

export default Customers;

// 8 mins
// Task: Similar to Customers; use useEffect to fetch and display a list of posts from the JSONPlaceholder API.
//  Create a new component called Posts that fetches posts and displays them in a list. 
//  Include buttons to navigate through the posts, similar to the Customers component.
// https://jsonplaceholder.typicode.com/posts/1