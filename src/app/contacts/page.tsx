const Contact = () => {
    return(
        <div>
            <div className="min-h-[80vh] content-center">
            <h1 className="text-center text-2xl font-bold">Contact Us</h1>
            <form className="rounded-md p-2 bg-slate-200 w-[430px] m-auto">
                <label htmlFor="name">Name: </label>
                <input className="w-96 m-2 p-1 rounded-sm"  type="text" placeholder="Enter Your Name" name="name" id="name" required/>
                <label htmlFor="email">Email: </label>
                <input className="w-96 m-2 p-1 rounded-sm"  type="email" placeholder="Enter Your Email" name="email" id="email" required/>
                <label htmlFor="message">Message: </label>
                <textarea className="w-96 m-2 rounded-sm"  name="message" id="message" rows={4}></textarea>
                <div className="flex justify-end">
                <button className="bg-yellow-500 px-4 py-2 mr-5 hover:bg-yellow-300 rounded-lg font-bold mt-5">Send</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Contact