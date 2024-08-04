import Form from "@components/Form"
import '@styles/globals.css'

const create = () => {
  return (
    <section className="w-full max-w-full flex-end flex-col">
        <h1 className="blue_gradient head_text">Create Post</h1>
        <p className="desc">
            Create group invites to find like-minded groupmates for your project today!
        </p>
        <Form/>
    </section>
    
  )
}

export default create