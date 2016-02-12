/**
 * Created by K.Yao on 2016/2/11.
 */
var data = [
    {id: 1, author: "Eddie Yao", text: "This is one comment"},
    {id: 2, author: "Joe Jung", text: "This is *another* comment"},
    {id: 3, author: "Leon wu", text: "This is *another again* comment"}
];

    var Comment = React.createClass({
        rawMarkup: function() {
            var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
            return {__html: rawMarkup};
        },

        render: function () {
            return (
                <div className="comment">
                    <h2>{this.props.author}</h2>
                    <span dangerouslySetInnerHTML = {this.rawMarkup()} />
                </div>
            );
        }
});


var CommentList = React.createClass({
    render: function () {
        var comments = this.props.data.map(function (comment) {
            return (<Comment author={comment.author} key={comment.id}> {comment.text}</Comment>);
        });
        return (
            <div className="commentList">
                {comments}
            </div>
        );
    }

});


var CommentForm = React.createClass({
    getInitialState: function() {
        return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
        this.setState({author : e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text : e.target.value});
    },
    handleSubmit: function(e) {
      e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!author || !text) {
            return;
        }
        this.props.onCommentSubmit({author: author, text: text});
        this.setState({author : '', text : ''});

    },
    render:function () {
        return(
            <form className ='commentForm' onSubmit={this.handleSubmit} >
                <input
                    type="text"
                    placeholder="Your name"
                    value = {this.state.author}
                    onChange = {this.handleAuthorChange}
                />
                <input
                    type="text"
                    placeholder="Say something..."
                    value = {this.state.text}
                    onChange = {this.handleTextChange}
                />
                <input type="submit" value="post" />
            </form>
        )
    }

});

var CommentBox = React.createClass({

    loadCommentsFromServer:function () {
        $.ajax({
            url:this.props.url,
            dataType:'json',
            cache:false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function () {
      return {data: []};
    },
    componentDidMount: function () {
        this.loadCommentsFromServer();
        setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    },

    onCommentSubmit : function (comment) {
        var comments = this.state.data;
        var time = Date.now();
        comment.id = time;
        var newComments = comments.concat(comment);
        this.setState(newComments);
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'post',
            data: comment,
            success: function (data) {
                this.setState({data: data})

            }.bind(this),
            error: function () {
                console.error(this.props.url, status, error.toString());
            }.bind(this)
        });
    },
  render: function() {
    return (
      <div className="commentBox">
      Hello, world! I am a CommentBox.
          <CommentList data={this.state.data}/>
          <CommentForm onCommentSubmit = {this.onCommentSubmit}/>
      </div>
    );
  }
});




ReactDOM.render(<CommentBox url='/api/comments' pollInterval={1000} />, document.getElementById('content'));
