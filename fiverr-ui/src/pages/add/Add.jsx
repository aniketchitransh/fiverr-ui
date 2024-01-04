import React from 'react'
import "./Add.scss"

const Add = () => {
    return (
        <div className='add'>
            <div className="container">
                <h1>Add New Gig</h1>
                <div className="sections">
                    <div className="left">
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder='e.g. I will do something I am really good at' />
                        <label htmlFor="">Category</label>
                        <select name="cats" id="cats">
                            <option value="design">Design</option>
                            <option value="web">Web Development</option>
                            <option value="music">Music</option>
                            <option value="animation">Animation</option>
                        </select>
                        <label htmlFor="">Cover Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload Images</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="16"
                            placeholder="Brief description to introduce your service to customers"
                        ></textarea>
                        <button>Create</button>
                    </div>
                    <div className="right">
                        <label htmlFor="">Service Title</label>
                        <input type="text" placeholder='e.g. One-page web design' />
                        <label htmlFor="">Short Description</label>
                        <textarea name="" placeholder='Short description of your service' id="" cols="30" rows="10"></textarea>
                        <label htmlFor="">Delivery Time (e.g. 3 Days)</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Revision Numbers</label>
                        <input type="number" min={1} />
                        <label htmlFor="">Add Feature</label>
                        <input type="text" placeholder='e.g. Page design' />
                        <input type="text" placeholder='e.g. file uploading' />
                        <input type="text" placeholder='e.g. setting up a domain' />
                        <input type="text" placeholder='e.g. hosting' />
                        <label htmlFor="">Price</label>
                        <input type="number" min={1} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add