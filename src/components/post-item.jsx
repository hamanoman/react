
var React = require('react');

var PostItem = React.createClass({
  render: function() {
  	var postList = [];
  	const { jsonData } = this.props;
  	for(var i in jsonData){
  		var post_id = jsonData[i].id;
  		var post_date = jsonData[i].date;
  		var post_date_jp = post_date.substring(0,post_date.indexOf('T'));
  		post_date_jp = post_date_jp.split('-');
  		post_date_jp = post_date_jp[0] + '年' + post_date_jp[1] + '月' + post_date_jp[2] + '日';
  		var post_format = jsonData[i].format;
  		var post_status = jsonData[i].status;
  		var post_type = jsonData[i].type;
  		var post_category = jsonData[i].categories[0];
  		var post_title = jsonData[i].title.rendered;
  		var post_content = jsonData[i].content.rendered;
  		var post_link = jsonData[i].link;
  		var post_thumbnail = jsonData[i]._embedded['wp:featuredmedia'] ? jsonData[i]._embedded['wp:featuredmedia'][0].source_url : '';

  		var postId = 'post-' + post_id;
  		var post_class = postId + ' format-' + post_format + ' status-' + post_status + ' type-' + post_type + ' category-' + post_category + ' post has-post-thumbnail hentry';
    	console.log(post_date);
	    postList.push(
	    	<article id={postId} className={post_class}>
					<header className="entry-header">
						<div className="entry-meta">
							<span className="screen-reader-text">投稿日:</span>
							<a href="http://demo1.rmd-demo.com/8/" rel="bookmark">
								<time className="entry-date published" dateTime={post_date} dangerouslySetInnerHTML={{__html: post_date_jp}}></time>
								<time className="updated" dateTime={post_date} dangerouslySetInnerHTML={{__html: post_date_jp}}></time>
							</a>
						</div>
						<h3 className="entry-title">
							<a href={post_link} rel="bookmark">{post_title}</a>
						</h3>
					</header>

					<div className="post-thumbnail">
						<a href={post_link}>
							<img width="1280" height="720" src={post_thumbnail} className="attachment-twentyseventeen-featured-image size-twentyseventeen-featured-image wp-post-image"/>
						</a>
					</div>

					<div className="entry-content" dangerouslySetInnerHTML={{__html: post_content}}>
					</div>
				</article>
    	);
	  }
  	return (
  		<main id="main" className="site-main" role="main">
  			{postList}
			</main>
		);
  }
});

module.exports = PostItem;