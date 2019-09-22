import React from 'react';
import { connect, MapStateToPropsParam } from "react-redux";
import { AppState } from '../../store';
import { postListFetch } from './ActionPost';
import { PostProps, PostState, Post } from './TypesPost';

class Index extends React.Component<PostProps,PostState> {
    componentDidMount(): void{
        this.props.postListFetch()
    }

    render(): React.ReactNode {
            const {data} = this.props;
        return (
            <div>
                {data.length && 
                    data.map((post: Post)=> (<div key={post.id}>
                        <span>{post.message}</span>
                    </div>))
                }
            </div>
        )
    }
}

const mapStateToProps: MapStateToPropsParam<PostState, PostProps, AppState>  = (state: AppState) => ({
    data: state.post.data,
})

const mapDispatchToProps = {
    postListFetch,
}


export default connect(mapStateToProps, mapDispatchToProps)(Index);