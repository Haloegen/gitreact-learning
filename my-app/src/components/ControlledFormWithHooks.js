import React, {useState} from 'react'

function ControlledFormWithHooks() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('website');
  const [comments, setComments] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, category, comments)
  }

  return (
    <div>
<form onSubmit={handleSubmit}>
        <div><label htmlFor='id-name'>Your name</label>
          <input value={name} onChange={(e) => setName(e.target.value)
          } id='id-name' name='name' type='text'/>
          </div>
          <div>
          <label htmlFor='id-category'>Your Category:</label>
          <select id='id-category' value={category} onChange={(e) => setCategory(e.target.value)} name='category'>
            <option value='website'>Website issue</option>
            <option value='order'>Order issue</option>
            <option value='general'>General inquiry</option>
          </select>
          </div>
          <div>
            <label htmlFor='id-comments'>
              Comments:
            </label>
            <textarea
            id='id-comments' value={comments} name='comments' onChange={(e) => setComments(e.target.value)}></textarea>
          </div>
          <input type='submit' value='Submit'/>
        </form>
    </div>
  )
}

export default ControlledFormWithHooks