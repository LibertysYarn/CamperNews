var React = require('react');
var $  = require('jquery');

    Item  = require('./news'),

    List;

List = React.createClass({
    getInitialState: function () {
        return { posts: [] };
    },
    componentWillMount: function () {
        this.fetchLatestNews();
    },
    fetchLatestNews: function () {
        $.ajax({
            url:       'https://www.freecodecamp.com/news/hot',
            dataType:  'json',
            data:      { format: 'json' },
            success: function (result) {
                this.setState({ posts: result.hits });
            }.bind(this),
            error: function () {
                alert('error getting posts. please try again later');
            }
        });
    },
    render: function () {
        return <ol className="posts">
            {this.state.posts.map(function (post) {
                return <Item key={post.objectID} post={post}/>
            })}
        </ol>;
    }
});

module.exports = news;
