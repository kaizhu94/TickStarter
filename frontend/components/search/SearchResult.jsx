import React from 'react';
const queryString = require('query-string');
class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            projectIdx: -1,
        }
    }
    
    componentDidUpdate(prevPops, prevState){
        if(prevPops.location.search !== this.props.location.search){
            this.props.searchProjects(queryString.parse(this.props.location.search).search)
        }
    }
    componentDidMount(){
        this.props.searchProjects(queryString.parse(this.props.location.search).search)
    }

    redirect(projectId){
        this.props.history.push(`/projects/${projectId}`);
    }

    hoverSubtitle(idx){
        this.setState({
            'projectIdx': idx
        })
    }
    notHoverSubtitle(){
        this.setState({
            'projectIdx': -1
        })
    }
    isHovering(){
        return this.state.projectIdx === -1? '': '-hover'
    }
    render(){
        debugger
        if(!this.props.results){
            return (
                <div className='search-result-block'>
                    <div className='search-result-body'>
                        <div className='no-result'><i className="fas fa-exclamation-triangle" id='ex-mark'></i> We can't find projects that match your search</div>
                    </div>
                </div> 
            )
        }
        const { results } = this.props;
        const resultArray = Object.values(results).map((project, index) =>{
            const subtitle = project.subtitle.length > 100? project.subtitle.slice(0,97)+'...' : project.subtitle;
            const progress = Math.round(project.pledge / project.goal * 100);
            const date = new Date(project.end_date);
            const currentDate = new Date();
            let dayDiff =Math.round((date.getTime() - currentDate.getTime()) / (1000 * 3600 * 24));
            if (dayDiff < 1){
                dayDiff = Math.round((date.getTime() - currentDate.getTime()).getHours());
            }
            debugger
            return (
                <div className='result-ele' key = {index}>
                    <img id='result-image' src={project.title_image} 
                        alt="title-image" onClick={()=> this.redirect(project.id)}/>
                    <div className = 'result-ele-mid' onClick={()=> this.redirect(project.id)}>
                        {
                            this.state.projectIdx === index ? (
                                <h1 id={`ele-name${this.isHovering()}`}>{project.project_name}</h1>
                            ):(
                                <h1 id={`ele-name`}>{project.project_name}</h1>
                            )
                        }
                        <h5 onMouseEnter={()=>this.hoverSubtitle(index)} onMouseLeave={()=>this.notHoverSubtitle()}>{subtitle}</h5>
                        <p>{`By ${project.founder.username}`}</p>
                    </div>
                    <div className='result-ele-lower'>
                        <div className = 'result-progress-base'>
                            <div className = 'result-progress-bar' style={{flexBasis: `${progress}%`}}></div>
                        </div>
                        <h2>{`$${project.pledge} pledged`}</h2>
                        <p>{`${progress}% funded`}</p>
                        <p>{`${dayDiff} days to go`}</p>
                    </div>
                </div>
            )
        })
        // debugger
        return(
            <div className='search-result-block'>
                <div className='search-result-body'>
                    <div className='results-hearder'>Explore <span id='results-hearder-span'>{resultArray.length} projects</span></div>
                    <div className='results-body'>
                        {resultArray}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResult;