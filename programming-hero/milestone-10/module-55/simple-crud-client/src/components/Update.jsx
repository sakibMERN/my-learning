import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        // console.log(name, email);
        const updateUser = {
            name, 
            email
        }
        console.log(updateUser);

        await fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                alert('User updated Successfully.');
            }
        })
    }
    return (
        <div>
            <h3>Updated user of loaded data: {loadedUser.name}</h3>
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} /><br />
                <input type="email" name="email" defaultValue={loadedUser?.email} /><br />
                <input type="submit" value={"Update"} />
            </form>
        </div>
    );
};

export default Update;