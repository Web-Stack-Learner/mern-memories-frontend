import React from 'react';
import useStyles from './styles';
import {CardContent,CardMedia,Card,Typography,Button,CardActions} from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import {MoreHorizOutlined} from "@material-ui/icons";
import moment from 'moment'

const Post = ({post,setCurrentId}) => {
    console.log(post)
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia image={post.selectedFile} className={classes.media} title={post.title}/>
        <div className={classes.overlay}>
            <Typography variant={"h6"}>{post.creator}</Typography>
            <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color:"white"}} size="small" onClick={()=>{
                setCurrentId(post._id)
            }}>
                <MoreHorizOutlined fontSize={"default"}/>
            </Button>
        </div>
        <div className={classes.details}>
            <Typography variant={"body2"} color={"textSecondary"}> {post.tags.map(tag=>(`#${tag}`))}</Typography>
        </div>
        <CardContent>
            <Typography className={classes.title} gutterBottom variant={"h5"} > {post.title}</Typography>
            <Typography variant={"body2"}  color={"textSecondary"}> {post.message}</Typography>

        </CardContent>
        <CardActions>
            <Button size="small" color="primary" onClick={()=>{}}>
                <ThumbUpAltIcon fontSize={"small"}/>
                Like {post.likeCount}
            </Button>
            <Button size="small" color="secondary" onClick={()=>{}}>
                <DeleteIcon fontSize={"small"}/>
            </Button>
        </CardActions>

    </Card>
  );
};

export default Post;
