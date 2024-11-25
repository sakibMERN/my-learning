import './Post.css'

export default function Post({post}){
    console.log(post);
    const {title, body, id, userId} = post;
    return(
        <div className='post'>
            <h5>Title: {title} </h5>
            <p><small>userId: {userId} </small></p>
            <p><small>postId: {id} </small></p>
            <p>Description: {body} </p>
        </div>
    )
}