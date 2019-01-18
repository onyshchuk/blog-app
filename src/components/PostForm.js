import React from 'react';
import moment from 'moment';
import RemoveApprovalModal from './RemoveApprovalModal';

class PostForm extends React.Component {
   state = {
      id: this.props.post ? this.props.post.id : '',
      title: this.props.post ? this.props.post.title : '',
      body: this.props.post ? this.props.post.body : '',
      createdAt: this.props.post ? this.props.post.createdAt : moment().valueOf(),
      error: '',
      isOpen: false
   };
   onTitleChange = e => {
      const title = e.target.value;
      this.setState(() => ({ title }));
   };
   onBodyChange = e => {
      const body = e.target.value;
      this.setState(() => ({ body }));
   };
   onSaveClick = e => {
      e.preventDefault();

      if(this.state.title && this.state.body){
         this.props.handleSaveClick({
            id: this.state.id,
            title: this.state.title,
            body: this.state.body,
            createdAt: this.state.createdAt
         });
         this.setState({ error: '' });
      } else {
         this.setState({ error: 'Pls fill the fields' });
      }
   };
   onRemoveClick = () => {
      this.setState({ isOpen: true });
   };
   closeModal = () => {
      this.setState({ isOpen: false });
   };
   render() {
      return (
         <form className="form" onSubmit={this.onSaveClick}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
               className="text-input"
               autoFocus
               type="text"
               value={this.state.title}
               placeholder="Post title" 
               onChange={this.onTitleChange}
            />
            <textarea
               className="textarea"
               value={this.state.body}
               placeholder="Post body" 
               onChange={this.onBodyChange}
            />
            <div>
               <button className="button" type="submit">Save Post</button>
               {this.props.handleRemoveClick && <a className="button" onClick={this.onRemoveClick}>Remove Post</a>}
            </div>
            <RemoveApprovalModal
               isOpen={this.state.isOpen}
               selectedPostTitle={this.state.title}
               handleRemoveClick={this.props.handleRemoveClick}
               closeModal={this.closeModal}
            />
         </form>
      );
   };
};

export default PostForm;