import React from 'react';
import '../styles/footer.css';


class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <footer>
                    <div className="content">
                        <div className="name">
                            Peter Luna
                        </div>
                        <div className="project-title">GitHub User Search</div>
                        <div className="links">
                            Links
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;