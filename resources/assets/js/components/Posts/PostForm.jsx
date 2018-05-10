import React from 'react';
import onClickOutside from 'react-onclickoutside';
import propTypes from 'prop-types';

const postFromPropTypes = {
    categories: propTypes.array.isRequired,
    onSubmit: propTypes.func.isRequired,
    title: propTypes.string,
    category_id: propTypes.number,
    body: propTypes.string
};
const defaultProps = {
    title: '',
    category_id: 0,
    body: ''
};

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: this.props.title,
            category_id: this.props.category_id,
            body: this.props.body,
            error: ''
        }

        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onBodyChange = this.onBodyChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.id !== this.state.id) {
            this.setState(() => ({
                title: nextProps.title,
                category_id: nextProps.category_id,
                body: nextProps.body,
            }));
        }
    }

    onCategoryChange(e) {
        e.persist();
        this.setState(() => ({category_id: e.target.value}));
    }

    onTitleChange(e) {
        e.persist();
        this.setState(() => ({title: e.target.value}));
    }

    onBodyChange(e) {
        e.persist();
        this.setState(() => ({body: e.target.value}));
    }

    handleClickOutside () {
        this.setState(() => ({error: ''}));
    }

    onSubmit(e) {
        e.preventDefault();
        if(!this.state.title || !this.state.category_id || !this.state.body) {
            this.setState(() => ({error: 'This field is required'}));
        } else {
            this.setState(() => ({
                title: '',
                category_id: 0,
                body: '',
                error: ''
            }));
            this.props.onSubmit({
                title: this.state.title,
                category_id: this.state.category_id,
                body: this.state.body
            });
        }
    }

    render() { 
        return ( 
            <form onSubmit={this.onSubmit} className="mb-3">
                <div className="form-group">
                    <input 
                        type="text" 
                        className={this.state.error && !this.state.title ? 'form-control is-invalid' : 'form-control'}
                        value={this.state.title}
                        onChange={this.onTitleChange}
                        placeholder="Title"
                    />
                    {(this.state.error && !this.state.title) && <div className="invalid-feedback">{this.state.error}</div>}
                </div>
                <div className="form-group">
                    <select 
                        className={this.state.error && !this.state.category_id ? 'custom-select is-invalid' : 'custom-select'} 
                        value={this.state.category_id}
                        onChange={this.onCategoryChange}
                    >
                        <option value={0}>Select a category</option>
                        {
                            this.props.categories.map((category) => 
                                <option key={category.id} value={category.id}>{category.name}</option>
                            )
                        }
                    </select>
                    {(this.state.error && !this.state.category_id) && <div className="invalid-feedback">{this.state.error}</div>}
                </div>
                <div className="form-group">
                    <textarea 
                        className={this.state.error && !this.state.body ? 'form-control is-invalid' : 'form-control'} 
                        value={this.state.body}
                        onChange={this.onBodyChange} 
                        placeholder="Write a post..." 
                        rows="4"
                    ></textarea>
                    {(this.state.error && !this.state.body) && <div className="invalid-feedback">{this.state.error}</div>}
                </div>
                <button 
                    type="submit" 
                    className={`btn ${!this.props.title ? 'btn-primary' : 'btn-success'} btn-lg btn-block`}
                >
                    {!this.props.title ? 'Add Post' : 'Update Post'}
                </button>
            </form>
         )
    }
}

PostForm.propTypes = postFromPropTypes;
PostForm.defaultProps = defaultProps;
 
export default onClickOutside(PostForm);