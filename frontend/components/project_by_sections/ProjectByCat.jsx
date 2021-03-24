import React from 'react';
import { Link } from 'react-router-dom'


import ProjectIndex from '../project/ProjectsIndex'
import SectionBar from '../section_bar/SectionBar'
import FreshSection from '../FreshSection'
import TakingOffSection from '../TakingOffSection'
import Tabs from '../project/Tabs'


import FeatureProject from '../project/FeaturePorject'

class ProjectByCat extends React.Component{
    constructor(props){
        super(props);   
    }

    componentDidMount(){
        this.props.fetchCategories();
        this.props.fetchProjects();
    }

    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
        return array
    }

    render(){
        if(!this.props.publishedProjects || !this.props.categories.maincategories){
            return null;
        }
        const { currentUser, publishedProjects, categories} = this.props;
        let tab;
        if(currentUser){
            tab = <a target="_blank" href="https://github.com/kaizhu94/TickStarter/wiki" id='WIKI-link'>WIKI News</a>
        }else{
            tab = <Link to='/signup' id='signup'>Signup For TickStarter</Link>
        }
        debugger
        const mainCat = Object.values(categories.maincategories);
        const subCat = Object.values(categories.subcategories);
        const catNum = this.props.match.params.catId;
        const catsInclude = [];
        let parantCat = 0;

        let head, greet = '';
        if( catNum === '1'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Art'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Arts';
                    greet = 'Discover the artists and organizations using Tickstarter to realize ambitious projects in visual art and performance.'
                }
            })
        }
        if( catNum === '2'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Comics'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Comics & Illustration';
                    greet ='Explore fantastical worlds and original characters from Tickstarter’s community of comics creators and illustrators.';
                }
            })
        }
        if( catNum === '3'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Design'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Design & Tech';
                    greet ='From fine design to innovative tech, discover projects from creators working to build a more beautiful future.';
                }
            })
        }
        if( catNum === '4'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Film & Video'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Film';
                    greet ='Join forces with the intrepid filmmakers and festival creators changing the way stories get told on screen.';
                }
            })
        }
        if( catNum === '5'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Food'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Food & Craft';
                    greet ='See how artisans and entrepreneurs are using Tickstarter to break new ground in food, fashion, and crafts.';
                }
            })
        }
        if( catNum === '6'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Games'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Games';
                    greet ='From tabletop adventures to beloved revivals, discover the projects forging the future of gameplay.';
                }
            })
        }
        if( catNum === '7'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Music'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Music';
                    greet ='Discover new albums, performances, and independent venues from creators using Tickstarter to shape the future of sound.';
                }
            })
        }
        if( catNum === '8'){
            mainCat.forEach(cat => {
                if (cat.category_name === 'Publishing'){
                    parantCat = cat.id;
                    catsInclude.push(parantCat);
                    head = 'Publishing';
                    greet ='Explore how writers and publishers are using Tickstarter to bring new literature, periodicals, podcasts, and more to life.';
                }
            })
        }
        debugger
        subCat.forEach(cat => {
            if( cat.parent_id === parantCat){
                catsInclude.push(cat.id);
            }
        })
        const projectArray = Object.values(publishedProjects);

        const projectsByCat = projectArray.filter( project => catsInclude.includes(project.category_id));

        
        const featured = projectsByCat[Math.floor(Math.random() * projectsByCat.length)];
        
        
        const randomProjects = this.shuffle(projectsByCat).slice(0,9);
        const freshProjects = this.shuffle(projectArray).slice(0,9);
        const offProjects = this.shuffle(projectArray).slice(0,9);
        const listOne = randomProjects.slice(0,3);
        const listTwo = randomProjects.slice(3,6);
        const listThree = randomProjects.slice(6,9);
        debugger

        const pages = [
            {pageNumber: '1', content: <ProjectIndex projects = {listOne}/>},
            {pageNumber: '2', content: <ProjectIndex projects = {listTwo}/>},
            {pageNumber: '3', content: <ProjectIndex projects = {listThree}/>}
          ];
        return (
            <div className='main'>
                <SectionBar/>
                <div className='cat-project-header'>
                    <h1>{head}</h1>
                    <p>{greet}</p>
                </div>
                <div className='main-project-section'>
                    <div className='main-projects-container'>
                        <div className='featured-project-block'>
                            <h3>FEATURED PROJECT</h3>
                            <FeatureProject project={featured}/>
                        </div>
                        <div className = 'recommand-projects-block'>
                            <h3>RECOMMENDED FOR YOU</h3>
                            <Tabs pages={pages} />
                        </div>
                    </div>
                </div>
                <div className='signup-section'>
                    <h1>Discover the best and brightest projects on Tickstarter.</h1>
                    <p>Welcome to Tickstarter</p>
                    {tab}
                </div>
                <div className= 'addition-section1'>
                    <div className='fresh-block'>
                        <div className='project-list'>
                            <h3>FRESH FAVORITES</h3>
                            <FreshSection projects = {freshProjects}/>
                        </div>
                    </div>
                </div>
                <div className= 'addition-section2'>
                        <div className='takingoff-block'>
                            <div className='project-list2'>
                                <h3>TAKING OFF</h3>
                                <TakingOffSection projects={offProjects}/>
                            </div>
                        </div>
                </div>

            </div>
        )
    }
}

export default ProjectByCat;